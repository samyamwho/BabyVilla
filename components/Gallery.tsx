
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing images from assets
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.jpg';
import hero4 from '../assets/images/hero4.jpg';
import img2 from '../assets/images/img_2.jpg';
import img3 from '../assets/images/img_3.jpg';
import img4 from '../assets/images/img_4.jpg';
import img5 from '../assets/images/img_5.jpg';
import img6 from '../assets/images/img_6.jpg';
import img7 from '../assets/images/img_7.jpg';
import img8 from '../assets/images/img_8.jpg';
import img9 from '../assets/images/img_9.jpg';

const GALLERY_IMAGES = [
  hero1, hero2, hero4, img2, img3, img4, img5, img6, img7, img8, img9
];

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 350; // Approximate card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="events" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-serif text-3xl md:text-5xl text-gray-800">
                    School <span className="text-primary">Life</span>
                </h2>
                <div className="w-16 h-1 bg-secondary rounded-full mt-4"></div>
                <p className="mt-4 text-gray-600 max-w-xl">
                    Experience the joy, learning, and growth that happens every day at Baby Villa Montessori.
                </p>
            </div>
            <Link to="/gallery" className="hidden md:block text-primary font-bold hover:underline mt-4 md:mt-0 text-lg">
                View Full Gallery &rarr;
            </Link>
        </div>

        <div className="relative group">
            {/* Navigation Buttons */}
            <button 
                onClick={() => scroll('left')}
                className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-gray-800 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:block"
                aria-label="Scroll Left"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Slider Container */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {GALLERY_IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        className="min-w-[85vw] sm:min-w-[360px] h-[300px] sm:h-[360px] snap-center shrink-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group/card"
                    >
                        <img 
                            src={src} 
                            alt={`School Life ${index + 1}`} 
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-bold text-lg font-serif tracking-wide">View Moments</span>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => scroll('right')}
                className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-gray-800 hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                aria-label="Scroll Right"
            >
                <ChevronRight size={28} />
            </button>
        </div>
        
        <div className="mt-4 text-center md:hidden">
             <Link to="/gallery" className="text-primary font-bold hover:underline text-lg">
                View Full Gallery &rarr;
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
