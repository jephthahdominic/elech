import { createContext, useContext, useReducer} from "react";

const OrderContext = createContext();

const initialState = {
    product: null,
    selectedSize: null,
    isError: false
}

function orderReducer(state, action){
    switch(action.type){
        case "selectSize":
            return {...state, selectedSize:action.payload, isError:false}
        case "selectCountry":
            return {...state, selectedSize:initialState.selectedSize}
        case "placeOrder": {
            const order = {...action.payload, size:state.selectedSize}
            return {...state, product:order}
        }
        case "Error":
            return {...state, isError: true}
        default:
            return initialState;
    }
}

function OrderProvider({children}){
    const [state, dispatch] = useReducer(orderReducer, initialState);
    const {selectedSize, isError} = state;

    async function placeOrder(order){
        if(selectedSize === null) {
            dispatch({type:"Error"});
            return;
        }
        alert("successfully placed order");
        dispatch({type:"placeOrder", payload:order});
    }

    return <OrderContext.Provider value={{selectedSize, isError, dispatch, placeOrder}}>
        {children}
    </OrderContext.Provider>
}

function useOrder(){
    const context = useContext(OrderContext);
    if(context === undefined) throw new Error("You cannot use a context outside its provider");
    return context
}

export {OrderProvider, useOrder}