import { useContext, useEffect, useState } from "react";
import Hero from "../components/hero";
import TrendingCategories from "../components/trendingCategories";
import ProductCard from "../components/productCard";
import ProductCardSkeleton from "../components/productCardSkeleton";
import CartContext from "../context/cart/cartContext";

export default function LandingPage() {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const fetchProducts = async (api) => {
    try {
      const response = await fetch(api);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts("https://fakestoreapi.com/products")
      .then((data) => setAllProduct(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Hero />
      <TrendingCategories />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 container">
        {loading ? (
          <ProductCardSkeleton count={8} />
        ) : (
          allProduct?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}
