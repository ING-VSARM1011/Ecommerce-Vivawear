import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const sections = [
  {
    title: "Quienes somos",
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
    icon: <FaFacebookF size={20} />,
    href: "#",
    hoverClass: "hover:text-[#A3CEF1]", // azul pastel claro
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "#",
    hoverClass: "hover:text-[#F9C6C9]", // rosa pastel
    label: "Instagram",
  },
  {
    icon: <FaTiktok size={20} />,
    href: "#",
    hoverClass: "hover:text-[#C4E3CB]", // menta clara
    label: "TikTok",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#7ABF62] text-white py-10 px-6 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-white font-semibold mb-4">{title}</h3>
            <ul className="space-y-2 text-sm">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Sección Redes Sociales */}
        <div>
          <h3 className="text-white font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4 text-white">
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

      <p className="text-center text-sm text-white mt-10">
        &copy; {new Date().getFullYear()} VivaWear. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
