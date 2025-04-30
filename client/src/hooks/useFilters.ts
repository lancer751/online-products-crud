import { useContext } from "react";
import { FiltersContext } from "../contexts/filterContext";
import { Product } from "../types/product";

export function useFilters(){
    const context = useContext(FiltersContext)
    if(context === undefined) throw new Error("useFilter must be within FiltersProvider")
    const {filters, setFilters} = context

    const filterProducts = (products: Product[]) => {
        return products.filter(pr => {
            return (pr.name.toLocaleLowerCase().includes(filters.title.toLocaleLowerCase()) || filters.title === "") &&
            (pr.category === filters.category || filters.category === "all") && pr.price >= filters.minPrice
        })
    } 
    return {
        filterProducts,
        filters,
        setFilters
    }
}