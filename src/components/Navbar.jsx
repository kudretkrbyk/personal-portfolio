import { useState, useEffect } from 'react';
import { useScroll } from '../context/ScrollContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Anasayfa', href: '#home' },
    { title: 'Özellikler', href: '#features' },
    { title: 'Portfolyo', href: '#portfolio' },
    { title: 'Deneyim', href: '#resume' },
    { title: 'Blog', href: '#blog' },
    { title: 'İletişim', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container py-5">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold heading-gradient"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            KUDRET
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
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
};

export default Navbar;
