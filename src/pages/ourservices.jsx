import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/assets/services-hero.jpg"
          alt="Our Services at Velpack" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">OUR SERVICES</h1>
        </div>
      </div>

      {/* Reduced white space gap */}
      <div className="h-8"></div>

      {/* Services Section */}
      <div className="bg-[#b7162a] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side: Text and CTA */}
            <div className="w-full md:w-1/2 text-white pr-0 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Paper-Packing Done Differently</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor 
                in hendrerit in vulputate velit esse molestie consequat.
              </p>
              <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300 self-start">
                Contact Us
              </button>
            </div>
            
            {/* Right side: Image (with reduced width) */}
            <div className="w-full md:w-5/12">
              <img 
                src="/assets/packing-samples.jpg"
                alt="Paper Packing Samples" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industry Expertise Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#e81d2d] mb-12">
            OUR EXPERTISE AND ASSISTANCE IN MAJOR INDUSTRIES
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Pharmaceutical Packaging Box */}
            <div className="w-full md:w-5/12 bg-white border-2 border-[#e81d2d] rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e81d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 7.5v9"/>
                  <path d="M6 12h12"/>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#e81d2d] text-center mb-4">
                Pharmaceutical Packaging
              </h3>
              <p className="text-[#e81d2d] text-center">
                Lorem ipsum dolor sit amet, diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* FMCG Packaging Box */}
            <div className="w-full md:w-5/12 bg-white border-2 border-[#e81d2d] rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e81d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
                  <path d="M12 3v6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#e81d2d] text-center mb-4">
                FMCG Packaging
              </h3>
              <p className="text-[#e81d2d] text-center">
                Lorem ipsum dolor sit amet, diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
