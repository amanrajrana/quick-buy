import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./pages/landing";
import Categories from "./pages/categories";
import About from "./pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Mahashay ye kis raste me aa gaye aap</h1>,
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
    ],
  },
]);
