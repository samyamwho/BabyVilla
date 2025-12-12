import React from 'react';
import { FacilityCardProps } from '../types';
import { Blocks, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import preschool from '../assets/preschool.png';
import primary from '../assets/primaryschool.png';

const FacilityCard: React.FC<FacilityCardProps> = ({ id, title, description, imageSrc, colorClass, icon }) => (
  <div className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl`}>
    {/* Image Container */}
    <div className="h-64 overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute top-0 right-0 p-4 ${colorClass} rounded-bl-3xl z-10`}>
        <div className="text-white">
            {icon}
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-8">
      <h3 className="mb-3 font-serif text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 leading-relaxed font-sans">
        {description}
      </p>
      <Link to={`/facilities/${id}`}>
        <button className={`w-full rounded-xl py-3 font-bold text-white shadow-md transition-opacity hover:opacity-90 ${colorClass}`}>
          Learn More
        </button>
      </Link>
    </div>
  </div>
);
const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-4">
            Our <span className="text-primary">Facilities</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer distinct programs tailored to different developmental stages, ensuring your child gets exactly what they need at every age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          <FacilityCard
            id="pre-school"
            title="Pre-School"
            description="Growing learning ability & improving skills in your kids. A colorful world of toys, games, and foundational Montessori activities."
            imageSrc={preschool}
            colorClass="bg-[#2e7d32]" // Primary Green
            icon={<Blocks size={32} />}
          />
          <FacilityCard
            id="primary-school"
            title="Primary School"
            description="Upto Grade 6. Focused on academic excellence, critical thinking, and social development through comprehensive curriculum."
            imageSrc={primary}
            colorClass="bg-[#2e7d32]" // Secondary Yellow/Orange
            icon={<BookOpen size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;