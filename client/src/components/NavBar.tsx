import { FaSun } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { useState } from "react";
import Cart from "./Cart";
import { useCart } from "../hooks/useCart";
import { Link } from "@tanstack/react-router";

export default function NavBar() {
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useCart();

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header
      className={`w-full bg-blue-950 sticky top-0 left-0 z-[100] navbar py-5 px-4 md:px-8 shadow-sm mx-auto`}
    >
      <div className="flex-1">
        <a href="/" className="text-xl md:text-2xl text-primary font-extrabold">
          Online Shop
        </a>
      </div>
      <div className="flex gap-4">
        <Link
          to={"/panel/products"}
          className="btn text-white bg-amber-400 hover:bg-amber-600"
        >
          Panel de productos
        </Link>
        <div onClick={handleOpenCart}>
          <div className="btn btn-primary btn-circle">
            <div className="indicator">
              <FaShoppingCart size={20} />
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
        </div>
        <label className="swap swap-rotate">
          <input className="theme-controller" value={"night"} type="checkbox" />
          <FaSun size={25} className="swap-off fill-current" />
          <LuMoon size={25} className="swap-on fill-current" />
        </label>
      </div>
      <Cart handleOpenCart={handleOpenCart} isOpen={openCart} />
    </header>
  );
}
