import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/shreeje.jpeg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          {/* <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-16 object-contain"
            />
          </Link> */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 object-contain"
            />

            <span className="text-xl font-bold text-blue-900 whitespace-nowrap">
              Shree Je Sales Corp
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 font-medium hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-6">

            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-left text-gray-700 font-medium hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300">
                Get Quote
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}