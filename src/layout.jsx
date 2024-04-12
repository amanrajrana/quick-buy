import Nav from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
