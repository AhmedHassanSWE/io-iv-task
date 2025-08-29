"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiSearch, FiChevronLeft, FiChevronRight, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";
import ServicesDropdown from "./ServicesDropdown";
import HeroSection from "@/components/layout/HeroSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <HeroSection />

      {/* Our Team Section */}
      <section className="bg-gray-100 py-12 sm:py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2615] mb-4 sm:mb-6">
              {t("team.title")}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              {t("team.description")}
            </p>
          </div>

          {/* Team Members Carousel */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile */}
            <button className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors z-10">
              <FiChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors z-10">
              <FiChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            {/* Team Members Grid/Scroll */}
            <div className="flex overflow-x-auto sm:overflow-hidden sm:justify-center space-x-4 sm:space-x-8 pb-6 sm:pb-0 scrollbar-hide">
              {/* Team Member Card - Repeated 3 times */}
              {[1, 2, 3].map((member, index) => (
                <div key={index} className="flex-shrink-0 text-center w-[280px] sm:w-[360px]">
                  <div className="relative mb-4">
                    <div className="w-full h-[200px] sm:h-[260px] bg-[#6b3f32] rounded-lg shadow-lg overflow-hidden mx-auto">
                      <img
                        src="/portrait.png"
                        alt="Team member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-[22px] text-[#4B2615] mb-2">{t("team.memberName")}</h3>
                  <p className="text-[#15143966] text-sm tracking-[2px] mb-4">
                    {t("team.memberPosition")}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                      <FaWhatsapp className="w-5 h-5" />
                    </button>
                    <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                      <FiPhone className="w-5 h-5" />
                    </button>
                    <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                      <FiMail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#4B2615] py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4 sm:mb-6">
              {t("testimonials.title")}
            </h2>
            <p className="text-white text-base sm:text-[18px] max-w-4xl leading-relaxed">
              {t("testimonials.description")}
            </p>
          </div>

          {/* Testimonial Block */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-12 space-y-8 sm:space-y-0">
              {/* Client Image */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <div className="w-full sm:w-[360px] h-[240px] sm:h-[300px] rounded-md overflow-hidden shadow-2xl bg-[#6b3f32]">
                  <img
                    src="/portrait.png"
                    alt="Client portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <blockquote className="text-white text-xl sm:text-[24px] leading-[32px] sm:leading-[40px] mb-6 sm:mb-8">
                  &ldquo;{t("testimonials.quote")}&rdquo;
                </blockquote>

                <div className="text-white">
                  <h4 className="text-xl sm:text-[24px] font-bold mb-2">{t("testimonials.clientName")}</h4>
                  <p>{t("testimonials.clientPosition")}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center sm:justify-end space-x-4 mt-8 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10" />
      <Footer />
    </div>
  );
}
