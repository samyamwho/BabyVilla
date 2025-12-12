
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, BookOpen } from 'lucide-react';
import hero from "../assets/images/hero4.jpg";
import primary from "../assets/gallery/488930040_1281440767323218_2416563481007462797_n.jpg"

const FACILITIES_DATA: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    schedule: string;
    ageGroup: string;
    curriculumHighlights: string[];
    colorClass: string;
    themeColor: string;
}> = {
  'pre-school': {
    title: 'Pre-School Program',
    subtitle: 'Playgroup, Nursery, Kindergarten',
    description: 'Our Pre-School program is a sanctuary for curiosity. We strictly follow the Montessori philosophy, believing that children learn best when they are guided rather than instructed. The environment is prepared to facilitate independent learning, sensory development, and social interaction.',
    image: hero,
    features: [
      'Montessori-based Learning Materials',
      'Sensory and Motor Skill Development',
      'Social Interaction & Emotional Intelligence',
      'Safe, Colorful, and Child-Friendly Play Areas',
      'Creative Arts, Craft, and Music Sessions',
      'Daily Outdoor Activities'
    ],
    curriculumHighlights: [
        'Practical Life Exercises',
        'Sensorial Education',
        'Language Arts',
        'Mathematics',
        'Cultural Subjects'
    ],
    schedule: 'Sunday - Friday: 9:30 AM - 3:00 PM',
    ageGroup: '2 - 5 Years',
    colorClass: 'text-[#2e7d32]',
    themeColor: 'bg-[#2e7d32]'
  },
  'primary-school': {
    title: 'Primary School Program',
    subtitle: 'Grade 1 to Grade 6',
    description: 'As children graduate to our Primary School, we transition them into a more structured yet flexible learning environment. We focus on building a strong academic foundation while continuing to nurture critical thinking and creativity. Our syllabus aligns with national standards but is delivered through innovative teaching methods.',
    image: primary,
    features: [
      'Comprehensive Curriculum (Math, Science, English, Nepali, Social Studies)',
      'Project-based & Inquiry-based Learning',
      'Computer Science & IT Education',
      'Extracurriculars: Sports, Dance, Music, Drama',
      'Well-stocked Library & Reading Programs',
      'Character Building & Discipline'
    ],
    curriculumHighlights: [
        'Advanced Literacy & Numeracy',
        'Scientific Inquiry',
        'Global Perspectives',
        'Digital Literacy',
        'Team Sports & Physical Education'
    ],
    schedule: 'Sunday - Friday: 9:00 AM - 4:00 PM',
    ageGroup: '6 - 12 Years',
    colorClass: 'text-[#2e7d32]',
    themeColor: 'bg-[#2e7d32]'
  }
};

const FacilityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Default to pre-school if id is somehow invalid or handle 404
  const facility = id && FACILITIES_DATA[id] ? FACILITIES_DATA[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!facility) {
    return (
        <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-background">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program not found</h2>
            <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
            src={facility.image} 
            alt={facility.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{facility.title}</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">{facility.subtitle}</p>
        </div>
        <button 
            onClick={() => navigate(-1)}
            className="absolute mt-10 top-24 left-4 md:left-8 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all z-20"
            aria-label="Go back"
        >
            <ArrowLeft size={24} />
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className={`font-serif text-3xl font-bold mb-4 ${facility.colorClass}`}>Program Overview</h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            {facility.description}
                        </p>
                    </div>

                    <div className="h-px bg-gray-100 w-full"></div>

                    <div>
                         <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                            {facility.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className={`shrink-0 mt-1 ${facility.colorClass}`} size={20} />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div>
                        <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Curriculum Highlights</h3>
                        <div className="flex flex-wrap gap-3">
                            {facility.curriculumHighlights.map((item, idx) => (
                                <span key={idx} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 border-b pb-4">Quick Facts</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm text-gray-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Schedule</p>
                                    <p className="text-sm font-semibold text-gray-800">{facility.schedule}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm text-gray-600">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Age Group</p>
                                    <p className="text-sm font-semibold text-gray-800">{facility.ageGroup}</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-sm text-gray-600">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Method</p>
                                    <p className="text-sm font-semibold text-gray-800">{facility.title.includes('Pre') ? 'Montessori' : 'Integrated'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 text-center shadow-lg relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-full h-2 ${facility.themeColor}`}></div>
                        <h3 className={`font-serif text-2xl font-bold ${facility.colorClass} mb-2`}>Interested?</h3>
                        <p className="text-gray-600 mb-6 text-sm">Enroll your child in our {facility.title} today and secure their bright future.</p>
                        <Link to="/apply">
                            <button className={`w-full ${facility.themeColor} text-white font-bold py-3 rounded-xl shadow-lg hover:brightness-110 transition-all`}>
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
