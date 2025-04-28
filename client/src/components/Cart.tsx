import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"
import CartItem from "./CartItem";
import { useCart } from "../hooks/useCart";

interface cartProps {
    handleOpenCart: () => void,
    isOpen: boolean
}

export default function Cart({ handleOpenCart, isOpen }: cartProps) {
    const { cart, deleteFromCart, addToCart, clearCart } = useCart()
    return (
        <>
            <div onClick={handleOpenCart} className={`${isOpen ? "opacity-100" : "hidden opacity-0"} fixed h-screen inset-0 bg-black/20 z-30`}></div>
            <div className={`fixed top-0 left-0 z-[100]`}>
                <div className={`grid fixed top-0 left-0 h-screen transition-transform duration-500 ${isOpen ? "translate-x-0": "-translate-x-full"}`}>
                    <div className="overflow-y-scroll bg-primary-content min-h-full w-72 md:w-80 p-4 space-y-5 overflow-hidden">
                        <div className="inline-flex justify-between w-full items-center">
                            <h3 className="text-3xl text-primary font-semibold inline-flex items-center justify-start gap-3">
                                <FaShoppingCart size={25} />
                                Carrito
                            </h3>
                            <button onClick={handleOpenCart} className="inline-block">
                                <IoMdClose size={30} />
                            </button>
                        </div>
                        {/* Sidebar content here */}
                        <div className="flex flex-col gap-3 mt-5">
                            {
                                cart.length > 0 ?
                                    (
                                        cart.map(product => (
                                            <CartItem product={product} key={product.id} deleteFromCart={deleteFromCart} addToCart={addToCart} />
                                        ))
                                    ) :
                                    (
                                        <p className="text-center text-sm">No hay productos para comprar 😢</p>
                                    )
                            }
                        </div>
                        {
                            cart.length > 0 && <button onClick={clearCart} className="btn btn-block bg-secondary text-base-100 hover:bg-secondary/90">Limpiar Carrito</button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
