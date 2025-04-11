import { createContext, useState } from "react";

interface Filters {
    title: string,
    category: string
}

export const FiltersContext = createContext()


export const FiltersProvider = ({children}) => {
    const [filters, setFilters] = useState({
        title: "",
        category: ""
      })
    
    return (
        <FiltersContext.Provider value={{
            
        }}>
            {children}
        </FiltersContext.Provider>
    )
}