import { Button } from "@/components/ui/button";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { Dispatch, useEffect, useState } from "react";
import { RatingStar } from "@/components/ratingStart";
import { CartItem, Product } from "@/types/type";
import { useAppDispatch } from "@/redux/hook";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/slices/cart/cart";

type Props = {
  totalCartPrice: number;
  setTotalCartPrice: Dispatch<number>;
  product: CartItem;
};

export default function CartCard({
  product,
  setTotalCartPrice,
  totalCartPrice,
}: Props) {
  const dispatch = useAppDispatch();

  const [productData, setProductData] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    image: "",
    rating: { rate: 0, count: 0 },
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product.id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProductData(data);
        setTotalCartPrice(totalCartPrice + data.price * product.quantity);
      })
      .catch((error) => console.error(error));
  }, [product.id]);

  return (
    <div className="bg-white flex flex-col lg:flex-row gap-x-4 justify-between overflow-hidden px-2 py-4 shadow rounded">
      <div className="flex gap-x-4">
        <div className="border p-2 w-20 min-w-20 h-24 rounded">
          <img
            src={productData.image}
            alt="product"
            className="w-full h-full object-contain rounded-lg mix-blend-multiply"
          />
        </div>

        <div>
          <h2 className="text-lg font-medium">{productData.title}</h2>
          <div className="flex items-center text-sm">
            <RatingStar
              rating={productData.rating.rate}
              ratingCount={productData.rating.count}
            />
          </div>
          <p> &#x20B9; {productData.price}</p>
          <div className="flex items-center w-fit mt-4">
            <Button
              disabled={product.quantity === 1}
              variant="outline"
              onClick={() => dispatch(decrementQuantity(product.id))}
              className="w-8 h-7 p-0 text-lg"
            >
              -
            </Button>
            <span className="w-8 flex justify-center items-center">
              {product.quantity}
            </span>
            <Button
              variant="outline"
              onClick={() => dispatch(incrementQuantity(product.id))}
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
          onClick={() => dispatch(removeFromCart(product.id))}
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
