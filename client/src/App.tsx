import { CartProvider } from "./contexts/cartContext"
import { FiltersProvider } from "./contexts/filterContext"

function App() {

  return (
    <>
      <CartProvider>
        <FiltersProvider>
          <div></div>
        </FiltersProvider>
      </CartProvider>
    </>
  )
}

export default App
