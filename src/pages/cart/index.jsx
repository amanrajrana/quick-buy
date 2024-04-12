import { useContext } from "react";
import { Button } from "../../components/UI/button";
import CartCard from "./cartCard";
import CartContext from "../../context/cart/cartContext";

export default function Cart() {
  const { cart, totalPrice } = useContext(CartContext);
  const deliveryCharge = totalPrice < 500 ? 40 : 0;

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
      <div className="lg:col-span-2">
        <div className="bg-primary text-primary-foreground py-2 px-4">
          <h1 className="text-xl font-medium">Your cart ({cart?.length}) </h1>
        </div>
        <div className="space-y-4 py-4">
          {cart?.map((product, index) => (
            <CartCard key={index} id={product.productId} />
          ))}
        </div>
      </div>

      <div className="h-fit">
        <div className=" bg-white rounded shadow  p-4">
          <h3 className="font-medium">Price Details</h3>
          <ul className="my-4">
            <li className="flex items-center justify-between">
              <p>Price ({cart?.length})</p>
              <p>&#x20B9;{totalPrice}</p>
            </li>
            <li className="flex items-center justify-between">
              <p>Discount</p>
              <p className="text-green-700">- &#x20B9;0</p>
            </li>
            <li className="flex items-center justify-between">
              <p>Delivery Charge</p>
              <p>&#x20B9;{deliveryCharge}</p>
            </li>

            <li className="border-y border-dashed flex justify-between py-2 my-2 font-medium">
              <p>Total Amount</p>
              <p>&#x20B9;{totalPrice + deliveryCharge}</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between p-4 rounded bg-white shadow mt-4">
          <p className="font-semibold text-lg">
            &#x20B9;{totalPrice + deliveryCharge}
          </p>
          <Button>Place Order</Button>
        </div>
      </div>
    </section>
  );
}
