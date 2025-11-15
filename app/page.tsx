"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  // Video Configuration - Atur ukuran dan aspect ratio video di sini
  const VIDEO_CONFIG = {
    pricelist: {
      width: 500,
      height: 400,
      aspectRatio: "4/3",
    },
  };

  // Hero Section Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroMedia = [
    { type: "video", src: "/hero-video.mp4" },
    { type: "image", src: "/carousel-1.jpg" },
    { type: "image", src: "/carousel-2.jpg" },
    { type: "image", src: "/carousel-3.jpg" },
    { type: "video", src: "/testimoni_photochrome.mp4" },
  ];

  // Pricelist Section Carousel
  const [pricelistSlide, setPricelistSlide] = useState(0);
  const pricelistMedia = [
    { type: "video", src: "/hero-video.mp4" },
    { type: "video", src: "/video2.mp4" },
    { type: "video", src: "/video3.mp4" },
    { type: "video", src: "/video4.mp4" },
  ];

  // Hero carousel functions
  const nextHeroSlide = () => {
    console.log("NEXT HERO CLICKED!");
    setCurrentSlide((prev) => {
      const next = (prev + 1) % heroMedia.length;
      console.log("Moving from", prev, "to", next);
      return next;
    });
  };

  const prevHeroSlide = () => {
    console.log("PREV HERO CLICKED!");
    setCurrentSlide((prev) => {
      const next = (prev - 1 + heroMedia.length) % heroMedia.length;
      console.log("Moving from", prev, "to", next);
      return next;
    });
  };

  // Pricelist carousel functions
  const nextPricelistSlide = useCallback(() => {
    console.log("test");
    setPricelistSlide((prev) => (prev + 1) % pricelistMedia.length);
  }, [pricelistMedia.length]);

  const prevPricelistSlide = useCallback(() => {
    setPricelistSlide((prev) => (prev - 1 + pricelistMedia.length) % pricelistMedia.length);
  }, [pricelistMedia.length]);

  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      {/* Header */}
      <header id="header" className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div id="logo-section" className="flex items-center gap-2">
          <Image src="/logo.png" alt="PhotochroMe Logo" width={100} height={100} />
          <span className="text-xl font-semibold text-gray-900">PhotochroMe</span>
        </div>

        <nav id="navigation" className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900 transition">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero-section" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="hero-content">
            <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Capture
              <br />
              The Best
              <br />
              Moments
            </h1>
            <p id="hero-description" className="text-gray-600 mb-8 leading-relaxed">
              Abadikan momen berharga Anda dengan sentuhan elegan dari PhotoChrome — photobooth modern dengan hasil foto berkelas, simpel, cepat, dan hasilnya menakjubkan.
            </p>
            <a
              href="https://wa.me/6285285962272?text=Halo%20PhotochroMe%2C%20saya%20ingin%20booking%20photobooth"
              target="_blank"
              rel="noopener noreferrer"
              id="book-now-button"
              className="inline-block bg-[#FF7A59] hover:bg-[#ff6544] text-white px-8 py-3 rounded-md font-medium transition shadow-md hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Hero Carousel */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-[#E8D5C4]">
              {/* Current Slide Only - Simple Conditional Rendering */}
              {heroMedia[currentSlide].type === "video" ? (
                <video key={`video-${currentSlide}`} className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src={heroMedia[currentSlide].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image key={`image-${currentSlide}`} src={heroMedia[currentSlide].src} alt={`Slide ${currentSlide + 1}`} fill className="object-cover" priority />
              )}

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("PREV BUTTON CLICKED!");
                  prevHeroSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-20 transition-all hover:scale-110"
                aria-label="Previous slide"
                type="button"
              >
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("NEXT BUTTON CLICKED!");
                  nextHeroSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-20 transition-all hover:scale-110"
                aria-label="Next slide"
                type="button"
              >
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/60 hover:bg-white/80"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-16">
        <h2 id="services-title" className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Services
        </h2>

        <div id="services-grid" className="grid md:grid-cols-3 gap-8">
          {/* Weddings */}
          <div id="service-weddings" className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#FFE8E0] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Weddings</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Setiap detik cinta pantas diabadikan. PhotoChrome menghadirkan nuansa romantis dengan hasil foto yang timeless dan penuh keanggunan.</p>
          </div>

          {/* Corporate Events */}
          <div id="service-corporate" className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#FFE8E0] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Events</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Acara kantor nggak harus kaku — tunjukin sisi fun tim kamu lewat foto-foto keren yang bisa langsung di-share!</p>
          </div>

          {/* Birthday Parties */}
          <div id="service-birthday" className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#FFE8E0] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Birthday Parties</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Rayakan hari spesial dengan suasana mewah dan foto berkualitas tinggi yang menjadi kenangan istimewa seumur hidup.</p>
          </div>
        </div>
      </section>

      {/* Pricelist Section */}
      <section id="pricelist" className="container mx-auto px-6 py-16">
        <div className="bg-[#E8D5C4] rounded-2xl shadow-xl overflow-hidden">
          {/* Title at Top Center */}
          <div className="pt-8 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#B8563A] text-center">
              SELFIE PHOTOBOOTH 2R
              <br />
              SPECIAL PRICE!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Pricelist Carousel - HIDDEN */}
            <div className="relative flex items-center justify-center p-8">
              <div
                className="relative overflow-hidden rounded-lg shadow-lg"
                style={{
                  width: `${VIDEO_CONFIG.pricelist.width}px`,
                  height: `${VIDEO_CONFIG.pricelist.height}px`,
                }}
              >
                {/* Carousel Slides */}
                {pricelistMedia.map((item, index) => (
                  <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === pricelistSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    {item.type === "video" ? (
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image src={item.src} alt={`Pricelist Slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
                    )}
                  </div>
                ))}

                {/* Navigation Buttons */}
                <button onClick={prevPricelistSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg z-20 transition-all hover:scale-110" aria-label="Previous slide">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button onClick={nextPricelistSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg z-20 transition-all hover:scale-110" aria-label="Next slide">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {pricelistMedia.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPricelistSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === pricelistSlide ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Pricing */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              {/* Price Table */}
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="font-bold text-gray-900 text-center text-sm sm:text-base">PACKAGE</div>
                  <div className="font-bold text-gray-900 text-center text-sm sm:text-base">PRICE</div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-gray-700">Unlimited 2 hours</div>
                    <div className="text-gray-900 font-semibold text-center">1.8 mio</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-gray-700">Unlimited 3 hours</div>
                    <div className="text-gray-900 font-semibold text-center">2.0 mio</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-gray-700">Unlimited 4 hours</div>
                    <div className="text-gray-900 font-semibold text-center">3.0 mio</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="text-gray-700">Unlimited 5 hours</div>
                    <div className="text-gray-900 font-semibold text-center">4.0 mio</div>
                  </div>
                </div>
              </div>

              {/* Include Package */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">INCLUDE PACKAGE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Mesin cetak DNP (High Speed)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Kualitas cetak foto yang tahan bertahun-tahun</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Lighting studio</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Operator</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Monitor touch screen 24'</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Template custom</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Soft copy google drive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Fun properties</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Free gift boomerang</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Free QR code google drive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Free frame</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Free transport Jakarta & Bekasi</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FF7A59] mt-1 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm text-gray-700">Free backdrop Maroon/Cream/Black</span>
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="text-center">
                <a
                  href="https://wa.me/6285285962272?text=Halo%20PhotochroMe%2C%20saya%20ingin%20booking%20photobooth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF7A59] hover:bg-[#ff6544] text-white px-10 py-3 rounded-md font-medium transition shadow-md hover:shadow-lg"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#E8D5C4] mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Left Section - Logo, Description & Photo Grid */}
              <div id="footer-brand" className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gray-900">PhotochroMe</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">Capture the best moments with elegance and style.</p>

                {/* Video Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="rounded-lg overflow-hidden bg-[#E8D5C4] h-[190px]">
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src="/testimoni_photochrome.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-[#E8D5C4] h-[190px]">
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src="/video2.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-[#E8D5C4] h-[190px]">
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src="/video3.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* CTA Text */}
                <p className="text-gray-800 font-medium text-sm mb-4">Ready to capture your best moments? Book your session now!</p>
              </div>

              {/* Quick Links */}
              <div id="footer-links">
                <h3 className="text-gray-900 font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-600 hover:text-gray-900 text-sm transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 text-sm transition">
                      Packages
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 text-sm transition">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6285285962272?text=Halo%20PhotochroMe%2C%20saya%20ingin%20booking%20photobooth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm transition">
                      Book Now
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info & Social */}
              <div id="footer-contact">
                <h3 className="text-gray-900 font-bold mb-4">Contact Info</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">Cikarang, Bekasi</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-600">085285962272</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">photocromee@gmail.com</span>
                  </li>
                </ul>

                {/* Connect With Us */}
                <h3 className="text-gray-900 font-bold mb-3">Connect With Us</h3>
                <div className="flex gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6285285962272?text=Halo%20PhotochroMe%2C%20saya%20ingin%20booking%20photobooth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/photochrome/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/@photochrome.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-8 text-right">
              <a
                href="https://wa.me/6285285962272?text=Halo%20PhotochroMe%2C%20saya%20ingin%20booking%20photobooth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF7A59] hover:bg-[#ff6544] text-white px-8 py-3 rounded-md font-medium transition shadow-md hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
