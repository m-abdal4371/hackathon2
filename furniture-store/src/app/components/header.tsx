"use client"
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
//import { useState } from "react";
import Link from "next/link";
// , IoIosMenu
const Header = () => {
    //const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#7E33E0] text-white">
            {/* Top Header */}
            <div className="flex flex-wrap justify-between items-center px-4 md:px-8 py-2 text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <span role="img" aria-label="email">📧</span>
            <a href="mailto:mihasamul@gmail.com" className="hover:underline">
              mihasamul@gmail.com
            </a>
          </span>
          <span>(12345) 678900</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0">
          <div className="flex items-center space-x-1">
            <span>English</span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-1">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              Login
            </a>
            <RiAccountBoxFill className="text-lg" />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              Wishlist
            </a>
            <FaRegHeart className="text-lg" />
          </div>
          <div className="flex items-center space-x-1">
            <a href="#" className="hover:underline">
              <CiShoppingCart className="text-xl" />
            </a>
          </div>
        </div>
      </div>

            {/* Lower Header */}
            <div className="bg-white text-indigo-950">
                <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-xl font-bold">Hekto</h1>

                    {/* Navigation Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-purple-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="../pp" className="hover:text-purple-600">
                                Pages
                            </Link>
                        </li>
                        <li>
                            <Link href="../latest" className="hover:text-purple-600">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="../blog" className="hover:text-purple-600">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="../shoplist" className="hover:text-purple-600">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="../contact" className="hover:text-purple-600">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-l-md px-3 py-1 focus:outline-none"
                        />
                        <button className="bg-pink-500 text-white px-4 py-1 rounded-r-md hover:bg-pink-600">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;

