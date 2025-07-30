import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-white relative py-8 sm:py-16">
            <div className="border-t border-gray-300 w-full absolute top-0 left-0 right-0"></div>
            <div className="container mx-auto px-4 sm:px-8 pt-8">
                <div className="flex flex-wrap sm:flex-nowrap">
                    {/* Left Column */}
                    <div className="w-full sm:w-1/3 pr-0 sm:pr-8 mb-6 sm:mb-0">
                        <img src="/assets/Velpack_logo_fullcolor_rgb.png" alt="Velpack Logo" className="h-10 mb-3" />
                        <p className="text-sm mb-1">Velpack Pvt. Ltd.</p>
                        <p className="text-sm mb-1">A-233, TTC Area, MIDC, Mahape,</p>
                        <p className="text-sm mb-1">Navi Mumbai 400 710, India</p>
                        <p className="text-sm mb-1">info@velpack.com</p>
                        <p className="text-sm">+91 22 2778 1277</p>
                    </div>

                    {/* Vertical Divider (visible only on large screens) */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-300"></div>

                    {/* Right Column */}
                    <div className="w-full sm:w-2/3 pl-0 sm:pl-8">
                        <h3 className="text-xl font-bold mb-3 text-[#e81d2d]">Connect with us</h3>
                        <form>
                            {/* Input Fields */}
                            <div className="flex flex-wrap sm:flex-nowrap mb-3 space-y-3 sm:space-y-0 sm:space-x-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full sm:w-1/3 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full sm:w-1/3 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile/Phone"
                                    className="w-full sm:w-1/3 p-2 border border-gray-300 rounded"
                                />
                            </div>
                            {/* Textarea */}
                            <textarea
                                placeholder="Write your message"
                                className="w-full p-2 border border-gray-300 rounded mb-3"
                                rows="3"
                            ></textarea>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-[#e81d2d] text-white px-5 py-2 rounded hover:bg-[#b7162a] transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
