"use client";

import HeroSection from "@/components/layout/HeroSection";
import OurTeams from "@/components/sections/OurTeams";
import TestomonialsSection from "@/components/sections/TestomonialsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Team Section */}
      <OurTeams />

      {/* Testimonials Section */}
      <TestomonialsSection />
    </div>
  );
}
