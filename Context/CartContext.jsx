import { createContext, useState, useContext } from "react";

const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)



export function CartContextProvider ({ children }) {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.find(prod => prod.id === id)
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cartList.map(prod => {
                if(product.id === item.id){
                const newQuantity = prod.quantity + quantity
                return{...prod, quantity: newQuantity}
            }else {
                return prod
            }
            })
            setCartList(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setCartList([...cartList, newProduct])
        }
    }
    const removeProduct = (id) => setCartList(cartList.filter( prod => prod.id != id))

    const cleanCart = () => setCartList ([])


    return(
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart
        }}>
        {children}
        </CartContext.Provider>
    )
}