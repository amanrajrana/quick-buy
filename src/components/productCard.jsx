import { FaRegStar, FaStar } from "react-icons/fa";
import { Card } from "./UI/card";
import PropTypes from "prop-types";
import { Button } from "./UI/button";
import { FaCartPlus } from "react-icons/fa6";

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

function RatingStart({ rating, ratingCount }) {
  return (
    <div className="flex gap-x-1 items-center">
      {Array.from({ length: 5 }).map((n, index) => {
        if (index < Math.floor(rating))
          return <FaStar key={index} className=" text-yellow-500" />;

        if (index < rating) return <DecimalStar key={index} rating={rating} />;

        return <FaRegStar key={index} className="text-yellow-500" />;
      })}
      <span>({ratingCount})</span>
    </div>
  );
}

RatingStart.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
};

function DecimalStar({ rating }) {
  return (
    <div className="relative w-fit h-fit">
      <div
        style={{ width: 25 + (70 - 25) * (((rating % 1) * 10) / 9) + "%" }}
        className="overflow-clip items-center top-0 left-0 absolute h-full"
      >
        <FaStar className="text-yellow-500" />
      </div>
      <FaRegStar className="text-yellow-500" />
    </div>
  );
}

DecimalStar.propTypes = {
  rating: PropTypes.number.isRequired,
};
