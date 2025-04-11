import { FaTrashAlt } from "react-icons/fa";
import { Product } from "../types/product";

interface CartItemProps {
    product: Product,
    addToCart: (product: Product) => void
    deleteFromCart: (product: Product) => void
}

export default function CartItem({ product, addToCart, deleteFromCart }: CartItemProps) {
    const { title, price, quantity } = product
    return (
        <div className="card card-sm bg-base-100 shadow-sm">
            <figure className="w-full h-40 relative group">
                <img
                    className="w-full h-full object-cover object-center"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                <button onClick={() => deleteFromCart(product)} className="hidden group-hover:inline-flex absolute top-2 right-2 btn btn-circle btn-error">
                    <FaTrashAlt size={16} />
                </button>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{title}</h2>
                <p className="text-[1rem] font-semibold text-secondary">Precio: ${price}</p>
                <div className="flex gap-3 items-center">
                    <button className="btn text-xl btn-square btn-primary">-</button>
                    <span className="">{quantity}</span>
                    <button onClick={() => addToCart(product)} className="btn text-xl btn-square btn-primary">+</button>
                </div>
            </div>
        </div>
    )
}
