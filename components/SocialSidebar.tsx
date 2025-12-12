import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const links = [
    { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/search/top?q=baby%20villa%20montessori' },
    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/samyamventures/' },
    { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@BabyVillaMontessoriSchool' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 pointer-events-none">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="
            pointer-events-auto
            relative flex items-center justify-end
            w-12 hover:w-40 h-12
            bg-white text-primary
            hover:bg-primary hover:text-white
            rounded-l-full shadow-lg hover:shadow-xl
            transition-all duration-300 ease-out
            group overflow-hidden
            border border-r-0 border-gray-100 hover:border-primary
          "
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute left-6 whitespace-nowrap font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
            {link.label}
          </span>
          <div className="w-12 h-12 flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:scale-110">
            <link.Icon size={20} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
