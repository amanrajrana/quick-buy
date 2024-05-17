import { Card } from "./UI/card";
import { Skeleton } from "./UI/skeleton";
import PropTypes from "prop-types";

export default function ProductCardSkeleton({ count = 1 }) {
  return (
    <>
      {Array.from({ length: count }).map((n, index) => (
        <Card key={index}>
          <Skeleton className={"w-full h-60 bg-slate-300 rounded-lg"} />
          <Skeleton className="w-full h-6 bg-slate-300" />
          <Skeleton className="w-full max-w-44 h-6 bg-slate-300" />
          <Skeleton className="w-3/4 h-6 bg-slate-300" />
        </Card>
      ))}
    </>
  );
}

ProductCardSkeleton.propTypes = {
  count: PropTypes.number.isRequired,
};
