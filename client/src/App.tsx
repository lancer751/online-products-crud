import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import NavBar from "./components/NavBar"
import { CartProvider } from "./contexts/cartContext"

function App() {

  return (
    <>
      <CartProvider>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
