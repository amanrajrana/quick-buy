import { Button } from "../../components/UI/button";
import PropTypes from "prop-types";
import { RatingStart } from "../../components/ratingStart";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "../../context/cart/cartContext";

export default function CartCard({ product }) {
  const { removeFromCart, cart, setQuantity } = useContext(CartContext);
  const quantity = cart.find((item) => item.id === product.id).quantity;

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-x-4 justify-between overflow-hidden px-2 py-4 shadow rounded">
      <div className="flex gap-x-4">
        <div className="border p-2 w-20 min-w-20 h-24 rounded">
          <img
            src={product.image}
            alt="product"
            className="w-full h-full object-contain rounded-lg mix-blend-multiply"
          />
        </div>

        <div>
          <h2 className="text-lg font-medium">{product.title}</h2>
          <div className="flex items-center text-sm">
            <RatingStart
              rating={product.rating.rate}
              ratingCount={product.rating.count}
            />
          </div>
          <p> &#x20B9; {product.price}</p>
          <div className="flex items-center w-fit mt-4">
            <Button
              variant="outline"
              onClick={() => setQuantity(product.id, quantity - 1)}
              className="w-8 h-7 p-0 text-lg"
            >
              -
            </Button>
            <span className="w-8 flex justify-center items-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              onClick={() => setQuantity(product.id, quantity + 1)}
              className="w-8 h-7 p-0 text-lg"
            >
              +
            </Button>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col gap-4 self-end mt-5 lg:mt-auto">
        <Button className="order-2 lg:order-1 gap-x-1">
          <BsLightningCharge /> Buy Now
        </Button>
        <Button
          onClick={() => removeFromCart(product.id)}
          variant="outline"
          className="lg:order-2 gap-x-1"
        >
          <FaRegTrashCan />
          Remove
        </Button>
      </div>
    </div>
  );
}

CartCard.propTypes = {
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
