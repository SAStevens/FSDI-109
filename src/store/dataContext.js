//Interface

import { createContext } from "react";

// Interface, promise, blueprint
// Should not have any values or implemetations
// Just describes the structure of the data

const DataContext = createContext({
    cart: [],
    user: {},
    // functions
    addProductsToCart: () => {},
    removeProductsFromCart: () => {},
});

export default DataContext; 
