/* eslint-disable react-refresh/only-export-components */
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl p-4 bg-muted flex justify-between flex-col gap-y-4 items-center shadow-md",
        className
      )}
      {...props}
    />
  );
}

Card.propTypes = {
  className: PropTypes.string,
};
