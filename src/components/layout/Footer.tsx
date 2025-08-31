import { useTranslations, useLocale } from "next-intl";
import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <footer className="bg-[#4B2615] py-8 sm:py-12 px-4 sm:px-8">
      <div className={`max-w-6xl mx-auto ${isRTL ? "text-right" : "text-left"}`}>
        {/* Top Section */}
        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 mb-8 ${
            isRTL ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Frame 2 Label */}
          <div className="text-center md:text-left">
            <p className="text-white text-sm"></p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 order-1 md:order-2 ${
              isRTL ? "sm:flex-row-reverse sm:space-x-reverse" : ""
            }`}
          >
            {/* Email + Subscribe with integrated button */}
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className={`px-4 py-2 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300 w-full sm:w-80 ${
                  isRTL ? "pr-4 pl-24 text-right" : "pr-24"
                }`}
              />
              <button
                className={`absolute top-0 h-full px-4 bg-[#4B2615] text-white rounded-lg hover:bg-[#3a1f11] transition-colors font-medium border-2 border-white ${
                  isRTL ? "left-0 rounded-r-none rounded-l-lg" : "right-0"
                }`}
              >
                {t("footer.subscribe")}
              </button>
            </div>

            {/* Contacts label and social icons */}
            <div
              className={`flex items-center justify-between sm:justify-start w-full sm:w-auto ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <span
                className={`text-white font-semibold ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                {t("footer.contacts")}
              </span>
              <div className={`flex space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                <button className="w-8 h-8 text-white hover:text-gray-300 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 text-white hover:text-gray-300 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 text-white hover:text-gray-300 transition-colors">
                  <FaGoogle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-400 mb-8"></div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Left Side - Navigation Links */}
          <div
            className={`flex flex-wrap justify-center gap-4 sm:gap-6 ${
              isRTL ? "sm:justify-end flex-row-reverse" : "sm:justify-start"
            }`}
          >
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              {t("footer.about")}
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              {t("footer.strategy")}
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              {t("footer.advantages")}
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              {t("footer.responsibility")}
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              {t("footer.services")}
            </a>
          </div>

          {/* Right Side - Copyright */}
          <div
            className={`text-white text-sm text-center ${
              isRTL ? "sm:text-left" : "sm:text-right"
            }`}
          >
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
