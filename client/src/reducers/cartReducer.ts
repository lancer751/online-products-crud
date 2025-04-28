import { Product } from "../types/product"

const initialState : Product[] = []

interface ActionCart {
    type: string,
    payload?: Product
}

export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART" ,
    DELETE_PRODUCT: "DELETE_PRODUCT",
    CLEAR_CART: "CLEAR_CART"
}

export const cartReducer = (state: typeof initialState, action: ActionCart) => {
    const {type, payload} = action
    if(type === CART_ACTIONS.ADD_TO_CART){
        if(payload === undefined) return state
        const productIndexInCart = state.findIndex(product => product.id === payload?.id)
        const newState = structuredClone(state)
        console.log(productIndexInCart)

        if(productIndexInCart >= 0){
            newState[productIndexInCart].quantity! += 1
            console.log(state)
            return newState
        }
        
        const nextState = [...state, {...payload, quantity: 1}]
        console.log(nextState)
        console.log(state)
        return nextState
    }
    if(type === CART_ACTIONS.DELETE_PRODUCT){
        if(payload === undefined) return state
        return state.filter(product => product.id !== payload?.id)
    }

    if(type === CART_ACTIONS.CLEAR_CART) return []
    return state
}