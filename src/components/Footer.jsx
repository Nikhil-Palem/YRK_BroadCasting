import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../assets/yrkpics/YRK_LOGO.jpg";
import { useEffect, useState } from "react";

const Footer = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-6">
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
                  className={`font-bold text-xl ${isScrolled ? "text-white-900" : "text-white"
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

            <p className="text-gray-400 leading-relaxed text-sm">
              Leading advertising and branding company with 8+ years of
              experience delivering impactful campaigns across Andhra Pradesh
              & Telangana.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Our Services
              </Link>
              <Link to="/gallery" className="hover:text-indigo-400 transition">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>LED Van Campaigns</li>
              <li>Road Show Activities</li>
              <li>Brand Promotions</li>
              <li>Event Management</li>
              <li>Rural Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                <p className="text-gray-400">
                  Dammaiguda Road, Hyderabad<br />
                  India - 500083 
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-indigo-400 transition"
                >
                  +91 8977840333
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a
                  href="mailto:yrkbroadcasting@gmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  yrkbroadcasting@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} YRK Broadcasting Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
