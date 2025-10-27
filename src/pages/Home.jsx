import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Imágenes del carrusel
const carouselImages = [
  "https://images.pexels.com/photos/1667072/pexels-photo-1667072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632377/pexels-photo-5632377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", // carrito y productos
  "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", // vista desde arriba de productos
  "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", // ecommerce en laptop
];

const Home = () => {
  const settings = {
    dots: true, // Puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Avanzar una imagen a la vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de cambio de imagen
  };

  return (
    <section className="flex flex-col items-center justify-center text-center p-10 bg-[#EAF8FB]">
      {/* Texto de bienvenida */}
      <h1 className="text-4xl font-extrabold text-[#F773BC]">
        ¡Bienvenido a VivaWear!
      </h1>
      <p className="text-lg text-gray-700">
        Ropa tierna y cómoda para los más pequeños.
      </p>

      {/* Carrusel de imágenes */}
      <div className="w-full max-w-7xl mx-auto mb-10">
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
      </div>
    </section>
  );
};

export default Home;
