import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Technologypage = () => {
  const technologies = [
    {
      title: "Prepress Technology",
      image: "/assets/Prepress.jpg",
      items: [
        "ESKO Packaging Prepress Software",
        "FFEI CTP",
        "Glunz & Jensen CTP Processor",
        "AOKE Sample Maker",
        "Tec 4 Check Media Check Print Inspection"
      ]
    },
    {
      title: "Cutting-Edge Machinery for Cartons",
      image: "/assets/Cutting_Edge_Cartons.jpg",
      items: [
        "Polar Guillotine – 115",
        "Heidelberg XL 75 – 6 Colour + Coater",
        "Komori GL 640 – 6 Color + Coater",
        "Heidelberg UV Varnishing",
        "UCS Spot UV",
        "Heidelberg Foil Stamping (2 nos.)",
        "Bobst Die Cutting – 76E",
        "Bobst Novacut 2.0 – 106",
        "Bobst Novacut 3.0 – 106",
        "Gargi Platen Die Cutting",
        "Suba Stripping and Blanking",
        "Checkmate 50 – Carton Inspection System",
        "Checkmate 25 – Carton Inspection System"
      ]
    },
    {
      title: "Precision Machinery for Inserts",
      image: "/assets/Precision_inserts.jpg",
      items: [
        "Polar Guillotine – 115",
        "Polar Guillotine – 76",
        "Komori 2 Colour Perfector – 28",
        "Komori 2 Colour Perfector – 40",
        "Pratham Insert Folder (2 nos.)",
        "GUK Insert Folder",
        "Bobst Expertfold Folder Gluer with Accubraille and Baumer hhs Quality Assurance System (2 nos.)",
        "Bobst Ambition Folder Gluer with Lock Bottom pasting and Baumer hhs Quality Assurance System"
      ]
    },
    {
      title: "Quality Department Equipment",
      image: "/assets/Quality_Department.jpg",
      items: [
        "Bursting Strength Tester",
        "Digital GSM Testing Machine",
        "Electronic Weighing Scale",
        "Digital Thickness Gauge",
        "Rub Resistance Tester",
        "BYK Gloss Meter",
        "B4 Ford Cup Viscometer",
        "Bar Code Reader",
        "Tech4Check with Graphtech Scanner"
      ]
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[50vh] sm:h-screen"
      >
        <img 
          src="/assets/OT_Banner.jpg"
          alt="Our Services at Velpack" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl sm:text-5xl font-bold text-center px-4"
          >
            OUR TECHNOLOGY
          </motion.h1>
        </div>
      </motion.div>

      {/* Technologies Section */}
      <div className="bg-[#b7162a] pt-16 pb-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl sm:text-4xl font-bold text-center mb-2"
          >
            STATE OF THE ART MACHINERY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-base md:text-xl text-center mb-16 text-sm sm:text-base"
          >
            With state-of-the-art machinery and advanced manufacturing processes, Velpack delivers precision and quality in every product.
          </motion.p>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row bg-[#e81d2d] rounded-lg overflow-hidden shadow-lg"
              >
                <div className="w-full sm:w-1/3 flex items-center justify-center">
                  <motion.img 
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-64 sm:h-full object-cover"
                  />
                </div>
                <div className="w-full sm:w-2/3 p-4 sm:p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">{tech.title}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, i) => (
                      <motion.p 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-white text-sm sm:text-base"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technologypage;
