"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = useLocale();
  const router = useRouter();

  const languages = [
    { code: 'en', label: 'En' },
    { code: 'ar', label: 'ع' }
  ];

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[^\/]+/, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rtl:space-x-reverse text-white hover:text-white/80"
      >
        <span className="text-sm">
          {languages.find(lang => lang.code === currentLocale)?.label}
        </span>
        {isOpen ? (
          <FiChevronDown className="w-3 h-3" />
        ) : (
          <FiChevronUp className="w-3 h-3" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full end-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`block w-full px-4 py-2 text-sm text-start hover:bg-gray-100 ${
                  currentLocale === language.code
                    ? 'text-amber-800 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}