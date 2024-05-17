import { FaRegStar, FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

export function RatingStart({ rating, ratingCount }) {
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
