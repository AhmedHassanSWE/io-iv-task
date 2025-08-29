"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ServicesDropdown = () => {
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
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center space-x-1 text-white hover:text-white/80"
        >
          <span>{t('nav.services')}</span>
          <svg
            className="w-4 h-4 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-screen p-0 border-none" 
        style={{ 
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          transform: 'translateX(0)',
          background: 'rgba(75,38,21,1)',
        }}
        sideOffset={0}
      >
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.id}`}
                  className="text-white hover:text-white/80 text-base transition-colors cursor-pointer"
                >
                  {t(`services.${service.id}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ServicesDropdown;