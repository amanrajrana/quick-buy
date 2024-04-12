import { Card } from "./UI/card";
import PropTypes from "prop-types";
import { Button } from "./UI/button";
import { FaCartPlus } from "react-icons/fa6";
import { RatingStart } from "./ratingStart";

export default function ProductCard({
  className,
  img,
  title,
  price,
  rating,
  ratingCount,
  ...props
}) {
  return (
    <Card className={className} {...props}>
      <img
        src={img}
        alt={title}
        className="h-48 object-contain rounded-3xl mix-blend-multiply"
      />

      <div className="flex flex-col items-center gap-y-2">
        <RatingStart rating={rating} ratingCount={ratingCount} />
        <h3 className="font-medium text-xl text-center">{title}</h3>
        <p className="font-bold text-primary text-xl">
          &#x20B9;{price}{" "}
          <del className="text-base text-gray-500 font-normal">
            &#x20B9;{Math.floor(price / 0.75)}
          </del>
        </p>
      </div>
      <div className="flex w-full gap-x-4">
        <Button variant="outline">
          <FaCartPlus />
        </Button>
        <Button className="flex-1">Buy Now</Button>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
};

