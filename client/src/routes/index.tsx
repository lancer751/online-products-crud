import { createFileRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import { CartProvider } from "../contexts/cartContext";
import { FiltersProvider } from "../contexts/filterContext";
import Products from "../pages/Products";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CartProvider>
        <FiltersProvider>
          <NavBar />
          <Products />
        </FiltersProvider>
      </CartProvider>
    </>
  );
}
