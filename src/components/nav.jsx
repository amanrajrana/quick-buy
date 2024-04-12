import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Button } from "./UI/button";
import CartContext from "../context/cart/cartContext";

export default function Nav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const NAV_ITEMS = [
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Categories", path: "/categories" },
    { title: "Help", path: "/help" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="mt-2 mb-16 sm:mb-auto">
      <nav className="container flex justify-between items-center h-12">
        <div className="flex items-center gap-2">
          <CgMenuLeft
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={30}
            className="cursor-pointer lg:hidden"
          />
          <h1 className="font-bold text-3xl">
            <Link to={"/"}>ShopVerse</Link>
          </h1>
        </div>

        <ul className="lg:flex gap-x-8 text-xl hidden">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-x-6 items-center">
          {/* Search Box */}
          <div className="absolute left-4 right-4 top-16 sm:static flex border rounded-full outline-none py-2 px-2 pl-3 pr-6 items-center overflow-hidden bg-gray-200 gap-x-2">
            <FiSearch size={22} />
            <input
              type="text"
              className="outline-none bg-transparent placeholder-gray-400 "
              placeholder="Search for items"
            />
          </div>
          <button>
            <FaRegHeart size={24} />
          </button>
          <Link to="/cart" className="relative">
            <FiShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-auto aspect-square flex items-center justify-center text-xs">
              {cart && cart?.length > 9 ? "9+" : cart?.length}
            </span>
          </Link>
        </div>

        {/* Small Screen navbar */}
        <div
          className={`fixed lg:hidden top-0 left-0  bottom-0 right-0  z-50 duration-500 ${
            isMenuOpen ? "translate-x-0 bg-black/50" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-0 h-full bg-white min-w-max w-64">
            <Button
              onClick={() => setIsMenuOpen(false)}
              size="icon"
              variant="ghost"
              className="absolute top-2 right-4"
            >
              <HiMiniXMark size={20} />
            </Button>
            <ul className="mt-12 p-4 flex flex-col gap-y-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
