import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
  Text,
  Button,
  Show,
  Divider,
  Input,
} from "@chakra-ui/react";
import OrderSummaryCalculations, { OrderSummaryOptions } from "./OrderSummary";
import OrderCard from "./OrderCard";
import { FcNews } from "react-icons/fc";
import UnavailableMessage from "../../Shared/UnavailableMessage";

export default function MobileOrder({
  isOpen,
  onClose,
  order_summary_options,
  orders,
  allProducts,
  confirmOrderCondition,
  handleProducts,
  calculateTax,
  calculateTotal,
  subTotal,
  confirmOrder,
  orderId,
  handleCustomerName,
}) {
  return (
    <Show breakpoint="(max-width: 991px)">
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="fixed"
        w={{ base: "100%", sm: "50%", md: "40%", lg: "20vw" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box
            bgColor="white"
            right="0"
            borderLeftRadius=".75rem"
            boxShadow="md"
            padding="1rem"
            display="grid"
            rowGap=".75em"
            overflowY="auto"
            mt="1.5rem"
          >
            <Box>
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
                  ?.filter((products) =>
                    orders.hasOwnProperty(products.product_id)
                  )
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
                w="60%"
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
              bgColor="gray.100"
              borderRadius="5px"
              display="grid"
              rowGap=".75rem"
              padding="3.5%"
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
            >
              Confirm Order
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </Show>
  );
}
