import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Grid,
  GridItem,
  Box,
  Button,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import Chip from "./Chip";

export default function SuppliesForm({
  isOpen,
  onClose,
  supplies,
  itemInfo,
  name,
  unitName,
  packPrice,
  unitsInAPack,
  expiryPeriod,
  addItem,
  totalPacks,
  handleSupplyInputs,
  handleTotalPacks,
  decreaseSupplyItems,
  increaseSupplyItems,
  total,
  orderSupplies,
  checkAllItems,
  allItems,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <div className="formbold-mb-5 formbold-pt-3">
              <label
                className="formbold-form-label formbold-form-label-2"
                data-testid="supplies-form-header"
              >
                Add an item
              </label>
              <Box
                display="flex"
                rowGap="1rem"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                paddingBottom="1rem"
              >
                <Checkbox
                  isChecked={allItems}
                  onChange={checkAllItems}
                  colorScheme="green"
                  flex="1 0 50%"
                  data-testid="select-all-items"
                >
                  All Items
                </Checkbox>
              </Box>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Item</label>
                    <select
                      required={true}
                      onChange={handleSupplyInputs}
                      className="formbold-form-input"
                      data-testid="select-items"
                    >
                      {itemInfo?.map((info, i) => {
                        return <option key={i}>{info.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Unit Name</label>
                    <input
                      readOnly
                      value={unitName}
                      type="text"
                      placeholder="Unit Name"
                      className="formbold-form-input"
                      data-testid="item-unit-name"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Pack Price</label>
                    <input
                      readOnly
                      value={packPrice}
                      type="number"
                      placeholder="Pack price"
                      className="formbold-form-input"
                      data-testid="item-pack-price"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Units In A Pack</label>
                    <input
                      readOnly
                      value={unitsInAPack}
                      type="number"
                      placeholder="Units In A Pack"
                      className="formbold-form-input"
                      data-testid="item-units-in-a-pack"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Expiry Period</label>
                    <input
                      readOnly
                      value={expiryPeriod}
                      type="number"
                      placeholder="Expiry period in days"
                      className="formbold-form-input"
                      data-testid="item-expiry-period"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <label>Total Packs</label>
                    <input
                      onChange={handleTotalPacks}
                      value={totalPacks}
                      required={true}
                      type="number"
                      placeholder="Enter total packs"
                      className="formbold-form-input"
                      min="1"
                      data-testid="item-total-packs"
                    />
                  </div>
                </div>
              </div>
              <Button
                fontWeight="normal"
                fontFamily="'Roboto', sans-serif"
                bgColor="#dff4ce"
                borderRadius="4px"
                mt="1rem"
                isDisabled={name && totalPacks ? false : true}
                onClick={addItem}
                data-testid="add-one-item"
              >
                Add
              </Button>
            </div>
            <Box display="grid" rowGap="2.5rem" justifyItems="center">
              <Grid
                display="grid"
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                }}
                gap={4}
                data-testid="item-chip-container"
              >
                {supplies?.map((supply, i) => (
                  <GridItem key={i}>
                    <Chip
                      name={supply.name}
                      remove={decreaseSupplyItems}
                      add={increaseSupplyItems}
                    />
                  </GridItem>
                ))}
              </Grid>
              <Box
                w="100%"
                border="1px solid #e4e9eb"
                padding="1rem"
                display="grid"
                rowGap="1rem"
                borderRadius="5px"
                data-testid="item-calculations-container"
              >
                {supplies?.map((supply, i) => (
                  <Box
                    key={i}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text data-testid="item-count">
                      {supply.name}({supply.total_packs})
                    </Text>
                    <Text>
                      ${(supply.total_packs * supply.pack_price).toFixed(2)}
                    </Text>
                  </Box>
                ))}
              </Box>
              <Box
                w="100%"
                border="1px solid #e4e9eb"
                padding="1rem"
                display="grid"
                borderRadius="5px"
              >
                <Box display="flex" justifyContent="space-between" w="100%">
                  <Text>Total</Text>
                  <Text data-testid="supplies-total-price">
                    ${total?.toFixed(2)}
                  </Text>
                </Box>
              </Box>
              <Button
                fontWeight="light"
                fontFamily="'Roboto', sans-serif"
                color="white"
                bgColor="#323130"
                borderRadius="4px"
                mt="1rem"
                isDisabled={supplies?.length > 0 ? false : true}
                onClick={orderSupplies}
                data-testid="confirm-order-supplies-button"
              >
                Order Supplies
              </Button>
            </Box>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
