import { FaSun } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"
import { LuMoon } from "react-icons/lu"
import { useState } from "react"
import Cart from "./Cart"

export default function NavBar() {
    const [openCart, setOpenCart] = useState(false)

    const handleOpenCart = () => {
        setOpenCart(!openCart)
    }

    return (
        <div className={`navbar bg-none py-5 shadow-sm max-w-screen-xl mx-auto w-[90%]`}>
            <div className="flex-1">
                <a href="/" className="text-2xl md:text-4xl text-primary font-extrabold">GodShop</a>
            </div>
            <div className="flex gap-4">
                <div  onClick={handleOpenCart}  className="dropdown dropdown-end">
                    <div className="btn btn-primary btn-circle">
                        <div className="indicator">
                            <FaShoppingCart size={20} />
                            <span className="badge badge-sm indicator-item">4</span>
                        </div>
                    </div>
                </div>
                <label className="swap swap-rotate">
                    <input className="theme-controller" value={"night"} type="checkbox" />
                    <FaSun size={25} className="swap-off fill-current"/>
                    <LuMoon size={25} className="swap-on fill-current"/>
                </label>
            </div>
            <Cart handleOpenCart={handleOpenCart} isOpen={openCart} />
        </div>
    )
}
