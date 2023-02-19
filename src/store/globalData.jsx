import { useState } from 'react';
import DataContext from './dataContext';

function GlobalData(props){
    const [cart, setCart] =useState ([]);
    const [fakeUser, setFakeUser] = useState ({name:'Scott'});

    function addProductsToCart() {
        console.log("Global is called");
    }
    function removeProductsFromCart() {}

    return (
        <DataContext.Provider 
            value={{
                cart: cart,
                user: fakeUser,
                addProductsToCart: addProductsToCart,
                removeProductsFromCart: removeProductsFromCart,
            }}
            >
                {props.children}
            </DataContext.Provider>
        );
}

export default GlobalData;        