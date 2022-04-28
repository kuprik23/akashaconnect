export const setproducts =(products)=>{
    console.log("product we have here is ",products)
    return{
        type:"SET_PRODUCTS",
        payload:products
    }
}
export const addToCart =(cartdata)=> {
    // console.log("adddata",cartdata);
    return{
        type:"ADD_TO_CART",
        payload:cartdata
    }
}
export const removeFromCart=(id)=>{
    return{  
        type:"REMOVE_FROM_CART",
        payload:id
    }
}
export const updateQuantity=(id , qty)=>{
    // console.log('quantity actoin',id,qty)
    return{
        type:"UPDATE_QUANTITY",
        qty,id
    }
}