import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Footprint from '../components/Footprint';
import { useHref, Link } from 'react-router-dom';
import LogoCarousel from '../components/LogoCarousel';

const Home = () => {

const HeroSection = () => {
  const images = [
    {
      desktop: "/assets/HP_Banner_1.jpg",
      mobile: "/assets/mob-hero1.png",
    },
    {
      desktop: "/assets/Velpack-Banner.jpg",
      mobile: "/assets/mob-hero2.png",
    },
    {
      desktop: "/assets/HP_Banner_3.jpg",
      mobile: "/assets/mob-hero3.png",
    },
    {
      desktop: "/assets/HP_Banner_4.jpg",
      mobile: "/assets/mob-hero4.png",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      className="relative h-[45vh] md:h-screen overflow-hidden mt-8 mb-0 md:mb-6 md:mt-0"
    >
      {/* Background Images */}
      {images.map((imageSet, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={imageSet.mobile} 
            className="block md:hidden w-full h-full object-cover pt-4"
            alt={`Mobile Banner ${index + 1}`}
          />
          <img 
            src={imageSet.desktop} 
            className="hidden md:block w-full h-full object-cover"
            alt={`Desktop Banner ${index + 1}`}
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end items-center pb-12 md:pb-24 pointer-events-none">
        <motion.h1
          variants={fadeIn("left", 1.2)}
          initial="hidden"
          whileInView="show"
          className="text-xl md:text-4xl mb-4 text-white text-center tracking-wider md:tracking-[0.14em] font-hmed leading-tight md:leading-[38px] px-4"
        >
          PAPER-BASED PACKAGING SOLUTIONS SINCE 1956
        </motion.h1>

        <motion.button
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="pointer-events-auto px-3 py-1 md:px-6 md:py-2 border-2 border-[#e81d2d] text-white bg-transparent rounded-md hover:bg-[#b7162a] hover:text-white transition duration-300 font-hbold text-sm md:text-base"
        >
          <Link to="/contactus"> GET IN TOUCH </Link>
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </motion.div>
  );
};

  const AboutUs = () => (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      className="md:my-20 bg-[#b7162a] p-6 text-white relative"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        <div className="w-full md:w-1/2 p-4 md:p-8 space-y-4 flex justify-center md:justify-start items-center md:items-start flex-col">
          <h2 className="text-2xl text-center md:text-left md:text-4xl font-hbold">
            WHO ARE WE?
          </h2>
          <div className="container mx-auto md:mx-0 px-4 flex flex-col md:flex-row items-center justify-center md:justify-start bg-white h-1 w-16 relative"></div>
          <p className="text-base text-center md:text-left md:text-lg font-hmed">
            Velpack has been a pioneer in the paper-based packaging industry since
            1956. We specialize in providing high-quality folded cartons for the
            pharmaceutical, FMCG and industrial sectors.
          </p>

          <button className="font-bold bg-transparent border-2 border-white text-white py-2 px-4 md:px-6 flex items-center rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300">
            <Link to="/aboutUs">KNOW MORE</Link>
          </button>
        </div>
        <div
          className="w-[calc(100%+3rem)] -mx-6 h-[300px] md:w-[60%] md:h-[500px] bg-white rounded-none md:rounded-lg shadow-2xl flex items-center justify-center 
                relative md:absolute md:-bottom-30 md:-right-1/3 md:transform md:-translate-x-1/2 md:scale-75 -mb-6 md:mb-0 mt-6 md:mt-0"
        >
          <iframe
            className="w-full h-full md:rounded-lg"
            src="https://www.youtube.com/embed/yIMcuOvgNAc?si=jOC_CgRbQExFXew2"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );

  const ServicesSection = () => (
    <section className="bg-white py-10 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-3xl font-hbold text-center text-[#b7162a] mb-6 md:mb-10"
        >
          We offer specialized paper-based packaging solutions for various
          industries,
          <br className="hidden md:block" />
          ensuring each product meets stringent quality standards.
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            className="w-full md:w-1/3 relative"
          >
            <img
              src="/assets/Pharmaceutical.jpg"
              alt="Pharmaceutical Packaging"
              className="w-full h-48 md:h-64 object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            className="w-full md:w-1/3 relative"
          >
            <img
              src="/assets/FMCG.jpg"
              alt="FMCG Packaging"
              className="w-full h-48 md:h-64 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

  const CapabilitiesSection = () => (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      className="bg-[#b7162a] text-white py-10 md:py-12 overflow-x-hidden"
    >
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-4xl font-hbold text-center"
        >
          OUR CAPABILITIES
          <div className="w-16 h-1 bg-white mb-4 md:mb-6 mx-auto mt-3"></div>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-base md:text-xl text-center mb-6 md:mb-8 px-4"
        >
          With state-of-the-art machinery and advanced manufacturing processes,
          Velpack delivers precision and quality in every product.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-[#e81d2d] p-4 rounded-lg text-center"
          >
            <h3 className="text-lg md:text-xl font-hmed mb-1">
              Our facility spans
            </h3>
            <p className="text-2xl md:text-4xl font-bold mb-1">
              42,000 sq. ft.
            </p>
            <p>in Navi Mumbai, India</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-[#e81d2d] p-4 rounded-lg text-center"
          >
            <h3 className="text-lg md:text-xl font-hmed mb-1">We produce</h3>
            <p className="text-2xl md:text-4xl font-bold mb-1">3 million</p>
            <p>cartons per day</p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            className="bg-[#e81d2d] p-4 rounded-lg text-center"
          >
            <h3 className="text-lg md:text-xl font-hmed mb-1">We print</h3>
            <p className="text-2xl md:text-4xl font-bold mb-1">1 million</p>
            <p>inserts per day</p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          className="bg-white text-black p-4 md:p-6 rounded-lg mb-6 md:mb-8"
        >
          <motion.h3
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            className="text-xl md:text-2xl font-hbold text-center mb-4 text-[#e81d2d]"
          >
            WE ARE CERTIFIED BY
          </motion.h3>
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-around md:items-center md:space-x-2">
            <img
              src="/assets/ISO_9001.png"
              alt="ISO"
              className="h-14 md:h-20 w-auto mx-auto md:mx-0 mb-2 md:mb-0"
            />
            <img
              src="/assets/PS_9000.png"
              alt="PS"
              className="h-14 md:h-20 w-auto mx-auto md:mx-0 mb-2 md:mb-0"
            />
            <img
              src="/assets/BRC_Global_Standard.png"
              alt="BRC"
              className="h-14 md:h-20 w-auto mx-auto md:mx-0 mb-2 md:mb-0"
            />
            <img
              src="/assets/sedex.png"
              alt="Sedex"
              className="h-14 md:h-20 w-auto mx-auto md:mx-0 mb-2 md:mb-0"
            />
            <img
              src="/assets/PSCI.png"
              alt="PSCI"
              className="h-16 md:h-28 w-auto mx-auto md:mx-0 mb-2 md:mb-0"
            />
            <img
              src="/assets/gmi.png"
              alt="gmi"
              className="h-14 md:h-20 w-auto mx-auto md:mx-0"
            />
          </div>
        </motion.div>

        <Footprint />
      </motion.div>
    </motion.section>
  );

  // For Trusted By Leading Brands
  const TrustedBrandsSection = () => {
    const logos = [
      "Pfizer_1", "abbott", "Marksans", "MSD", "Ipca", "Torent_Pharma",
      "usv", "Ajanta_Pharma", "encube", "Lupin", "FDC", "Franco_1",
      "Piramal", "Encore_1"
    ];

    return (
      <section className="bg-red-600 py-6 md:py-10">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-white">
          TRUSTED BY LEADING BRANDS
        </h2>
        <LogoCarousel logos={logos} speed={30} />
      </section>
    );
  };

  const TrustedclientsSection = () => {
    const logos = [
      "walgreen_1", "CVS", "kroger_pharmacy", "Tesco", "Sainsburys",
      "Bells_Healthcare", "Perrigo_logo", "Galderma", "Dr._Reddys_Laboratories_y", 
      "Coles", "Bayer", "Mankind"
    ];

    return (
      <section className="bg-red-800 py-6 md:py-10">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-white">
          PROUD TO BE ASSOCIATED WITH
        </h2>
        <LogoCarousel logos={logos} speed={30} />
      </section>
    );
  };
  const FeaturesSection = () => (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      className="bg-white py-10 md:py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-4xl font-hbold text-center mb-2 text-[#e81d2d]"
        >
          OUR FEATURES
        </motion.h2>
        <div className="w-20 h-1 bg-[#e81d2d] mx-auto mb-8 md:mb-12"></div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-4 md:gap-8"
        >
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "EMBOSSING", image: "/assets/Embossing.jpg" },
              { name: "ACCUBRAILLE", image: "/assets/Accubraille.jpg" },
              { name: "SPOT GLOSS", image: "/assets/Spot_Gloss.jpg" },
              { name: "FOIL STAMPING", image: "/assets/Foil_Stamping.jpg" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-200 mb-2 md:mb-4 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-bold text-sm md:text-base">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="col-span-2 md:col-span-4 flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full md:w-3/4">
                {[
                  { name: "TEXTURE UV", image: "/assets/Texture_UV.jpg" },
                  { name: "Graining", image: "/assets/Graining.jpg" },
                  {
                    name: "Micro Embossing",
                    image: "/assets/Micro_Embossing.jpg",
                  },
                ].map((feature, index, array) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center ${index === array.length - 1
                        ? "col-span-2 mx-auto md:col-span-1 md:mx-0 w-1/2 md:w-full"
                        : ""
                      }`}
                  >
                    <div className="w-full aspect-square bg-gray-200 mb-2 md:mb-4 rounded-lg overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center font-bold text-sm md:text-base">
                      {feature.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
  const SecurityFeaturesSection = () => (
    <section

      className="bg-black text-white py-4 md:py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <h3

            className="text-xl md:text-2xl  font-hbold whitespace-nowrap"
          >
            SECURITY FEATURES:
          </h3>
          <p

            className="text-base md:text-xl "
          >
            Micro Printing | Invisible Ink Printing | Hologram Foil |
            Coin-Reactive Ink | Tamper-Evident Cartons
          </p>
        </div>
      </div>
    </section>
  );
  const DividedInfoSection = () => {
    const images = [
      {
        name: "Mobile",
        image: "/assets/CC Mobile.png",
        className: "block md:hidden w-full h-auto object-cover",
        alt: "Packaging Facility - Mobile",
      },
      {
        name: "Desktop",
        image: "/assets/CC Desktop.png",
        className: "hidden md:block w-full h-auto object-cover",
        alt: "Packaging Facility - Desktop",
      },
    ];
    return (
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="bg-[#e81d2d] text-white w-full overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex items-start justify-center">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              className="w-screen"
            >
              <div className="">
                {images.map(({ name, image, className, alt }) => (
                  <a 
                    key={name}
                    href="https://createcluster.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image} className={className} alt={alt} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };
  {/* const ReviewCard = ({ review, isCenter }) => (
    <div
      className={`bg-red-500 rounded-lg p-4 md:p-6 text-white ${isCenter ? "bg-red-800 shadow-lg transform md:scale-105 z-10" : "z-0"
        } w-72 md:w-96 h-auto md:h-74 flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-1 text-center">
          {review.name}
        </h3>
        <p className="text-xs md:text-sm mb-2 text-center">{review.company}</p>
      </div>
      <p className="text-xs md:text-sm text-center mb-4 md:mb-16">
        {review.content}
      </p>
    </div>
  );

  const ReviewsSection = () => {
    const reviews = [
      {
        name: "Name 1",
        company: "Company 1",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      },
      {
        name: "Name 2",
        company: "Company 2",
        content:
          "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      },
      {
        name: "Name 3",
        company: "Company 3",
        content:
          "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.",
      },
      {
        name: "Name 4",
        company: "Company 4",
        content:
          "Et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const nextReview = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
    };

    return (
      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#e81d2d]">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-16 h-1 bg-[#e81d2d] mb-8 md:mb-12 mx-auto"></div>

          <div className="relative">
           // 
            <div className="flex md:hidden justify-center items-center relative">
              <button
                onClick={prevReview}
                className="absolute left-0 z-20 text-2xl text-[#000000] hover:text-[#e81d2d] transition"
              >
                &lt;
              </button>
              <div className="w-72">
                <ReviewCard review={reviews[currentIndex]} isCenter={true} />
              </div>
              <button
                onClick={nextReview}
                className="absolute right-0 z-20 text-2xl text-[#000000] hover:text-[#e81d2d] transition"
              >
                &gt;
              </button>
            </div>

            
            <div className="hidden md:flex justify-center items-center">
              <button
                onClick={prevReview}
                className="absolute left-0 z-20 text-4xl text-[#000000] hover:text-[#e81d2d] transition"
              >
                &lt;
              </button>
              <div className="flex justify-center items-center space-x-4 relative">
                <div className="w-96 absolute -left-80 transform scale-100">
                  <ReviewCard
                    review={
                      reviews[
                      (currentIndex - 1 + reviews.length) % reviews.length
                      ]
                    }
                    isCenter={false}
                  />
                </div>
                <div className="w-96 z-10">
                  <ReviewCard review={reviews[currentIndex]} isCenter={true} />
                </div>
                <div className="w-96 absolute -right-80 transform scale-100">
                  <ReviewCard
                    review={reviews[(currentIndex + 1) % reviews.length]}
                    isCenter={false}
                  />
                </div>
              </div>
              <button
                onClick={nextReview}
                className="absolute right-0 z-20 text-4xl text-[#000000] hover:text-[#e81d2d] transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }; */}

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <CapabilitiesSection />
      <TrustedBrandsSection />
      <TrustedclientsSection />
      <FeaturesSection />
      <SecurityFeaturesSection />
      <DividedInfoSection />
       {/*  <ReviewsSection /> */}
      <Footer />
    </>
  );
}

export default Home
