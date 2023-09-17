import {
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AlertCard from "../components/Dashboard/AlertCard";
import { BsBagPlus, BsPlusCircle } from "react-icons/bs";
import ProductForm from "../components/Dashboard/ProductForm";
import SuppliesForm from "../components/Dashboard/SuppliesForm";
import { uid } from "uid";
import axios from "../api/api";
import OrderPreviewCard from "../components/Dashboard/OrderPreviewCard";
import { FcLeave } from "react-icons/fc";
import UnavailableMessage from "../components/Shared/UnavailableMessage";

export default function Dashboard() {
  const {
    isOpen: isProductFormOpen,
    onOpen: onProductFormOpen,
    onClose: onProductFormClose,
  } = useDisclosure();
  const {
    isOpen: isSuppliesFormOpen,
    onOpen: onSuppliesFormOpen,
    onClose: onSuppliesFormClose,
  } = useDisclosure();
  const {
    isOpen: isAlertPreviewOpen,
    onOpen: onAlertPreviewOpen,
    onClose: onAlertPreviewClose,
  } = useDisclosure();

  const toast = useToast();
  const showToast = (type, message) => {
    return toast({
      title: message,
      status: type,
      duration: 1000,
      isClosable: true,
    });
  };

  //product states
  const [type, setType] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState([]);

  // ingredient states
  const [name, setName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [packPrice, setPackPrice] = useState("");
  const [unitsInAPack, setUnitsInAPack] = useState("");
  const [expiryPeriod, setExpiryPeriod] = useState("");
  const [ingredients, setIngredients] = useState([]);

  // supplies states
  const [itemInfo, setItemInfo] = useState([]);
  const [totalPacks, setTotalPacks] = useState("");
  const [supplies, setSupplies] = useState([]);
  const [total, setTotal] = useState(0);
  const [allItems, setAllItems] = useState(false);
  const [supplyState, setSupplyState] = useState(0);

  // product functions
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async () => {
    const response = await axios.post("/product", productData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.data.error) {
      showToast("error", "Error!");
    } else {
      setProductData(null);
      setIngredients([]);
      showToast("success", "Product added successfully!");
    }
  };

  useEffect(() => {
    setProductData({
      product_id: uid(5),
      type: type,
      name: productName,
      price: price,
      description: description,
      image: image,
      ingredients: ingredients,
    });
  }, [productName, price, description, image, type, ingredients]);

  //ingredient funtions
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUnitName = (e) => {
    setUnitName(e.target.value);
  };

  const handlePackPrice = (e) => {
    setPackPrice(e.target.value);
  };

  const handleUnitsInAPack = (e) => {
    setUnitsInAPack(e.target.value);
  };

  const handleExpiryPeriod = (e) => {
    setExpiryPeriod(e.target.value);
  };

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      {
        name: name,
        unit_name: unitName,
        pack_price: packPrice,
        unit_in_a_pack: unitsInAPack,
        expiry_period: expiryPeriod,
      },
    ]);
    setName("");
    setUnitName("");
    setPackPrice("");
    setUnitsInAPack("");
    setExpiryPeriod("");
  };

  const updateIngredients = (e) => {
    const item = e.target.parentElement.children[0].innerHTML;
    setIngredients(
      ingredients?.filter((ingredient) => ingredient.name !== item)
    );
  };

  //supplies functions
  const getSupplyItemsInfo = async () => {
    const response = await axios.get("/supplies");
    setItemInfo(response.data.supplies);
  };

  const handleSupplyInputs = (e) => {
    setName(e.target.value);
    const item = itemInfo.filter((info) => info.name === e.target.value)[0];
    setUnitName(item.unit_name);
    setPackPrice(item.pack_price);
    setUnitsInAPack(item.units_in_a_pack);
    setExpiryPeriod(item.expiry_period);
  };

  const handleTotalPacks = (e) => {
    setTotalPacks(e.target.value);
  };

  const addAllItems = () => {
    for (const item of itemInfo) {
      const commonIndex = supplies.findIndex(
        (supply) => supply.name === item.name
      );
      if (commonIndex !== -1) {
        const supply = supplies?.filter((supply) => supply.name === name)[0];
        let packs = Number(supply.total_packs);
        packs += 1;
        setSupplyState(supplyState + 1);
        supply.total_packs = packs;
        const indexOfSupply = supplies?.findIndex(
          (supply) => supply.name === name
        );
        supplies[indexOfSupply] = supply;
        setSupplies(supplies);
      } else {
        setSupplies((prev) => [
          ...prev,
          {
            name: item.name,
            unit_name: item.unit_name,
            pack_price: item.pack_price,
            units_in_a_pack: item.units_in_a_pack,
            expiry_period: item.expiry_period,
            total_packs: 1,
            total_units: 1 * item.units_in_a_pack,
          },
        ]);
      }
      setSupplyState(supplyState + 1);
    }
  };

  const removeAllItems = () => {
    setSupplies(
      supplies.filter((obj) => {
        if (obj.total_packs === 1) {
          return false;
        } else {
          obj.total_packs -= 1;
          return true;
        }
      })
    );
    setSupplyState(supplyState - 1);
  };

  const checkAllItems = () => {
    if (allItems) {
      removeAllItems();
      setAllItems(false);
    } else {
      addAllItems();
      setAllItems(true);
    }
  };

  const addItem = () => {
    setSupplies((prev) => [
      ...prev,
      {
        name: name,
        unit_name: unitName,
        pack_price: packPrice,
        units_in_a_pack: unitsInAPack,
        expiry_period: expiryPeriod,
        total_packs: totalPacks,
        total_units: totalPacks * unitsInAPack,
      },
    ]);
    setName("");
    setUnitName("");
    setPackPrice("");
    setUnitsInAPack("");
    setExpiryPeriod("");
    setTotalPacks("");
  };

  const decreaseSupplyItems = (name) => {
    const supply = supplies?.filter((supply) => supply.name === name)[0];

    if (supply.total_packs === 1) {
      setSupplies(supplies?.filter((supply) => supply.name !== name));
      setSupplyState(supplyState - 1);
    } else {
      let packs = Number(supply.total_packs);
      packs -= 1;
      setSupplyState(supplyState - 1);
      supply.total_packs = packs;
      const indexOfSupply = supplies?.findIndex(
        (supply) => supply.name === name
      );
      supplies[indexOfSupply] = supply;
      setSupplies(supplies);
    }
  };

  const increaseSupplyItems = (name) => {
    const supply = supplies?.filter((supply) => supply.name === name)[0];
    let packs = Number(supply.total_packs);
    packs += 1;
    setSupplyState(supplyState + 1);
    supply.total_packs = packs;
    const indexOfSupply = supplies?.findIndex((supply) => supply.name === name);
    supplies[indexOfSupply] = supply;
    setSupplies(supplies);
  };

  const orderSupplies = async () => {
    await axios.post("/purchases", supplies);
    const response = await axios.post("/inventory/admin", supplies);
    if (response.data.error) {
      showToast("error", "Error!");
    } else {
      setSupplies([]);
      showToast("success", "Ordered supplies successfully!");
    }
  };

  useEffect(() => {
    getSupplyItemsInfo();
  }, []);

  useEffect(() => {
    setTotal(
      supplies.reduce(
        (prev, curr) => prev + curr.total_packs * curr.pack_price,
        0
      )
    );
  }, [supplyState, supplies]);

  //alert states
  const [alerts, setAlerts] = useState();
  const [preview, setPreview] = useState(false);
  const [previewType, setPreviewType] = useState();
  const [previewAlert, setPreviewAlert] = useState();
  const [parOrder, setPAROrder] = useState();
  const [alertTotalPacks, setAlertTotalPacks] = useState();

  //alert functions
  const getAlerts = async () => {
    const response = await axios.get("/alerts");
    setAlerts(response.data.alerts);
  };

  const applyDiscount = async (alert) => {
    const response = await axios.post("/discount", alert);
    if (response.data.message) {
      showToast("success", response.data.message);
      getAlerts();
    } else {
      showToast("error", "Error");
    }
  };

  const donateFoodBank = async (alert) => {
    const response = await axios.post("/foodbank", alert);
    if (response.data.message) {
      showToast("success", response.data.message);
      getAlerts();
    } else {
      showToast("error", "Error");
    }
  };

  const getPARBuilderOrder = async () => {
    const count_alerts = alerts?.filter((alert) => alert.alert_tag === "count");
    const response = alerts && (await axios.post("/par", count_alerts));
    setPAROrder(response?.data.par);
  };

  const previewOrderCard = (e, alertItem) => {
    setPreview(true);
    setPreviewType(e.target.innerHTML);
    setPreviewAlert(alertItem);
    onAlertPreviewOpen();
  };

  const handleAlertTotalPacks = (e) => {
    setAlertTotalPacks(e.target.value);
  };

  const confirmOrder = async (details, orderType) => {
    if (orderType === "Custom Order") {
      delete details.total_packs;

      const newDetails = Object.assign(
        { total_packs: Number(alertTotalPacks) },
        details
      );

      const { units_in_a_pack, total_packs } = newDetails;
      const total_units = units_in_a_pack * total_packs;
      newDetails.total_units = total_units;

      await axios.post("/purchases", [newDetails]);

      const response = await axios.post("/inventory/alert", [newDetails]);

      if (response.data.error) {
        showToast("error", "Error!");
      } else {
        showToast("success", "Order Confirmed!");
      }
      setPreview(false);
    } else {
      const { units_in_a_pack, total_packs } = details;
      const total_units = units_in_a_pack * total_packs;
      details.total_units = total_units;

      await axios.post("/purchases", [details]);

      const response = await axios.post("/inventory/alert", [details]); // add total_units

      if (response.data.error) {
        showToast("error", "Error!");
      } else {
        showToast("success", "Order Confirmed!");
      }
      setPreview(false);
    }

    getAlerts();
  };

  useEffect(() => {
    getAlerts();
  }, []);

  useEffect(() => {
    getPARBuilderOrder();
  }, [alerts]);

  return (
    <Box display="flex" w="100vw" h="100vh">
      <Box
        w={{ base: "100vw", lg: "85vw" }}
        padding={{
          base: "0 1rem",
          sm: "0 1.5rem",
          md: "0 1.75rem",
          xl: "0 2rem",
        }}
        ml={{ lg: "15vw" }}
        minH="100vh"
      >
        <Box
          mt="1.5rem"
          display={{ xs: "grid", sm: "flex" }}
          flexDirection="row-reverse"
          justifyContent="space-between"
          rowGap=".5rem"
          w="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              onClick={onSuppliesFormOpen}
              colorScheme="cyan"
              color="gray.500"
              variant="ghost"
              leftIcon={<BsBagPlus />}
              data-testid="order-supplies-button"
            >
              Order Supplies
            </Button>
            <Button
              onClick={onProductFormOpen}
              colorScheme="cyan"
              color="gray.500"
              variant="ghost"
              leftIcon={<BsPlusCircle />}
              data-testid="add-product-button"
            >
              Add a product
            </Button>
          </Box>
          <Text
            padding={{ base: "1rem", sm: "0" }}
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: "1.25rem", lg: "1.5rem" }}
            fontWeight="semibold"
            data-testid="alerts-header"
          >
            Alerts
          </Text>
        </Box>
        <Box mt="1.5rem">
          {alerts?.length !== 0 ? (
            <Grid
              w="100%"
              display="grid"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={6}
              paddingBottom="1.5rem"
            >
              {alerts?.map((alert) => (
                <GridItem key={alert._id}>
                  <AlertCard
                    type={alert.alert_tag}
                    item={alert.item}
                    alertDate={alert.item.expiry_date}
                    applyDiscount={() => applyDiscount(alert)}
                    donateFoodBank={() => donateFoodBank(alert)}
                    preview={(e) => previewOrderCard(e, alert.item)}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <UnavailableMessage
              logo={<FcLeave size={36} />}
              message={"No alerts found"}
            />
          )}
        </Box>
        <ProductForm
          isOpen={isProductFormOpen}
          onClose={onProductFormClose}
          type={type}
          productName={productName}
          price={price}
          description={description}
          image={image}
          ingredients={ingredients}
          name={name}
          unitName={unitName}
          unitsInAPack={unitsInAPack}
          packPrice={packPrice}
          expiryPeriod={expiryPeriod}
          handleType={handleType}
          handleProductName={handleProductName}
          handlePrice={handlePrice}
          handleDescription={handleDescription}
          handleImage={handleImage}
          addIngredient={addIngredient}
          addProduct={addProduct}
          handleName={handleName}
          handleUnitName={handleUnitName}
          handlePackPrice={handlePackPrice}
          handleUnitsInAPack={handleUnitsInAPack}
          handleExpiryPeriod={handleExpiryPeriod}
          updateIngredients={updateIngredients}
        />
        <SuppliesForm
          isOpen={isSuppliesFormOpen}
          onClose={onSuppliesFormClose}
          supplies={supplies}
          itemInfo={itemInfo}
          ingredients={ingredients}
          name={name}
          unitName={unitName}
          unitsInAPack={unitsInAPack}
          packPrice={packPrice}
          expiryPeriod={expiryPeriod}
          totalPacks={totalPacks}
          total={total}
          handleSupplyInputs={handleSupplyInputs}
          handleTotalPacks={handleTotalPacks}
          addItem={addItem}
          decreaseSupplyItems={decreaseSupplyItems}
          orderSupplies={orderSupplies}
          allItems={allItems}
          checkAllItems={checkAllItems}
          increaseSupplyItems={increaseSupplyItems}
        />
        {preview &&
          parOrder &&
          parOrder
            ?.filter((order) => previewAlert.name === order.name)
            .map((order, i) => (
              <OrderPreviewCard
                key={i}
                isOpen={isAlertPreviewOpen}
                onClose={onAlertPreviewClose}
                name={order.name}
                unitName={order.unit_name}
                unitsInAPack={order.units_in_a_pack}
                totalPacks={
                  previewType !== "Custom Order"
                    ? order.total_packs
                    : alertTotalPacks
                }
                handleTotalPacks={handleAlertTotalPacks}
                packPrice={order.pack_price}
                previewType={previewType}
                expiryPeriod={order.expiry_period}
                confirmOrder={() => confirmOrder(order, previewType)}
              />
            ))}
      </Box>
    </Box>
  );
}
