import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContactusPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    query: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS credentials
    const serviceID = 'service_13a21sn';
    const templateID = 'template_ql2a4mf';
    const userID = 'D657UTjw5X10klAOi';

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(serviceID, templateID, formData, userID);

      if (response.status === 200) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            mobile: '',
            email: '',
            query: '',
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Contact Form Section with fixed mobile spacing */}
      <div 
        className="bg-[#b7162a] text-white py-12 md:py-16" 
        id='contact'
        style={{ marginTop: '96px' }} // Fixed 96px spacing for all screens
      >
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">We Would Love to Hear from You.</h1>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block mb-2">Mobile no.</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="query" className="block mb-2">Your query</label>
                <textarea
                  id="query"
                  rows={6}
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-transparent border border-white placeholder-white text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="border border-white text-white px-8 py-2 rounded hover:bg-white hover:text-red-700 transition-colors"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    </div>
                  ) : submitted ? (
                    'Submitted'
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map and Contact Details Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden lg:ml-44 sm:ml-0 md:ml-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.517548594197!2d73.02005617466614!3d19.11424765077173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0e936892ec7%3A0x69bc6eb3f6a36a46!2sVELPACK%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1738696677473!5m2!1sen!2sin"
              width="1200"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Velpack Pvt. Ltd.</h2>
            <p className="text-gray-600">
              A-233, TTC Area, MIDC,<br />
              Mahape, Navi Mumbai 400 710, India
            </p>
            <p className="text-gray-600">
              <a href="mailto:info@velpack.com" className="hover:text-red-700">
                info@velpack.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+912227781277" className="hover:text-red-700">
                +91 22 2778 1277
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactusPage;
