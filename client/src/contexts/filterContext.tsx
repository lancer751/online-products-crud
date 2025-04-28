import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface FiltContext {
    filters: Filters,
    setFilters: Dispatch<SetStateAction<Filters>>
}

interface Filters {
    title: string,
    category: string,
    minPrice: number
}
export const FiltersContext = createContext<FiltContext | undefined>(undefined)


export const FiltersProvider = ({children} : {children: ReactNode}) => {
    const [filters, setFilters] = useState<Filters>({
        title: "",
        category: "all", 
        minPrice: 0
      })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}