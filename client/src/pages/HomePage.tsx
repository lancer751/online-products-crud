import { useState } from "react";
import FilterProducts from "../components/FilterProducts";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";
import productsData from "../mock/products.json"

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>(productsData)

    return (
        <main className="max-w-screen-xl mx-auto w-[90%]">
            <section className="text-center text-primary space-y-4 pt-16 pb-10">
                <h1 className="text-2xl md:text-5xl font-bold">
                    GodShop
                </h1>
                <p className="text-neutral-content max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minus!
                </p>
                <FilterProducts />
            </section>

            <section className="py-10">
                <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map(product => [
                            <ProductCard key={product.id} product={product}/>
                        ])
                    }
                </div>
            </section>
        </main>
    )
}
