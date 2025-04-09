import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </>
  )
}

export default App
