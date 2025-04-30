import shoes from "../assets/images/sneakers.jpg"
import { Product } from "../types/product"

interface Props {
    product: Product,
    addToCart: (product: Product) => void,
    isProductInCart: (product: Product) => boolean,
    deleteFromCart: (product: Product) => void
}

export default function ProductCard({ product, addToCart, isProductInCart, deleteFromCart }: Props) {
    const { image, category, description, price, id, name, isNew } = product

    return (
        <div className={`card ${isProductInCart(product) && 'outline-2 outline-accent'} card-sm md:card-md bg-primary-content w-full max-w-96 shadow-sm hover:-translate-y-3.5 transition-transform duration-700`}>
            <figure>
                <img src={shoes} alt={name} />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-neutral-content md:text-2xl font-bold card-title">
                    <p className="line-clamp-1">
                        {name}
                    </p>
                    {
                        isNew && <div className="badge badge-secondary">NEW</div>
                    }
                </h2>
                <div className="card-actions justify-start">
                    <div className={`${category ? "badge-secondary" : "badge-warning"}  badge badge-outline`}>{category ? category : "Sin Categoría"}</div>
                </div>
                <p className="line-clamp-3">
                    {description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-primary text-2xl font-semibold">${price}</p>
                    <div className="justify-end card-actions">
                        {
                            isProductInCart(product) ? (
                                <button onClick={() => deleteFromCart(product)} className="btn btn-accent">Remover del carrito</button>
                            ) :
                                (
                                    <button onClick={() => addToCart(product)} className="btn btn-primary">Agregar al carrito</button>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
