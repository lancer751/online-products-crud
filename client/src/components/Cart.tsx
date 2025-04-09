import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"
import CartItem from "./CartItem";

interface cartProps {
    handleOpenCart: () => void,
    isOpen: boolean
}

export default function Cart({handleOpenCart, isOpen} : cartProps) {
    return (
        <div className={`${isOpen ? "" : "hidden"} absolute h-screen inset-0 bg-black/20 z-30`}>
            <div className="drawer z-[100]">
                <div className="grid fixed top-0 left-0 h-screen">
                    <div className="flex flex-col overflow-y-scroll bg-primary-content min-h-full w-72 md:w-80 p-4 space-y-5 overflow-hidden">
                        <div className="inline-flex justify-between items-center">
                            <h3 className="text-3xl text-primary font-semibold inline-flex items-center justify-start gap-3">
                                <FaShoppingCart size={25} />
                                Carrito
                            </h3>
                            <button onClick={handleOpenCart} className="inline-block">
                                <IoMdClose size={30}/>
                            </button>
                        </div>
                        {/* Sidebar content here */}
                        <div className="flex flex-col gap-3">
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </div>
                        <button className="btn btn-block bg-secondary text-base-100 hover:bg-secondary/90">Limpiar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
