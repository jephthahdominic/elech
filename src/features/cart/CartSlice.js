const initialState = {
    contents: [],
    totalItems: 0,
    totalAmount: 0
}

export default function CartReducer(state = initialState, action){
    switch(action.type){
        case "cart/ready":
            return {...state, contents: action.payload}
        case "cart/add":
            console.log(action.payload)
            return {
                ...state,
                contents: [...state.contents, action.payload],
                totalItems: state.contents.length + 1
            };
        case "cart/remove":
            return {
                ...state, 
                contents:state.contents.filter(content => content.id !== action.payload),
                totalItems: state.contents.length - 1
            }
        default: return state
    }
}

export function addItemToCart(item, size){
    const incomingOrder = {...item, size}
    console.log("successfully added item to cart")

    return (dispatch)=>{
        dispatch({type:"cart/add", payload:incomingOrder});
    }
}

export function removeItemFromCart(itemId){
    return {type:"cart/remove", payload: itemId}
}