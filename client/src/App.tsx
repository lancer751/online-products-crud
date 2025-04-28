import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import NavBar from "./components/NavBar"
import { CartProvider } from "./contexts/cartContext"
import { FiltersProvider } from "./contexts/filterContext"

function App() {

  return (
    <>
      <CartProvider>
        <NavBar />
        <FiltersProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </FiltersProvider>
      </CartProvider>
    </>
  )
}

export default App
