import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Nav from "./components/nav";
import About from "./pages/about";
import Footer from "./components/footer";
import Categories from "./pages/categories";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
