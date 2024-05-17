import { FaRegStar, FaStar } from "react-icons/fa6";

export function RatingStar({ rating, ratingCount }: PropsRatingStar) {
  return (
    <div className="flex gap-x-1 items-center">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < Math.floor(rating))
          return <FaStar key={index} className=" text-yellow-500" />;

        if (index < rating) return <DecimalStar key={index} rating={rating} />;

        return <FaRegStar key={index} className="text-yellow-500" />;
      })}
      <span>({ratingCount})</span>
    </div>
  );
}

function DecimalStar({ rating }: PropsDecimalStar) {
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

// Types Declaration
type PropsRatingStar = {
  rating: number;
  ratingCount: number;
};

type PropsDecimalStar = {
  rating: number;
};
