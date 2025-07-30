import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const AboutUsPage = () => {
  const sections = {
    sustainability: {
      image: "/assets/Sustainability.jpg",
      text: "At Velpack, we prioritize environmental protection and employee safety, adhering to rigorous standards and conducting regular audits.",
      heading: "Sustainability"
    },
    environment: {
      image: "/assets/Enviroment_Protection.jpg",
      text: "We implement preventive actions and regular monitoring to avoid environmental damage, including ambient air quality checks, stack gas monitoring, ambient noise level monitoring, and STP water checks.",
      heading: "Environment Protection"
    },
    safety: {
      image: "/assets/Employee_Health.jpg",
      text: "Our comprehensive measures ensure the well-being of our employees, fostering a safe and healthy work environment.",
      heading: "Employee Health and Safety"
    },
    audits: {
      image: "/assets/Regular_Audits.jpg",
      text: "Velpack is independently audited under SMETA criteria by SEDEX and by the Pharmaceutical Supply Chain Initiative (PSCI) for better social, environmental, and economic outcomes.",
      heading: "Regular Audits"
    }
  };

  const teamMembers = [
    {
      name: "Bennie Phillips",
      role: "Director",
      education: "Printing Technology, J.J. School of Arts, Mumbai"
    },
    {
      name: "Rohan Phillips",
      role: "Director",
      education: "B.Sc. Mechanical Engineering, Georgia Institute of Technology, USA"
    },
    {
      name: "Bobbie Phillips",
      role: "Managing Director",
      education: "MBA, Finance, University of Scranton, USA"
    },
    {
      name: "Lyssa Phillips",
      role: "Director",
      education: [
        "B.A. Economics & Global Studies, U.C.L.A, USA",
        "Diploma in Packaging, Indian Institute of Packaging, Mumbai"
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState('sustainability');

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Header with adjusted mobile spacing between h1 and h2 */}
        <div className="text-center py-16 md:py-24 mt-8">
          <h1 className="text-2xl sm:text-4xl font-hbold mb-1 sm:mb-4">
            VELPACK'S JOURNEY
          </h1>
          <h2 className="text-xl sm:text-3xl font-hmed text-red-500">
            Wrapping Responsibly since 1956
          </h2>
        </div>

        {/* Enhanced Banner/Hero Section */}
        <div className="relative w-full -mt-12">
          {/* Desktop layout */}
          <div className="hidden sm:flex">
            <div className="relative w-4/5">
              <div className="aspect-[16/9]">
                <img 
                  src="/assets/AU_Banner.jpg"
                  alt="Manufacturing equipment" 
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute bottom-8 right-0 w-1/3 bg-stone-300 p-6 shadow-lg translate-x-1/4">
                  <p className="text-gray-800 text-center text-sm sm:text-base">
                    Founded in 1956, Velpack has grown from a small family business into a global supplier of premium paper-based packaging. Our state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft., enabling us to produce millions of cartons and inserts daily.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/5 bg-[#b7162a]" />
          </div>

          {/* Mobile layout */}
          <div className="sm:hidden flex flex-col">
            <div className="w-full">
              <div className="aspect-[16/9]">
                <img 
                  src="/assets/AU_Banner.jpg"
                  alt="Manufacturing equipment" 
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
            <div className="w-full bg-stone-300 p-4 shadow-lg">
              <p className="text-gray-800 mb-2 text-center text-sm">
                Founded in 1956, Velpack has grown from a small family business into a global supplier of premium paper-based packaging. Our state-of-the-art facility in Navi Mumbai spans 42,000 sq. ft., enabling us to produce millions of cartons and inserts daily.
              </p>
            </div>
          </div>
        </div>

        {/* Spacing for desktop only */}
        <div className="hidden sm:block h-16"></div>
        
        {/* Team Section */}
        <div className="bg-[#b7162a] sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-2xl sm:text-4xl font-bold text-center pt-6 mb-4 sm:mt-0">OUR TEAM</h2>
            <div className="w-16 h-1 bg-white mb-6 mx-auto mt-2"></div>

            <p className="text-white text-base md:text-xl text-center mb-12 text-sm sm:text-base">
              Combining seasoned expertise with dynamic innovation, our leadership team drives Velpack's success.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-[#e81d2d] font-bold mb-1">{member.name}</h3>
                  <p className="text-[#e81d2d] mb-4">{member.role}</p>
                  {Array.isArray(member.education) ? (
                    member.education.map((edu, i) => (
                      <p key={i} className="text-sm mb-2">{edu}</p>
                    ))
                  ) : (
                    <p className="text-sm">{member.education}</p>
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-white text-base md:text-xl text-center mt-8 sm:mt-12 mb-0 sm:mb-0 pb-4 sm:pb-0 text-sm sm:text-base">
              As a family-owned business, we prioritize integrity, innovation, and excellence in all we do. Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>
        </div>

        {/* Sections Navigation */}
        <div className="hidden sm:mt-16 sm:block"></div>
        
        <div>
          <div className="bg-black py-4 flex flex-wrap justify-center px-4 sm:px-32">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`text-sm sm:text-lg font-medium px-2 sm:px-4 py-1 sm:py-2 m-1 ${
                  activeSection === section ? 'text-red-500' : 'text-white'
                } transition-colors duration-300`}
                onClick={() => setActiveSection(section)}
              >
                {sections[section].heading}
              </button>
            ))}
          </div>
          
          {/* Desktop layout for carousel */}
          <div className="hidden sm:block relative w-full">
            <div className="relative aspect-[21/9] w-full">
              <img 
                src={sections[activeSection].image}
                alt={sections[activeSection].heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-1/3 bg-[#e81d2d] p-6">
                <p className="text-white text-center text-base">
                  {sections[activeSection].text}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile layout for carousel */}
          <div className="sm:hidden w-full">
            <div className="w-full">
              <img 
                src={sections[activeSection].image}
                alt={sections[activeSection].heading}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <div className="w-full bg-[#e81d2d] p-4">
              <p className="text-white text-center text-sm">
                {sections[activeSection].text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
