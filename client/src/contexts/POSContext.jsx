import { createContext } from "react";

export const POSContext = createContext();

export const addItemToOrder = (id, discount, price) => {
  // product_id is set as orders property because data structure is much simpler this way.
  // If each order is an object and all the objects are in an array, the data structure becomes very complex and it's harder to query data.

  const product_price = discount ? (price - price * 0.1).toFixed(2) : price;
  const orders = JSON.parse(localStorage.getItem("orders")) ?? {};
  let order;

  if (orders[id]) {
    let updatedItemCount = orders[id] + 1;
    order = { ...orders, [id]: updatedItemCount };
  } else {
    order = { ...orders, [id]: 1 };
  }

  localStorage.setItem("orders", JSON.stringify(order));
  calculateSubTotal("add", Number(product_price));
};

export const deleteOrder = (id) => {
  const order = JSON.parse(localStorage.getItem("orders"));
  delete order[id];
  localStorage.setItem("orders", JSON.stringify(order));
};

export const removeItemFromOrder = (id, discount, price) => {
  const product_price = discount ? (price - price * 0.1).toFixed(2) : price;
  const orders = JSON.parse(localStorage.getItem("orders"));

  if (orders[id] > 1) {
    localStorage.setItem(
      "orders",
      JSON.stringify({ ...orders, [id]: orders[id] - 1 })
    );
  } else {
    deleteOrder(id);
  }

  calculateSubTotal("remove", Number(product_price));

  const updatedOrders = Object.keys(JSON.parse(localStorage.getItem("orders")));

  if (updatedOrders.length === 0) {
    localStorage.removeItem("orders");
    localStorage.removeItem("subtotal");
  }
};

export const calculateSubTotal = (type, price) => {
  const previousValue = parseFloat(localStorage.getItem("subtotal"));
  const subtotal = isNaN(parseFloat(previousValue))
    ? 0
    : parseFloat(previousValue);

  let updatedValue;

  if (type === "add") {
    updatedValue = (subtotal + price).toFixed(2);
  } else {
    updatedValue = (subtotal - price).toFixed(2);
  }

  localStorage.setItem("subtotal", updatedValue);
};

export default function POSProvider({ children }) {
  // to avoid repetition these functions are passed through this context.
  return (
    <POSContext.Provider
      value={{ add: addItemToOrder, remove: removeItemFromOrder }}
    >
      {children}
    </POSContext.Provider>
  );
}
