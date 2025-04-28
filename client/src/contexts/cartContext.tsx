import { createContext, ReactNode, useReducer } from "react";
import { CART_ACTIONS, cartReducer } from "../reducers/cartReducer";
import { Product } from "../types/product";

interface CartContext {
    cart: Product[],
    addToCart: (product: Product) => void,
    deleteFromCart: (product: Product) => void,
    clearCart: () => void,
}

interface Props {
    children: ReactNode
}

export const CartContext = createContext<CartContext | undefined>(undefined)

export function CartProvider ({children} : Props) {
    const [state, dispatch] = useReducer(cartReducer, [])
    
    const addToCart = (product: Product) => {
        dispatch({
            type: CART_ACTIONS.ADD_TO_CART,
            payload: product
        })
    }

    const deleteFromCart = (product: Product) => {
        dispatch({
            type: CART_ACTIONS.DELETE_PRODUCT,
            payload: product
        })
    }

    const clearCart = () => dispatch({type: CART_ACTIONS.CLEAR_CART})

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            deleteFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}