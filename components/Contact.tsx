import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="find-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray-600">We would love to show you around our campus.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="w-full md:w-1/3 p-8 md:p-12 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
             <div className="absolute top-20 -left-10 w-20 h-20 bg-white/10 rounded-full"></div>

            <div className="space-y-8 relative z-10">
              <h3 className="font-serif text-2xl font-bold mb-6 border-b border-white/30 pb-4">Contact Info</h3>
              
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-green-100">Gatthaghar, Bhaktapur<br/>Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-green-100">+977-9841956958</p>
                  <p className="text-green-100">01-6639708</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-green-100">samyamshr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Office Hours</h4>
                  <p className="text-green-100">Sun - Fri: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
                <Link to="/contact">
                  <button className="w-full bg-white hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl transition-colors">
                      Send us a Message
                  </button>
                </Link>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-2/3 h-96 md:h-auto min-h-[400px] bg-gray-200">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20954.793644201465!2d85.38442868389761!3d27.676337729703445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b000937bf9b%3A0x8ad161e52b1352e!2sBaby%20Villa%20Montessori%20School!5e0!3m2!1sen!2snp!4v1710861378708!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Baby Villa Montessori Location"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;