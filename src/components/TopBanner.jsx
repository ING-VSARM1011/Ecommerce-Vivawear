import React from "react";

const TopBanner = () => {
  return (
    <div className="w-full bg-[#FFA255] text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-6 text-sm font-medium">
          🎉 ¡Envío gratis por compras mayores a $150.000! 🎉
        </span>
        <span className="mx-6 text-sm font-medium">
          🧸 ¡Nuevos productos para bebés disponibles ahora! 🧸
        </span>
        <span className="mx-6 text-sm font-medium">
          🌈 Descuentos hasta 40% en ropa infantil 🌈
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
