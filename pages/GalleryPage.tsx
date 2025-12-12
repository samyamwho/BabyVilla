import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Dynamically import all images from the assets/gallery directory
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true });

const ALL_IMAGES = Object.values(imageModules).map((mod: any, i) => ({
  id: i,
  src: mod.default,
  category: i % 2 === 0 ? "Events" : "Classroom"
}));

const GalleryPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(ALL_IMAGES.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const displayedImages = ALL_IMAGES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Header Section */}
        <div className="text-center mb-16 mt-20">
          <h4 className="text-gray-800 font-bold tracking-widest uppercase text-sm mb-2 ">Image Gallery</h4>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-medium mb-4">
            Captured Moments, Lasting Memories
          </h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedImages.map((img) => (
            <div key={img.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={`Gallery ${img.id}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-lg tracking-wide border-2 border-white px-6 py-2">
                    View Full Size
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Page Dots/Numbers - Simple implementation */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${currentPage === i ? 'bg-secondary w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default GalleryPage;
