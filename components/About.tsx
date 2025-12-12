import React from 'react';
import { Leaf, Heart, Lightbulb } from 'lucide-react';
import hero2 from '../assets/images/hero2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-primary font-serif italic">
            "Hey, We Have Been Looking For You!"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-sans text-lg text-gray-800 leading-relaxed text-justify">
            <p>
              Young minds are like clay that can take any shape and become anything they want, but we should not try to mold them into a figure we want them to be. Every child is special. They are all unique and defined, so we should encourage their individuality. Education should be fun. These are the principles on which Baby Villa School has been founded.
            </p>
            <p>
              Our school's teaching approach is based on Montessori Methods, emphasizing the child's natural curiosity, creativity, and ability to learn through hands-on experiences. Our teachers are trained to observe and assess each child's progress, providing individualized guidance.
            </p>
            <p>
              Since 2015, Baby Villa has been a haven for curious young minds. We don't just focus on academics – we open doors to a world of knowledge, from language and math to science and social studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4 mt-8 sm:mt-0">
               <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                  <Leaf className="text-primary mb-3" size={32} />
                  <h3 className="font-serif font-bold text-lg mb-2">Natural Growth</h3>
                  <p className="text-sm text-gray-600">Fostering natural curiosity and individual pace.</p>
               </div>
               <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                  <Lightbulb className="text-secondary mb-3" size={32} />
                  <h3 className="font-serif font-bold text-lg mb-2">Creativity</h3>
                  <p className="text-sm text-gray-600">Hands-on activities designed to spark innovation.</p>
               </div>
            </div>
            <div className="space-y-4">
                <img 
                  src= {hero2}
                  alt="Child Playing" 
                  className="rounded-2xl shadow-lg w-full h-72 object-cover"
                />
               <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                  <Heart className="text-blue-500 mb-3" size={32} />
                  <h3 className="font-serif font-bold text-lg mb-2">Care & Safety</h3>
                  <p className="text-sm text-gray-600">A nurturing environment that feels like home.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;