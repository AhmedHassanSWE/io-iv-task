"use client";

import HeroSection from "@/components/layout/HeroSection";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

function Page() {
  const locale = useLocale();
  const isRTL = locale === "ar";
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center text-[rgba(75,38,21,0.7)] hover:opacity-80 mb-8 text-sm"
        >
          <ArrowLeft className={`mr-2 h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          Back
        </Link>

        {/* Main Content */}
        <div className="max-w-4xl">
          <h1 className="text-[42px] font-semibold text-[rgba(75,38,21,1)] mb-8">
            Legal Consultation Services
          </h1>

          <p className="text-[16px] text-[rgba(75,38,21,1)] leading-[1.8] mb-12">
            Law Firm is one of the leading legal offices that offer exceptional advisory services
            for both individuals and companies. Our mission is to provide comprehensive and
            specialized legal support to meet our clients needs and offer the best legal solutions
            in various cases and legal fields. We provide our legal consultations services as
            follow:
          </p>

          {/* General Legal Consultations */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-[rgba(75,38,21,1)] mt-2" />
              <h2 className="text-[18px] font-bold text-[rgba(75,38,21,1)]">
                General Legal Consultations
              </h2>
            </div>
            <p className="text-[16px] text-[rgba(75,38,21,1)] leading-[1.8] ml-5">
              At Law Firm, we provide comprehensive legal consultations covering all legal aspects
              that our clients may encounter in their daily lives or business activities. Our goal
              is to offer accurate legal advice based on a deep understanding of local and
              international laws.
            </p>
          </div>

          {/* Corporate Legal Consultations */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-[rgba(75,38,21,1)] mt-2" />
              <h2 className="text-[18px] font-bold text-[rgba(75,38,21,1)]">
                Corporate Legal Consultations
              </h2>
            </div>
            <div className="ml-5 space-y-4">
              <p className="text-[16px] text-[rgba(75,38,21,1)] leading-[1.8]">
                We at the Law Firm understand the importance of legal consultations for companies in
                building and enhancing their businesses.
              </p>
              <p className="text-[16px] text-[rgba(75,38,21,1)]">Our advisory services about:</p>
              <ul className="space-y-2 text-[16px] text-[rgba(75,38,21,1)]">
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Establishing and registering companies.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  All kinds of contracts and agreements.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Commercial disputes.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Compliance with local and international laws and regulations.
                </li>
              </ul>
            </div>
          </div>

          {/* Individual Legal Consultations */}
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-[rgba(75,38,21,1)] mt-2" />
              <h2 className="text-[18px] font-bold text-[rgba(75,38,21,1)]">
                Individual Legal Consultations
              </h2>
            </div>
            <div className="ml-5 space-y-4">
              <p className="text-[16px] text-[rgba(75,38,21,1)] leading-[1.8]">
                Law Firm offers customized advisory services for individuals, including:
              </p>
              <ul className="space-y-2 text-[16px] text-[rgba(75,38,21,1)]">
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Family issues such as divorce, alimony, and custody.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Real estate matters like buying, selling, and renting properties.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Employment issues such as hiring and wrongful termination.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[rgba(75,38,21,1)]">-</span>
                  Criminal cases and defending personal rights.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[16px] text-[rgba(75,38,21,1)] leading-[1.8] mb-12">
            At Law Firm, we aim to provide the best legal services to ensure your rights and offer
            effective legal solutions. Contact us today to receive professional and comprehensive
            legal consultation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
