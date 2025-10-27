import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes del carrusel
const carouselImages = [
  "https://images.pexels.com/photos/1667072/pexels-photo-1667072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632377/pexels-photo-5632377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
];

const products = [
  { id: 1, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-1.jpeg" },
  { id: 2, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-2.jpeg" },
  { id: 3, name: "Vestido Amarillo", price: "$22.00", img: "/assets/images/product-3.jpeg" },
  { id: 4, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-4.jpeg" },
  { id: 5, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-5.jpeg" },
  { id: 6, name: "Vestido Amarillo", price: "$22.00", img: "/assets/images/product-6.jpeg" },
  { id: 7, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-7.jpeg" },
  { id: 8, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-8.jpeg" },
  { id: 9, name: "Vestido Amarillo", price: "$22.00", img: "/assets/images/product-9.jpeg" },
  { id: 10, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-10.jpeg" },
  { id: 11, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-11.jpeg" },
  { id: 12, name: "Vestido Amarillo", price: "$22.00", img: "/assets/images/product-12.jpeg" },
  { id: 13, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-13.jpeg" },
  { id: 14, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-14.jpeg" },
  { id: 15, name: "Vestido Amarillo", price: "$22.00", img: "/assets/images/product-15.jpeg" },
  { id: 16, name: "Camiseta Rosa", price: "$12.99", img: "/assets/images/product-16.jpeg" },
  { id: 17, name: "Pantalón Azul", price: "$18.50", img: "/assets/images/product-17.jpeg" }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#EAF8FB]">
      {/* Bienvenida */}
      <section className="p-10">
        <h1 className="text-4xl font-extrabold text-[#F773BC] mb-2">
          ¡Bienvenido a VivaWear!
        </h1>
        <p className="text-lg text-gray-700">
          Ropa tierna y cómoda para los más pequeños.
        </p>
      </section>

      {/* Carrusel */}
      <section className="w-full max-w-7xl mx-auto mb-10 px-4">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Promoción ${index + 1}`}
                className="w-full h-120 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Productos */}
      <section className="max-w-7xl mx-auto px-4 py-10 w-full">
        <h2 className="text-3xl font-bold text-[#F773BC] mb-6">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-pink-500 font-bold">{product.price}</p>
                <button className="mt-2 px-4 py-2 bg-[#F773BC] text-white rounded hover:bg-pink-600 transition">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
