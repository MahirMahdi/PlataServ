import { useContext } from "react";
import { POSContext } from "../contexts/POSContext";

export default function usePOS() {
  return useContext(POSContext);
}
