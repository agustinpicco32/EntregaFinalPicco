import {createContext, useState} from "react"

export const CartContext = createContext({
    cart: [],
    total : 0,
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev, {...item, quantity}])
        } else {
            console.error("el producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.price * prod.quantity
        })
        //setTotal(total)
        return total
    }
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity
        })
        return total
    }
    
    return (
        <CartContext.Provider value={{cart, totalQuantity, addItem, removeItem, clearCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}