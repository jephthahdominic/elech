import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

function OrderProvider({children}){
    const [selectedSize, setSelectedSize] = useState(null);
    const [isError, setIsError] = useState(false);

    function placeOrder(){
        if(selectedSize === null) {
            setIsError(true);
            return;
        }
        alert("successfully placed order");
        setSelectedSize(null)
    }

    return <OrderContext.Provider value={{selectedSize, setSelectedSize, isError, setIsError, placeOrder}}>
        {children}
    </OrderContext.Provider>
}

function useOrder(){
    const context = useContext(OrderContext);
    if(context === undefined) throw new Error("You cannot use a context outside its provider");
    return context
}

export {OrderProvider, useOrder}