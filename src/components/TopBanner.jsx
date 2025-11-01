import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full bg-[#FFA255] text-white py-2 sm:py-3 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        <span className="mx-6 text-xs sm:text-sm md:text-base font-medium">
          🎉 ¡Envío gratis por compras mayores a $150.000! 🎉
        </span>
        <span className="mx-6 text-xs sm:text-sm md:text-base font-medium">
          🧸 ¡Nuevos productos para bebés disponibles ahora! 🧸
        </span>
        <span className="mx-6 text-xs sm:text-sm md:text-base font-medium">
          🌈 Descuentos hasta 40% en ropa infantil 🌈
        </span>
      </div>
    </div>
  );
};

export default TopBanner;