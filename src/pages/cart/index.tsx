import { useContext } from "react";
import { Button } from "../../components/UI/button";
import CartCard from "./cartCard";
import CartContext from "../../context/cart/cartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const totalCartPrice = cart?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const deliveryCharge = totalCartPrice < 500 ? 40 : 0;

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
      <div className="lg:col-span-2">
        <div className="bg-primary text-primary-foreground py-2 px-4">
          <h1 className="text-xl font-medium">Your cart ({cart?.length}) </h1>
        </div>
        <div className="space-y-4 py-4">
          {cart?.map((product, index) => (
            <CartCard key={index} product={product} />
          ))}
        </div>
      </div>

      {cart?.length > 0 ? (
        <div className="h-fit">
          <div className=" bg-white rounded shadow  p-4">
            <h3 className="font-medium">Price Details</h3>
            <ul className="my-4">
              <li className="flex items-center justify-between">
                <p>Price ({cart?.length})</p>
                <p>&#x20B9;{totalCartPrice}</p>
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
                <p>&#x20B9;{totalCartPrice + deliveryCharge}</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between p-4 rounded bg-white shadow mt-4">
            <p className="font-semibold text-lg">
              &#x20B9;{totalCartPrice + deliveryCharge}
            </p>
            <Button>Place Order</Button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow min-h-40 flex items-center justify-center">
          <p className="text-gray-500">Please add some items to continue</p>
        </div>
      )}
    </section>
  );
}
