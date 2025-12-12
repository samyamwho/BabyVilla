
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images directly to ensure they load correctly
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.jpg';
import hero4 from '../assets/images/hero4.jpg';

const SLIDES = [
    {
        id: 1,
        image: hero1,
        title: "Welcome to",
        titleHighlight: "Baby Villa",
        subtitle: "Baby Villa Montessori provides a nurturing and stimulating environment for young children, fostering a love of learning through the Montessori method.",
        quote: "Nurturing Young Minds for a Bright Future"
    },
    {
        id: 2,
        image: hero2,
        title: "Learners Today,",
        titleHighlight: "Leaders Tomorrow",
        subtitle: "The most effective teaching style for future leaders goes beyond rote memorization. It cultivates independent learning through inquiry and problem-solving.",
        quote: "Creating the backbone of the country"
    },
    {
        id: 3,
        image: hero4,
        title: "Get Started",
        titleHighlight: "NOW",
        subtitle: "Embark on an incredible learning adventure with Baby Villa Montessori! Here, your child's natural curiosity becomes the fuel for exploring the immense world of knowledge.",
        quote: "CREATE EXPLORE CONQUER"
    }
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[currentSlide];

    const scrollToFacilities = () => {
      const element = document.getElementById('facilities');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Image Side - Left */}
          <div className="w-full md:w-1/2 relative flex justify-center order-1">
             {/* Slider Arrows */}
             <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm -ml-2 md:-ml-8 transition-all">
                <ChevronLeft size={24} className="text-gray-700" />
             </button>
             <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm -mr-2 md:-mr-8 transition-all">
                <ChevronRight size={24} className="text-gray-700" />
             </button>

            {/* Reduced max-width on mobile to make image smaller */}
            <div className="relative w-[80%] max-w-[320px] md:w-full md:max-w-[500px] aspect-square">
              {/* Blob container */}
              <div className="w-full h-full blob-shape overflow-hidden border-4 border-white shadow-2xl relative bg-gray-200">
                 {SLIDES.map((s, index) => (
                     <img 
                        key={s.id}
                        src={s.image} 
                        alt={s.title} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    />
                 ))}
              </div>
            </div>
          </div>

          {/* Text Side - Right */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2">
            <div className="transition-opacity duration-500 ease-in-out">
                <h1 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
                {slide.title} <span className="text-primary block md:inline">{slide.titleHighlight}</span>
                </h1>
                
                <p className="text-gray-800 text-lg md:text-base lg:text-lg font-sans leading-relaxed mt-6">
                {slide.subtitle}
                </p>
                
                <p className="text-primary font-medium text-sm md:text-base uppercase tracking-wider mt-4">
                {slide.quote}
                </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/apply">
                <button className="bg-primary hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-green-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                    Enroll Your Child
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Link>
              <button 
                onClick={scrollToFacilities}
                className="border-2 border-gray-300 hover:border-secondary hover:text-secondary text-gray-600 px-8 py-3 rounded-full font-bold transition-all bg-white w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
