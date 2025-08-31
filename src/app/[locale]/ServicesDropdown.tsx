"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ServicesDropdownProps {
  onOpenChange?: (open: boolean) => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ onOpenChange }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const services = [
    { id: 'legalConsultation', title: 'Legal Consultation Services' },
    { id: 'defense', title: 'Defense in All Cases' },
    { id: 'companiesInstitutions', title: 'Services for Companies and Institutions' },
    { id: 'foreignCompanies', title: 'Establishing National and Foreign Companies' },
    { id: 'foreignInvestment', title: 'Foreign Investment Services' },
    { id: 'banksFinancial', title: 'Banks and Financial Institutions' },
    { id: 'arbitration', title: 'Arbitration' },
    { id: 'commercialAgencies', title: 'Commercial Agencies' },
    { id: 'contracts', title: 'Contracts' },
    { id: 'corporateGovernance', title: 'Corporate Governance Services' },
    { id: 'intellectualProperty', title: 'Intellectual Property' },
    { id: 'vision2030', title: 'Supporting Vision 2030' },
    { id: 'notarization', title: 'Notarization' },
    { id: 'companiesLiquidation', title: 'Companies Liquidation' },
    { id: 'corporateRestructuring', title: 'Corporate Restructuring and Reorganization' },
    { id: 'estates', title: 'Estates' },
    { id: 'insurance', title: 'Insurance' },
    { id: 'internalRegulations', title: 'Internal Regulations for Companies' }
  ];

  return (
    <Popover onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center space-x-1 text-white hover:text-white/80 text-sm"
        >
          <span>{t('nav.services')}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[calc(100vw-20px)] p-0 border-none mx-[10px] mt-8" 
        style={{ 
          background: 'rgba(75,38,21,1)',
          left: '10px',
          right: '10px',
          width: 'calc(100vw - 20px)',
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
                  {service.title}
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