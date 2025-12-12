import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logowhite.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f7d32] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
               <div className=" p-2 rounded-full">
                 <img src={logo} alt="Logo" className="w-36 h-24" />
               </div>
            </div>
            <p className="text-gray-100 text-lg mt-4">
              Nurturing Young Minds for a Bright Future. Established in 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#1a4d2e] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#1a4d2e] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#1a4d2e] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-100 text-md">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Programs</h4>
            <ul className="space-y-2 text-gray-100 text-md">
              <li><a href="#" className="hover:text-white transition-colors">Playgroup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nursery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kindergarten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Primary (1-6)</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-white text-md mb-3">Subscribe to get updates on school events.</p>
            <form className="flex">
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-3 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white text-sm focus:bg-white/20 outline-none placeholder-gray-400"
                />
                <button className="bg-white text-gray-900 px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-yellow-400 transition-colors">
                    Go
                </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-100">
          <p>&copy; {new Date().getFullYear()} Baby Villa Montessori School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;