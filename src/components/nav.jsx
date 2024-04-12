import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  return (
    <div className="mt-2 mb-16 sm:mb-auto">
      <nav className="container flex justify-between items-center h-12">
        <div className="flex items-end gap-2">
          <IoMenu size={28} className="lg:hidden"/>
          <h1 className="font-bold text-3xl">
            <Link to={"/"}>ShopVerse</Link>
          </h1>
        </div>

        <ul className="lg:flex gap-x-8 text-xl hidden">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Shop</li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>Help</li>
        </ul>

        <div className="flex gap-x-6">
          {/* Search Box */}
          <div className="absolute left-4 right-4 top-16 sm:static flex border rounded-full outline-none py-2 px-2 pl-3 pr-6 items-center overflow-hidden bg-gray-200 gap-x-2">
            <FiSearch size={22} />
            <input
              type="text"
              className="outline-none bg-transparent placeholder-black "
              placeholder="Search for 'Chadi'"
            />
          </div>
          <button>
            <FaRegHeart size={24} />
          </button>
          <button>
            <FiShoppingBag size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
