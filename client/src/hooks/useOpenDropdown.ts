import { useState } from "react";

export function useOpenDropdown () {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpenClose = () => {
        setIsOpen((prev) => !prev);
    };
    
    return { isOpen, handleOpenClose,  };
}