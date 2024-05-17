import Nav from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Provider>
  );
}
