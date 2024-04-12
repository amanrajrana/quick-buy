import { Card } from "./UI/card";
import PropTypes from "prop-types";
import { Button } from "./UI/button";
import { FaCartPlus } from "react-icons/fa6";
import { RatingStart } from "./ratingStart";
import { useContext } from "react";
import CartContext from "../context/cart/cartContext";

export default function ProductCard({ className, product, ...props }) {
  const { addToCart } = useContext(CartContext);
  return (
    <Card className={className} {...props}>
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain rounded-3xl mix-blend-multiply"
      />

      <div className="flex flex-col items-center gap-y-2">
        <RatingStart
          rating={product.rating.rate}
          ratingCount={product.rating.count}
        />
        <h3 className="font-medium text-xl text-center">{product.title}</h3>
        <p className="font-bold text-primary text-xl">
          &#x20B9;{product.price}{" "}
          <del className="text-base text-gray-500 font-normal">
            &#x20B9;{Math.floor(product.price / 0.75)}
          </del>
        </p>
      </div>
      <div className="flex w-full gap-x-4">
        <Button onClick={() => addToCart(product)} variant="outline">
          <FaCartPlus />
        </Button>
        <Button className="flex-1">Buy Now</Button>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
