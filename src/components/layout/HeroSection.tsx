import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { FiChevronLeft, FiSearch, FiMenu, FiX } from "react-icons/fi";
import ServicesDropdown from "@/app/[locale]/ServicesDropdown";
import Link from "next/link";

function HeroSection() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with brown overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#4b2f28]/70" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-6 text-white">
        {/* Mobile Menu Button */}
        <div className="md:flex-1">
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation - Now Centered */}
        <ul className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <li>
            <Link href="/" className="hover:text-white/80">
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white/80">
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <ServicesDropdown />
          </li>
          <li>
            <Link href="#" className="hover:text-white/80">
              {t("nav.blog")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white/80">
              {t("nav.team")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white/80">
              {t("nav.contact")}
            </Link>
          </li>
        </ul>

        {/* Right Actions - With flex-1 to balance the layout */}
        <div className="flex items-center space-x-5 md:flex-1 justify-end">
          <FiSearch className="w-5 h-5 text-white cursor-pointer" />
          <button className="hidden md:block border border-white/70 text-white px-4 py-2 rounded hover:bg-white hover:text-[#4b2f28] transition-colors">
            {t("nav.bookAppointment")}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#4b2f28] shadow-lg md:hidden">
            <div className="px-4 py-6">
              <ul className="space-y-4">
                <li><Link href="/" className="block text-white hover:text-white/80">{t("nav.home")}</Link></li>
                <li><Link href="#" className="block text-white hover:text-white/80">{t("nav.about")}</Link></li>
                <li><Link href="#" className="block text-white hover:text-white/80">{t("nav.services")}</Link></li>
                <li><Link href="#" className="block text-white hover:text-white/80">{t("nav.blog")}</Link></li>
                <li><Link href="#" className="block text-white hover:text-white/80">{t("nav.team")}</Link></li>
                <li><Link href="#" className="block text-white hover:text-white/80">{t("nav.contact")}</Link></li>
              </ul>
              <button className="w-full mt-6 border border-white/70 text-white px-4 py-2 rounded hover:bg-white hover:text-[#4b2f28] transition-colors">
                {t("nav.bookAppointment")}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 md:mt-0 pb-16 sm:pb-32 md:pt-28 md:pb-40">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left side controls and text */}
          <div className="flex-1 w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left controls - Hidden on mobile */}
              <div className="hidden md:flex flex-col items-center me-8 mt-6">
                <button className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-[#4b2f28] transition-colors">
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <div className="mt-6 flex flex-col space-y-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={`block w-2 h-2 rounded-full border border-white ${
                        i === 1 ? "bg-white" : "bg-transparent"
                      }`}
                    />
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
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative">
              <div className="absolute -inset-2 rounded-md" />
              <div className="relative w-[360px] h-[360px] bg-[#6b3f32] rounded-md overflow-hidden flex items-center justify-center">
                {/* Portrait image */}
                <img src="/portrait.png" alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
