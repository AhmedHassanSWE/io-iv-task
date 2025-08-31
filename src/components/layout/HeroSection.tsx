import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { FiChevronLeft, FiMenu, FiX, FiSearch } from "react-icons/fi";
import ServicesDropdown from "@/app/[locale]/ServicesDropdown";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isRTL = locale === "ar";

  return (
    <div className={`min-h-screen relative overflow-hidden ${isRTL ? "rtl" : ""}`}>
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#4b2f28]/70" />

      {/* Navbar */}
      <nav
        className={`relative z-20 flex items-center justify-between w-full px-4 sm:px-6 py-6 text-white transition-all duration-300 ${
          isServicesOpen ? "bg-[rgba(75,38,21,1)]" : ""
        }`}
      >
        {/* Logo when dropdown is open */}
        {isServicesOpen && (
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="MOHAMMED BIN HINTY AL-OBAYY"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>
        )}

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center space-x-8 rtl:space-x-reverse absolute left-1/2 transform -translate-x-1/2 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <li>
            <Link href="#" className="hover:text-white/80 text-sm">
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <ServicesDropdown onOpenChange={setIsServicesOpen} />
          </li>
          <li>
            <Link href="#" className="hover:text-white/80 text-sm">
              {t("nav.team")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white/80 text-sm">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white/80 text-sm">
              {t("nav.contact")}
            </Link>
          </li>
        </ul>

        {/* Right/Left Actions */}
        <div
          className={`flex items-center space-x-4 rtl:space-x-reverse ${
            isRTL ? "order-first mr-auto" : "ml-auto"
          }`}
        >
          <LanguageSwitcher />
          <button className="hover:text-white/80 transition-colors" aria-label="Search">
            <FiSearch className="w-5 h-5" />
          </button>
          <button className="border border-white/70 text-white px-4 py-2 rounded hover:bg-white hover:text-[#4b2f28] transition-colors text-sm">
            {t("nav.bookAppointment")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 z-30"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full bg-[#4b2f28] z-50 overflow-y-auto overflow-x-hidden">
          {/* Close Button */}
          <button
            className={`absolute top-4 ${
              isRTL ? "left-4" : "right-4"
            } p-2 text-white rounded hover:bg-white/10`}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className={`px-4 py-10 ${isRTL ? "text-right" : ""}`}>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="block text-white hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block text-white hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>

            <button className="w-full mt-6 border border-white/70 text-white px-4 py-2 rounded hover:bg-white hover:text-[#4b2f28] transition-colors">
              {t("nav.bookAppointment")}
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 md:mt-0 pb-16 sm:pb-32 md:pt-28 md:pb-40">
        <div
          className={`flex flex-col md:flex-row items-center md:items-start ${
            isRTL ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left side controls and text */}
          <div className="flex-1 w-full md:w-auto">
            <div
              className={`flex flex-col md:flex-row items-center md:items-start ${
                isRTL ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left controls - Hidden on mobile */}
              <div
                className={`hidden md:flex flex-col items-center mt-6 ${isRTL ? "ms-8" : "me-8"}`}
              >
                <button className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-[#4b2f28] transition-colors">
                  <FiChevronLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                </button>
                <div className="mt-6 flex flex-col space-y-3">
                  {["#hero", "#ourTeam", "#clients", "#footer"].map((i, index) => (
                    <a href={i} key={i}>
                      <span
                        key={i}
                        className={`block w-2 h-2 rounded-full border border-white ${
                          index === 0 ? "bg-white" : "bg-transparent"
                        }`}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="max-w-2xl text-center md:text-left">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                  {t("hero.title")}
                </h1>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-4 md:px-0">
                  {t("hero.description")}
                </p>
                <button className="bg-white text-[#4b2f28] px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold shadow-sm hover:bg-white/90 transition">
                  {t("hero.readMore")}
                </button>
              </div>
            </div>
          </div>

          {/* Portrait - Hidden on mobile */}
          <div className={`hidden md:flex flex-1 ${isRTL ? "justify-start" : "justify-end"}`}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-md" />
              <div className="relative w-[360px] h-[360px] bg-[#6b3f32] rounded-md overflow-hidden flex items-center justify-center">
                {/* Portrait image */}
                <Image
                  src="/portrait.png"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  height={360}
                  width={360}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
