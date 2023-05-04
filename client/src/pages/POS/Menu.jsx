import { useState, useEffect, memo } from "react";
import usePOS from "../../hooks/usePOS";
import axios from "../../api/api";
import {
  Box,
  Input,
  Icon,
  Grid,
  Text,
  Button,
  useDisclosure,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { MobileSidebar } from "../../components/Sidebar/Sidebar";
import { FcNews } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import MenuCard from "../../components/POS/Menu/MenuCard";
import Tabs from "../../components/POS/Menu/Tabs";
import OrderCard from "../../components/POS/Menu/OrderCard";
import MobileOrder from "../../components/POS/Menu/MobileOrder";
import UnavailableMessage from "../../components/Shared/UnavailableMessage";
import OrderSummaryCalculations, {
  OrderSummaryOptions,
} from "../../components/POS/Menu/OrderSummary";
import { uid } from "uid";

function Menu() {
  const [category, setCategory] = useState("Burger");
  const toast = useToast();
  const [allProducts, setAllProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCategory = (value) => {
    setCategory(value);
  };

  const getAllProducts = async () => {
    const response = await axios.get("/products");
    setAllProducts(response.data.products);
  };

  const addProductToOrder = (data) => {
    add(data.product_id, data.discount_period, data.price);

    setOrders(JSON.parse(localStorage.getItem("orders")));
    setSubtotal(JSON.parse(localStorage.getItem("subtotal")));

    showToast("success", "Added to Order!");
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //order states
  const { remove, add } = usePOS();
  const [payment, setPayment] = useState(null);
  const [point, setPoint] = useState(null);
  const [destination, setDestination] = useState(null);
  const [name, setName] = useState("");
  const [subTotal, setSubtotal] = useState(
    JSON.parse(localStorage.getItem("subtotal"))
  );
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );
  const [productIngredients, setProductIngredients] = useState([]);
  const [dashboardDetails, setDashboardDetails] = useState(null);
  const [dashboardProducts, setDashboardProducts] = useState("");
  const [orderId, setOrderId] = useState(uid(7));

  const order_summary_options = [
    {
      type: "Payment Method",
      values: ["Cash", "Credit card", "Debit card"],
      state: payment,
      method: function handlePayment(e) {
        setPayment(e.target.innerHTML);
      },
    },
    {
      type: "Order Point",
      values: ["Counter", "Uber eats", "Mobile"],
      state: point,
      method: function handleOrderPoint(e) {
        setPoint(e.target.innerHTML);
      },
    },
    {
      type: "Destination",
      values: ["Dine in", "Delivery", "Take out"],
      state: destination,
      method: function handleDestination(e) {
        setDestination(e.target.innerHTML);
      },
    },
  ];

  const showToast = (type, message) => {
    return toast({
      title: message,
      status: type,
      duration: 1000,
      isClosable: true,
    });
  };

  const handleProducts = (type, product_id, product, price) => {
    // product increament or decreament based on type and calculate subtotal
    type === "add"
      ? add(product_id, product, price)
      : remove(product_id, product, price);

    setOrders(JSON.parse(localStorage.getItem("orders")));
    setSubtotal(JSON.parse(localStorage.getItem("subtotal")));
  };

  const handleCustomerName = (e) => {
    setName(e.target.value);
  };

  const dashboardProductsDetails = () => {
    const filteredProducts = allProducts.filter((products) =>
      orders?.hasOwnProperty(products.product_id)
    );
    const dashboardProducts = filteredProducts.map((product) => {
      return { ...product, ["quantity"]: orders[product.product_id] };
    });

    setDashboardProducts(
      dashboardProducts.map((product) => {
        const { name, type, price } = product;
        return {
          name: name,
          product_type: type,
          quantity: orders[product.product_id],
          price: product.discount_period
            ? Number(
                ((price - price * 0.1) * orders[product.product_id]).toFixed(2)
              )
            : Number((price * orders[product.product_id]).toFixed(2)),
        };
      })
    );
  };

  const ingredientsDetails = () => {
    const filteredProducts = allProducts.filter((products) =>
      orders?.hasOwnProperty(products.product_id)
    );
    let allingredients = [];

    filteredProducts.map((product) => {
      const { ingredients } = product;
      ingredients.map((ingredient) => {
        const { name, units_in_a_pack, _id } = ingredient;
        allingredients.push({
          id: _id,
          name: name,
          units_in_a_pack: units_in_a_pack,
          quantity: orders[product.product_id],
        });
      });
    });

    setProductIngredients(allingredients);
  };

  useEffect(() => {
    dashboardProductsDetails();
    ingredientsDetails();
  }, [orders, allProducts]);

  const confirmOrder = async () => {
    const response = await axios.put("/inventory", {
      ingredients: productIngredients,
    });

    if (response.data.error) {
      showToast("error", response.data.error);
    } else {
      showToast("success", response.data.success);
      saveDashboardDetails();
      removeOrderDetails();
    }
  };

  const confirmOrderCondition =
    orders && name && payment && point && destination;

  const saveDashboardDetails = () => {
    //saved to localstorage for persistent details
    const dashboard = JSON.parse(localStorage.getItem("dashboard"));
    localStorage.setItem(
      "dashboard",
      JSON.stringify(
        !dashboard ? [dashboardDetails] : [...dashboard, dashboardDetails]
      )
    );
  };

  const removeOrderDetails = () => {
    localStorage.removeItem("orders");
    localStorage.removeItem("subtotal");
    setName(null);
    setOrders(null);
    setSubtotal(null);
    setPayment(null);
    setPoint(null);
    setDestination(null);
    setOrderId(uid(7));
  };

  const calculateTax = (amount) => {
    return Number((amount * 0.1).toFixed(2));
  };

  const calculateTotal = (amount) => {
    const tax = calculateTax(amount);

    return Number(tax + amount).toFixed(2);
  };

  useEffect(() => {
    // timestamp is for measuring service of time.
    setDashboardDetails({
      details: dashboardProducts,
      customer_name: name,
      total_price: Number((0.1 * subTotal + subTotal).toFixed(2)),
      timestamp: Date.now(),
      order_id: orderId,
      payment_method: payment,
      order_point: point,
      destination: destination,
      total_quantity:
        orders &&
        Object.values(orders).reduce((a, b) => {
          return a + b;
        }),
    });
  }, [orders, name, payment, point, destination]);

  return (
    <Box display="flex" w="100vw" h="100vh">
      <MobileOrder
        isOpen={isOpen}
        onClose={onClose}
        order_summary_options={order_summary_options}
        orders={orders}
        allProducts={allProducts}
        confirmOrderCondition={confirmOrderCondition}
        handleProducts={handleProducts}
        calculateTax={calculateTax}
        calculateTotal={calculateTotal}
        subTotal={subTotal}
        confirmOrder={confirmOrder}
        orderId={orderId}
        handleCustomerName={handleCustomerName}
      />
      <Box
        w={{ base: "100vw", lg: "60vw", xl: "65vw" }}
        ml={{ lg: "15vw" }}
        padding={{
          base: "0 1rem",
          sm: "0 1.5rem",
          md: "0 1.75rem",
          lg: "1.5rem 2rem",
        }}
      >
        <Box
          display={{ base: "flex", lg: "none" }}
          w={{ base: "100%", lg: "70%" }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            display="flex"
            w={{ base: "100%", lg: "35%" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <MobileSidebar />
            <Box onClick={onOpen} right={0} bgColor="white" cursor="pointer">
              <RiFileList3Line fontSize="1.5rem" />
            </Box>
          </Box>
        </Box>
        <Box display="grid" rowGap=".5rem" w="100%">
          <Text
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "1rem", lg: "1.25rem" }}
          >
            Categories
          </Text>
          <Tabs
            handleClick={handleCategory}
            tab_state={category}
            categories={categories}
          />
        </Box>
        <Box mt={{ base: "2.5rem", lg: "2.5rem" }} paddingBottom="2.5rem">
          <Grid
            w="100%"
            display="grid"
            // placeItems="center"
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={10}
          >
            {allProducts
              .filter((product) => product.type === category.toLowerCase())
              .map((data, index) => (
                <MenuCard
                  key={index}
                  addProductToOrder={() => {
                    addProductToOrder(data);
                  }}
                  product={data}
                />
              ))}
          </Grid>
        </Box>
      </Box>
      <Box
        position="fixed"
        hideBelow="lg"
        w={{ base: "100%", md: "60%", lg: "25vw", xl: "20vw" }}
        h="100vh"
        bgColor="white"
        right="0"
        borderLeftRadius=".75rem"
        boxShadow="md"
        padding="1rem"
        display="grid"
        rowGap=".25em"
        overflowY="auto"
      >
        <Box w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              fontFamily="'Poppins', sans-serif"
              fontSize="1.25rem"
              fontWeight="medium"
            >
              Current Order
            </Text>
            <Box
              textAlign="center"
              w="40%"
              h="1.5rem"
              bgColor="#323130"
              borderRadius="5px"
            >
              <Text
                fontFamily="'Poppins', sans-serif"
                fontSize=".9rem"
                fontWeight="medium"
                color="gray.100"
              >
                #{orderId}
              </Text>
            </Box>
          </Box>
          <Text fontFamily="'Poppins', sans-serif" fontWeight="light">
            Items
          </Text>
        </Box>
        <Box w="100%" display="grid" padding=".5rem 0" rowGap=".75rem">
          {orders ? (
            allProducts
              ?.filter((products) => orders.hasOwnProperty(products.product_id))
              .map((product, i) => (
                <OrderCard
                  key={i}
                  product={product}
                  handleAdd={() => {
                    handleProducts(
                      "add",
                      product.product_id,
                      product.discount_period,
                      product.price
                    );
                  }}
                  handleRemove={() => {
                    handleProducts(
                      "remove",
                      product.product_id,
                      product.discount_period,
                      product.price
                    );
                  }}
                  count={orders[product.product_id]}
                />
              ))
          ) : (
            <UnavailableMessage
              logo={<FcNews size={30} />}
              message={"Order list is empty"}
            />
          )}
        </Box>
        <Box w="100%" m="1.25rem 0" display="grid" rowGap="1rem">
          <Text
            fontFamily="'Poppins', sans-serif"
            fontSize="1.15rem"
            fontWeight="medium"
          >
            Order Summary
          </Text>
          <Input
            placeholder="Customer Name"
            type="text"
            onChange={handleCustomerName}
          />
        </Box>
        <Box
          w="100%"
          h="17.5vh"
          bgColor="gray.100"
          borderRadius="5px"
          padding="1.25rem"
          display="grid"
          rowGap=".15rem"
        >
          <OrderSummaryCalculations type={"Subtotal"} value={subTotal} />
          <OrderSummaryCalculations
            type={"Tax"}
            value={calculateTax(subTotal)}
          />
          <Divider />
          <OrderSummaryCalculations
            type={"Total"}
            value={calculateTotal(subTotal)}
          />
        </Box>
        <Box
          w="100%"
          h="22.5vh"
          bgColor="gray.100"
          borderRadius="5px"
          display="grid"
          placeItems="center"
          padding="2.5%"
        >
          {order_summary_options.map((options, i) => (
            <OrderSummaryOptions
              key={i}
              type={options.type}
              typeOptions={options.values}
              method={options.method}
              state={options.state}
            />
          ))}
        </Box>
        <Button
          isDisabled={confirmOrderCondition ? false : true}
          onClick={confirmOrder}
          fontWeight="light"
          fontFamily="'Roboto', sans-serif"
          color="white"
          bgColor="#323130"
          borderRadius="4px"
          _hover={{ bgColor: "blue.300" }}
        >
          Confirm Order
        </Button>
      </Box>
    </Box>
  );
}

const categories = [
  {
    name: "Burger",
    image: `${import.meta.env.VITE_CDN_URL}/tr:h-45/burger.png?`,
  },
  {
    name: "Sandwich",
    image: `${import.meta.env.VITE_CDN_URL}/tr:h-45/sandwich.png?`,
  },
  {
    name: "Drinks",
    image: `${import.meta.env.VITE_CDN_URL}/tr:h-45/drink.png?`,
  },
  {
    name: "Sides",
    image: `${import.meta.env.VITE_CDN_URL}/tr:h-45/sides.png?`,
  },
];

export const SearchIcon = () => {
  return (
    <Icon
      color="gray.100"
      w={{ base: 4, lg: 5 }}
      h={{ base: 4, lg: 5 }}
      as={IoSearch}
    />
  );
};

export default memo(Menu);
