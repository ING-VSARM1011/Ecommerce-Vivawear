import React from "react";
import { FaLock, FaTruck, FaMapMarkedAlt } from "react-icons/fa";

const BenefitsBar = () => {
  return (
    <div className="bg-[#F9C6C9] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* Pago seguro */}
        <div className="flex flex-col items-center space-y-2">
          <FaLock className="text-3xl text-[#7ABF62]" />
          <h4 className="font-semibold text-gray-800">Pago seguro</h4>
          <p className="text-sm text-gray-600">Tus compras protegidas 100%</p>
        </div>

        {/* Envío gratis */}
        <div className="flex flex-col items-center space-y-2">
          <FaTruck className="text-3xl text-[#84CDE0]" />
          <h4 className="font-semibold text-gray-800">Envíos gratis</h4>
          <p className="text-sm text-gray-600">
            Por compras superiores a $149.000
          </p>
        </div>

        {/* Entrega nacional */}
        <div className="flex flex-col items-center space-y-2">
          <FaMapMarkedAlt className="text-3xl text-[#FFA255]" />
          <h4 className="font-semibold text-gray-800">Entrega nacional</h4>
          <p className="text-sm text-gray-600">A todo el país sin recargo</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBar;
