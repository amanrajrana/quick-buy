import { FaCartPlus } from "react-icons/fa6";
import { RatingStar } from "./ratingStart";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Product } from "@/types/type";
import { useAppDispatch } from "@/redux/hook";
import { addToCart } from "@/redux/slices/cart/cart";

type Props = {
  className?: string;
  product: Product;
};

export default function ProductCard({ className, product, ...props }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Card className={className + " flex flex-col justify-between"} {...props}>
      <CardContent className="flex flex-col items-center justify-between mt-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain rounded-3xl mix-blend-multiply"
        />

        <div className="flex flex-col items-center gap-y-2">
          <RatingStar
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
      </CardContent>
      <CardFooter className="flex gap-x-4">
        <Button
          onClick={() => dispatch(addToCart(product.id))}
          variant="outline"
        >
          <FaCartPlus />
        </Button>
        <Button className="flex-1">Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
