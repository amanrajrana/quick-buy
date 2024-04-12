import Nav from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import CartState from "./context/cart/cartState";

export default function Layout() {
  return (
    <CartState>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartState>
  );
}
