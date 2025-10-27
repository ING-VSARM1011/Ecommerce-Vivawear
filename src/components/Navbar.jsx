import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Carrito", to: "/cart", icon: <FaShoppingCart className="mr-2" /> },
  { label: "Admin", to: "/admin/login", special: true },
];

const Navbar = () => {
  return (
    <nav className="bg-[#F773BC] h-20 shadow-md text-white">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <Link to="/" className="h-full flex items-center space-x-2 select-none">
          <span className="text-2xl font-bold tracking-wide text-white">
            VivaWear
          </span>
        </Link>

        <div className="flex space-x-6 text-sm font-medium text-white">
          {navLinks.map(({ label, to, icon, special }) => (
            <Link
              key={label}
              to={to}
              className={`
                flex items-center 
                transition 
                ${
                  special
                    ? "hover:text-[#F9C6C9] font-semibold" // Rosa pastel para Admin
                    : "hover:text-[#07689F]" // Azul más oscuro pastel para links normales
                }
              `}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
