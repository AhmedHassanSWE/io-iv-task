import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const services = [
    { id: 'legalConsultation', gridColumn: 1 },
    { id: 'defense', gridColumn: 2 },
    { id: 'companiesInstitutions', gridColumn: 3 },
    { id: 'foreignCompanies', gridColumn: 4 },
    { id: 'foreignInvestment', gridColumn: 1 },
    { id: 'banksFinancial', gridColumn: 2 },
    { id: 'arbitration', gridColumn: 3 },
    { id: 'commercialAgencies', gridColumn: 4 },
    { id: 'contracts', gridColumn: 1 },
    { id: 'corporateGovernance', gridColumn: 2 },
    { id: 'intellectualProperty', gridColumn: 3 },
    { id: 'vision2030', gridColumn: 4 },
    { id: 'notarization', gridColumn: 1 },
    { id: 'companiesLiquidation', gridColumn: 2 },
    { id: 'corporateRestructuring', gridColumn: 3 },
    { id: 'estates', gridColumn: 4 },
    { id: 'insurance', gridColumn: 1 },
    { id: 'internalRegulations', gridColumn: 2 }
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-white hover:text-white/80"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{t('nav.services')}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl py-12 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ marginLeft: 'calc(-50vw + 50%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="text-[#4b2f28] hover:text-[#6b3f32] text-base transition-colors"
                >
                  {t(`services.${service.id}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;