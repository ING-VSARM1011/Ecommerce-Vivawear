import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  "https://images.pexels.com/photos/1667072/pexels-photo-1667072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632377/pexels-photo-5632377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
];

const products = [
  {
    id: 1,
    name: "Camiseta Rosa",
    price: "$12.990",
    img: "/Ecommerce-Vivawear/assets/images/product-1.jpeg",
    description:
      "Camiseta de algodón suave en tono rosa pastel. Ideal para el día a día con total comodidad.",
  },
  {
    id: 2,
    name: "Pantalón Azul",
    price: "$18.500",
    img: "/Ecommerce-Vivawear/assets/images/product-2.jpeg",
    description:
      "Pantalón liviano y elástico color azul cielo. Perfecto para jugar y moverse sin límites.",
  },
  {
    id: 3,
    name: "Vestido Amarillo",
    price: "$22.000",
    img: "/Ecommerce-Vivawear/assets/images/product-3.jpeg",
    description:
      "Vestido veraniego amarillo con detalles florales. Fresco, cómodo y lleno de alegría.",
  },
  {
    id: 4,
    name: "Camiseta Rosa",
    price: "$12.990",
    img: "/Ecommerce-Vivawear/assets/images/product-4.jpeg",
    description:
      "Camiseta ligera y transpirable con un diseño adorable. Combina con cualquier pantalón o falda.",
  },
  {
    id: 5,
    name: "Pantalón Azul",
    price: "$18.500",
    img: "/Ecommerce-Vivawear/assets/images/product-5.jpeg",
    description:
      "Confeccionado en tela resistente, este pantalón azul garantiza confort en cada movimiento.",
  },
  {
    id: 6,
    name: "Vestido Amarillo",
    price: "$22.000",
    img: "/Ecommerce-Vivawear/assets/images/product-6.jpeg",
    description:
      "Vestido ligero con corte clásico y tejido suave. Ideal para días soleados y ocasiones especiales.",
  },
  {
    id: 7,
    name: "Camiseta Rosa",
    price: "$12.990",
    img: "/Ecommerce-Vivawear/assets/images/product-7.jpeg",
    description:
      "Diseño tierno en tono rosa claro. Tela de alta calidad para mantener a tu pequeño fresco.",
  },
  {
    id: 8,
    name: "Pantalón Azul",
    price: "$18.500",
    img: "/Ecommerce-Vivawear/assets/images/product-8.jpeg",
    description:
      "Pantalón ajustable con cintura elástica. Ideal para combinar con camisetas o suéteres.",
  },
  {
    id: 9,
    name: "Vestido Amarillo",
    price: "$22.000",
    img: "/Ecommerce-Vivawear/assets/images/product-9.jpeg",
    description:
      "Vestido de algodón amarillo pastel, cómodo y encantador para cualquier ocasión.",
  },
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
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#EAF8FB] min-h-screen pt-[55px] sm:pt-[65px]">
      {/* Bienvenida */}
      <section className="px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F773BC] mb-3">
          ¡Bienvenido a VivaWear!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto">
          Ropa tierna y cómoda para los más pequeños.
        </p>
      </section>

      {/* Carrusel */}
      <section className="w-full max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Promoción ${index + 1}`}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Productos */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F773BC] mb-6">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-36 sm:h-48 object-cover"
              />
              <div className="p-2 sm:p-4 text-center">
                <h3 className="font-semibold text-sm sm:text-lg truncate">
                  {product.name}
                </h3>
                <p className="text-pink-500 font-bold text-sm sm:text-base">
                  {product.price}
                </p>
                {/* Descripción corta */}
                <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <button className="mt-2 w-full px-3 py-1 sm:py-2 bg-[#F773BC] text-white rounded hover:bg-pink-600 transition text-sm sm:text-base">
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
