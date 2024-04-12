import { FaRegStar, FaStar } from "react-icons/fa6";

export default function About() {
  const rating = (3.9 % 1) * 10;
  return (
    <div className="container flex h-screen w-ful items-center justify-center">
      <div className="relative w-fit h-fit border">
        <div
          style={{ width: 25 + (70 - 25) * (rating / 9) + "%" }}
          className="overflow-clip items-center top-0 left-0 absolute h-full p-4"
        >
          <FaStar size={120} className="text-yellow-500" />
        </div>
        <FaRegStar size={150} className="text-yellow-500" />
      </div>
    </div>
  );
}
