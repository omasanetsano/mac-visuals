import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/experience", label: "Experience" },
    { path: "/content", label: "Visual Stories" },
    { path: "/portfolio", label: "Portraits" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close menu when clicking on the overlay background
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking on a nav link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black border-b border-gray-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white font-bold text-lg flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <span className="text-sm sm:text-base">MALCOLM (MAC)</span>
            <span className="text-sm">🎥</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors duration-300 text-xs sm:text-sm lg:text-base ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 text-white z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on menu items
                >
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`text-lg sm:text-xl font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}