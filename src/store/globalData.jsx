import { useState } from 'react';
import DataContext from './dataContext';

function GlobalData(props){
    const [cart, setCart] =useState ([]);
    const [fakeUser, setFakeUser] = useState ({name:'Scott'});

    function addProductsToCart(product) {
        console.log("Global is called");

        let copy = [...cart]; 
        copy.push(product);
        setCart(copy);

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