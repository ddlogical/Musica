import { createContext } from "react";

const initialValue = {
    tableView: false,
    setColors: () => {}
}

export const ProductsShowContext = createContext(initialValue);