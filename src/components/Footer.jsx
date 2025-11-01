import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const sections = [
  {
    title: "Quiénes somos",
    links: [
      { label: "Conócenos", href: "#" },
      { label: "Contáctanos", href: "#" },
      { label: "Trabaja con nosotros", href: "#" },
    ],
  },
  {
    title: "Atención al cliente",
    links: [
      { label: "Servicio al cliente", href: "#" },
      { label: "Garantías y devoluciones", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
    ],
  },
  {
    title: "Legales",
    links: [{ label: "Términos y condiciones", href: "#" }],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: "#",
    hoverClass: "hover:text-[#A3CEF1]", // azul pastel claro
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "#",
    hoverClass: "hover:text-[#F9C6C9]", // rosa pastel
    label: "Instagram",
  },
  {
    icon: <FaTiktok size={18} />,
    href: "#",
    hoverClass: "hover:text-[#C4E3CB]", // menta clara
    label: "TikTok",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#7ABF62] text-white py-8 sm:py-10 px-5 sm:px-8 mt-0">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Secciones de enlaces */}
        {sections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              {title}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/90 hover:text-white transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Redes Sociales */}
        <div>
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
            Síguenos
          </h3>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            {socialLinks.map(({ icon, href, hoverClass, label }) => (
              <a
                key={label}
                href={href}
                className={`${hoverClass} transition`}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea divisoria (solo visible en pantallas grandes) */}
      <div className="border-t border-white/30 mt-8 mb-4 mx-auto w-4/5 sm:w-full"></div>

      {/* Derechos reservados */}
      <p className="text-center text-xs sm:text-sm text-white/90">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">VivaWear</span>. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
