
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../emailConfig';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        // Mapping form data to the variables defined in your EmailJS template
        const templateParams = {
            title: formData.subject,                     
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,                       
            message: formData.message,                   
            time: new Date().toLocaleString(),           
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please check your internet connection and try again.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gray-800 mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-gray-600 text-lg">Have questions? We're here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 order-2 md:order-1 relative overflow-hidden">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="text-primary w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary font-bold hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-colors disabled:bg-gray-100" 
                                placeholder="John" 
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
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-colors disabled:bg-gray-100" 
                                placeholder="Doe" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-colors disabled:bg-gray-100" 
                            placeholder="john@example.com" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                            <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-colors disabled:bg-gray-100" 
                            placeholder="Inquiry about..." 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea 
                            rows={4} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-colors disabled:bg-gray-100" 
                            placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-green-800 transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95 transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} /> Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </>
            )}
          </div>

          {/* Info Side */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Visit Us</h4>
                            <p className="text-green-100">Gatthaghar, Bhaktapur, Nepal</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Call Us</h4>
                            <p className="text-green-100">+977-9841956958</p>
                            <p className="text-green-100">01-6639708</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Email Us</h4>
                            <p className="text-green-100">samyamshr@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-dashed border-gray-200 text-center">
                 <h4 className="font-serif text-xl font-bold text-gray-800 mb-2">Admissions Open!</h4>
                 <p className="text-gray-600 mb-4">We are currently accepting applications for the upcoming academic year.</p>
                 <a href="/apply" className="text-primary font-bold hover:underline">Apply Now &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
