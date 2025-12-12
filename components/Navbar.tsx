import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'Find Us', href: '/#find-us' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Logo" className="w-36 h-24" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                 // If on homepage, prevent default and smooth scroll manually
                 if (location.pathname === '/') {
                     e.preventDefault();
                     const hash = item.href.split('#')[1];
                     const element = document.getElementById(hash);
                     if(element) element.scrollIntoView({ behavior: 'smooth' });
                 }
                 // If not on homepage, let the <a> tag do its job (navigate to /#id)
              }}
              className="text-black hover:text-primary font-normal transition-colors font-sans text-lg tracking-wide cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4">
             <Link to="/contact">
                 <button className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-white transition-all">
                    Contact Us
                 </button>
             </Link>
             <Link to="/apply">
                 <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:bg-green-800 hover:scale-105 transition-all">
                    Apply to Program
                 </button>
             </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[35rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-bold text-gray-700 hover:text-primary border-b border-gray-100 pb-3"
              onClick={(e) => {
                  if (location.pathname === '/') {
                     e.preventDefault();
                     const hash = item.href.split('#')[1];
                     const element = document.getElementById(hash);
                     if(element) element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-6">
             <Link to="/contact" onClick={() => setIsOpen(false)}>
                 <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold text-lg">
                    Contact Us
                 </button>
             </Link>
             <Link to="/apply" onClick={() => setIsOpen(false)}>
                 <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-md">
                    Apply to Program
                 </button>
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;