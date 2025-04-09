import shoes from "../assets/images/sneakers.jpg"
import { Product } from "../types/product"

interface Props {
    product: Product
}

export default function ProductCard({ product } : Props) {
    const {image, alt, categories, description, price, id, title, isNew} = product
    console.log(price)
    return (
        <div className="card border card-sm md:card-md bg-primary-content w-full max-w-96 shadow-sm hover:-translate-y-3.5 transition-transform duration-700">
            <figure>
                <img src={shoes} alt={alt} />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-neutral-content md:text-2xl font-bold card-title">
                    <p className="line-clamp-1">
                        {title}
                    </p>
                    {
                        isNew && <div className="badge badge-secondary">NEW</div>
                    }
                </h2>
                <div className="card-actions justify-start">
                    {
                        categories.map((category, index) => (
                            <div key={index} className="badge-accent badge badge-outline">{category}</div>

                        ))
                    }
                    {
                        categories.length > 2 && (
                            <div className="bg-primary text-primary-content text-xs p-2 rounded-full inline-flex w-6 h-6 justify-center items-center">+3</div>
                        )
                    }
                    
                </div>
                <p className="line-clamp-3">
                    {description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-primary text-2xl font-semibold">${price}</p>
                    <div className="justify-end card-actions">
                        <a href={`/product/${id}`} className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
