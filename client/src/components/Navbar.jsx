import { useState } from "react";
import { useScroll } from "../context/ScrollContext";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { scrollToSection } = useScroll();

  const menuItems = [
    { title: "Anasayfa", href: "#home" },
    { title: "Hizmetlerim", href: "#features" },
    { title: "Portfolyo", href: "#portfolio" },
    { title: "Deneyim", href: "#resume" },

    { title: "İletişim", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    navigate("/");
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-dark/95 backdrop-blur-sm shadow-lg ">
      <div className="container py-5">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold heading-gradient"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="nav-link font-medium"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-body-color hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "min-h-screen opacity-100 p-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="border-t border-border-color pt-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 nav-link font-medium"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
