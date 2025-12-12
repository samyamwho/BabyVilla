
import React, { useState } from 'react';
import { User, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../emailConfig';

const ApplyPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: 'Playgroup',
    parentName: '',
    relationship: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAIL_CONFIG;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS credentials are missing.');
        alert('System Error: The email service is not configured correctly.');
        setIsSubmitting(false);
        return;
    }

    try {
        // Since we are likely using the same email template as the Contact page,
        // we format all the specific application details into the 'message' field.
        const formattedMessage = `
APPLICATION FOR ADMISSION
=========================

STUDENT DETAILS:
----------------
Name: ${formData.firstName} ${formData.lastName}
Date of Birth: ${formData.dob}
Grade Applying For: ${formData.grade}

PARENT/GUARDIAN DETAILS:
------------------------
Name: ${formData.parentName}
Relationship: ${formData.relationship}
Phone: ${formData.phone}
Email: ${formData.email}
        `.trim();

        // Mapping to the template variables expected by your EmailJS template
        const templateParams = {
            title: `New Admission: ${formData.firstName} ${formData.lastName}`, // Maps to 'title'/'subject'
            name: formData.parentName, // Maps to 'name'
            email: formData.email,     // Maps to 'email'
            message: formattedMessage, // Maps to 'message' containing all form data
            time: new Date().toLocaleString(),
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        
        setIsSubmitted(true);
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Failed to submit application. Please check your internet connection and try again.');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
      return (
        <div className="pt-32 pb-20 bg-background min-h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg text-center mx-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-primary w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Application Received!</h2>
                <p className="text-gray-600 mb-8">
                    Thank you for applying to Baby Villa Montessori. We have received your information for 
                    <span className="font-bold text-gray-800"> {formData.firstName}</span>.
                    Our admissions team will review it and contact you at <span className="font-bold text-gray-800">{formData.phone}</span> shortly.
                </p>
                <button 
                    onClick={() => navigate('/')}
                    className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-800 transition-all"
                >
                    Return to Home
                </button>
            </div>
        </div>
      );
  }

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-4">
            Apply to <span className="text-primary">Baby Villa</span>
          </h1>
          <p className="text-gray-600 text-lg">Start your child's journey with us. Fill out the form below.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {isSubmitting && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                  <Loader2 className="animate-spin text-primary w-12 h-12 mb-4" />
                  <p className="text-xl font-bold text-gray-800">Submitting Application...</p>
              </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-gray-800 flex items-center gap-2">
                <User className="text-secondary" /> Student Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="Child's First Name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="Child's Last Name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Grade Applying For</label>
                  <select 
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100"
                  >
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>Kindergarten</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Parent Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Phone className="text-secondary" /> Parent/Guardian Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Parent Name</label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="Full Name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
                  <input 
                    type="text" 
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="Father/Mother/Guardian" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="+977" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all disabled:bg-gray-100" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-green-800 transition-all transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Submit Application
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                * By submitting this form, you agree to be contacted by Baby Villa Montessori School.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
