import { useTranslations } from "next-intl";
import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-[#4B2615] py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 mb-8">
          <p className="text-amber-300 text-sm order-2 md:order-1"></p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 order-1 md:order-2">
            {/* Email + Subscribe */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="px-4 py-2 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300 w-full sm:w-auto"
              />
              <button className="px-6 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-700 transition-colors w-full sm:w-auto">
                {t("footer.subscribe")}
              </button>
            </div>

            {/* Contacts label and social icons */}
            <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
              <span className="text-white font-semibold">{t("footer.contacts")}</span>
              <div className="flex space-x-4 ml-4">
                <button className="w-8 h-8 text-white hover:text-amber-200 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 text-white hover:text-amber-200 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 text-white hover:text-amber-200 transition-colors">
                  <FaGoogle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-400 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Left Side - Navigation Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              {t("footer.about")}
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              {t("footer.strategy")}
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              {t("footer.advantages")}
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              {t("footer.responsibility")}
            </a>
            <a href="#" className="text-white hover:text-amber-200 transition-colors">
              {t("footer.services")}
            </a>
          </div>

          {/* Right Side - Copyright */}
          <div className="text-white text-sm text-center sm:text-right">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
