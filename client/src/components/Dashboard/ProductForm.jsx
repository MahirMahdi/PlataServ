import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Grid,
  GridItem,
  Button,
  Text,
} from "@chakra-ui/react";
import Chip from "./Chip";
import { FcAddImage } from "react-icons/fc";

export default function ProductForm({
  isOpen,
  onClose,
  type,
  productName,
  price,
  description,
  image,
  ingredients,
  name,
  unitName,
  packPrice,
  unitsInAPack,
  expiryPeriod,
  handleType,
  handleProductName,
  handlePrice,
  handleDescription,
  handleImage,
  addIngredient,
  handleName,
  handleUnitName,
  handlePackPrice,
  handleUnitsInAPack,
  handleExpiryPeriod,
  addProduct,
  updateIngredients,
}) {
  const addIngredientCondition =
    name && unitName && packPrice && unitsInAPack && expiryPeriod
      ? false
      : true;
  const addProductCondition =
    productName &&
    price &&
    type &&
    description &&
    image &&
    ingredients.length > 0
      ? false
      : true;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <div className="formbold-main-wrapper">
          {/* Product form starts here*/}
          <div className="formbold-form-wrapper">
            <Text
              w="100%"
              textAlign="center"
              fontFamily="'Poppins', sans-serif"
              padding="1.5rem 0"
              fontSize={{ base: "1.25rem", lg: "1.5rem" }}
              fontWeight="semibold"
            >
              Add a product
            </Text>
            <div className="formbold-mb-5">
              <label className="formbold-form-label"> Type </label>
              <select
                required={true}
                onChange={handleType}
                type="text"
                placeholder="Select type"
                className="formbold-form-input"
              >
                <option value="burger">Burger</option>
                <option value="sandwich">Sandwich</option>
                <option value="drinks">Drinks</option>
                <option value="sides">Sides</option>
              </select>
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label"> Name </label>
              <input
                required={true}
                onChange={handleProductName}
                type="text"
                placeholder="Name"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label"> Description </label>
              <input
                required={true}
                onChange={handleDescription}
                type="text"
                placeholder="Description"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label"> Price </label>
              <input
                required={true}
                onChange={handlePrice}
                type="number"
                placeholder="Price"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label className="formbold-form-label" style={{display:"grid", rowGap:".75rem"}}>
                Image
              <input
                required={true}
                onChange={handleImage}
                accept="image/*"
                type="file"
                className="formbold-form-input"
                style={{ display: "none" }}
              />
              <span style={{width:"100%", borderRadius:"5px", border:"1px solid #e0e0e0", display:"flex", alignItems:"center", columnGap:"1rem", padding:".75rem 1.25rem", cursor:"pointer"}}>
                <FcAddImage size="24px"/>
              {image ? `${image.name}` : "Upload image"}
              </span></label>
            </div>

            {/* Ingredient form starts here*/}
            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Add ingredients
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      value={name}
                      required={true}
                      onChange={handleName}
                      type="text"
                      placeholder="Name"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      value={unitName}
                      required={true}
                      type="text"
                      onChange={handleUnitName}
                      placeholder="Unit Name"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      value={packPrice}
                      required={true}
                      onChange={handlePackPrice}
                      type="number"
                      placeholder="Pack price"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      value={unitsInAPack}
                      required={true}
                      onChange={handleUnitsInAPack}
                      type="number"
                      placeholder="Units In A Pack"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      value={expiryPeriod}
                      required={true}
                      onChange={handleExpiryPeriod}
                      type="number"
                      placeholder="Expiry period in days"
                      className="formbold-form-input"
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
                isDisabled={addIngredientCondition}
                onClick={addIngredient}
              >
                Add
              </Button>
              <Grid
                w="100%"
                display="grid"
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                }}
                gap={2}
                mt="2rem"
              >
                {ingredients?.map((ingredient, i) => (
                  <GridItem key={i}>
                    <Chip name={ingredient.name} remove={updateIngredients} />
                  </GridItem>
                ))}
              </Grid>
            </div>
            <Button
              fontWeight="light"
              fontFamily="'Roboto', sans-serif"
              color="white"
              bgColor="#323130"
              borderRadius="4px"
              mt="1rem"
              isDisabled={addProductCondition}
              onClick={addProduct}
            >
              Add new product
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
