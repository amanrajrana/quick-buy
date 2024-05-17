import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/productCard";
import ProductCardSkeleton from "../components/productCardSkeleton";

function Categories() {
  const [jewelryItems, setJewelerItems] = useState();
  const [electronicsItems, setElectronicsItems] = useState();
  const [menClothingItems, setMenClothingItems] = useState();
  const [womenClothingItems, setWomenClothingItems] = useState();

  const fetchProducts = async (api) => {
    try {
      const response = await fetch(api);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(
      "https://fakestoreapi.com/products/category/jewelery?limit=4"
    ).then((data) => setJewelerItems(data));

    fetchProducts(
      "https://fakestoreapi.com/products/category/electronics?limit=4"
    ).then((data) => setElectronicsItems(data));

    fetchProducts(
      "https://fakestoreapi.com/products/category/women's%20clothing?limit=4"
    ).then((data) => setWomenClothingItems(data));

    fetchProducts(
      "https://fakestoreapi.com/products/category/men's%20clothing?limit=4"
    ).then((data) => setMenClothingItems(data));
  }, []);

  return (
    <>
      <CategoriesSection title="Jewelry" products={jewelryItems} />
      <CategoriesSection title="Electronic" products={electronicsItems} />
      <CategoriesSection title="Men's Clothing" products={menClothingItems} />
      <CategoriesSection
        title="Women's Clothing"
        products={womenClothingItems}
      />
    </>
  );
}

export default Categories;

function CategoriesSection({ title, products }) {
  return (
    <section className="container">
      <div className="flex w-full justify-between">
        <h3 className="text-2xl font-medium">{title}</h3>
        <div>show more</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ProductCardSkeleton count={4} />
        )}
      </div>
    </section>
  );
}

CategoriesSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array,
};
