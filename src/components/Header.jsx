import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../public/yrkpics/YRK_LOGO.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="YRK Broadcasting Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <h1
              className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              YRK Broadcasting
            </h1>
            <p
              className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/70"
                }`}
            >
              Pvt. Ltd.
            </p>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors ${location.pathname === link.path
                  ? "text-indigo-600"
                  : isScrolled
                    ? "text-gray-800 hover:text-indigo-600"
                    : "text-white hover:text-indigo-400"
                }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="tel:+919876543210">
            <button
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition ${isScrolled
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white text-indigo-600 hover:bg-gray-100"
                }`}
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-gray-800" : "text-white"
            }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-lg font-medium transition ${location.pathname === link.path
                    ? "bg-indigo-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <a href="tel:+919876543210">
              <button className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                <Phone className="w-4 h-4" />
                Get Quote
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
