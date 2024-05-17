import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./pages/landing";
import Categories from "./pages/categories";
import About from "./pages/about";
import NotFoundPage from "./pages/not-found";
import Cart from "./pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
