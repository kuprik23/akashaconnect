const initialState={
    products:[],
    cart:[]
}
export const productReducers = (state=initialState,{type,payload})=>{
    console.log("payload in  produect",payload)
    switch(type){
        case "SET_PRODUCTS":
            return{...state,products:payload}
        default:
            return state;
    }
};
export const cartReducers = (state=initialState,{type ,payload,qty ,id})=>{

    switch(type){
            case "ADD_TO_CART":
            console.log("reducers",payload);
            // console.log("reducers",products);
                const existItem=state.products.find(x => x.id === payload.id);
                // console.log("exsisste itemss",existItem)
                if(existItem){
                    alert('Item already added in cart');
                }
                else{
                    return{
                       ...state,
                       products:state.products.concat(payload)
                    }
                }
            case "REMOVE_FROM_CART" :
                return{
                    products:state.products.filter(id=>id.id !== payload),
                }
            case "UPDATE_QUANTITY":
            //  console.log("reducers qty",qty);
            //  console.log("reducers id ",id);
             return {
                ...state,
                 products:state.products.map((item)=>{
                     console.log('items',item)
                   return  item.id === id ? {...item, qty:qty}:item
                 })
             }
        default:
            return state;
    }
};
