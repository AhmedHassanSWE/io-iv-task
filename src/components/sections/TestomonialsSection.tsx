import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function TestimonialsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: t("testimonials.clientName"),
      position: t("testimonials.clientPosition"),
      quote: t("testimonials.quote"),
      image: "/portrait.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Marketing Director",
      quote:
        "This service completely transformed our business. The results were beyond our expectations and the team was professional throughout.",
      image: "/portrait.png",
    },
    {
      id: 3,
      name: "Robert Johnson",
      position: "Product Manager",
      quote:
        "I've tried many similar services, but none compare to the quality and attention to detail provided here. Highly recommended!",
      image: "/portrait.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-[#4B2615] py-20 px-8 mb-10" id="clients">
      <div className={`max-w-6xl mx-auto ${isRTL ? "text-right" : "text-left"}`}>
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[40px] font-bold text-white mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-white text-[18px] max-w-4xl leading-relaxed">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              isRTL ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Client Image */}
            <div className="flex-shrink-0">
              <div className="w-[280px] h-[240px] md:w-[360px] md:h-[300px] bg-[#643F2E]">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  width={360}
                  height={300}
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              <blockquote
                className={`text-white text-[20px] md:text-[24px] leading-[32px] md:leading-[40px] mb-8 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="text-white">
                <h4 className="text-[20px] md:text-[24px] font-bold mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p>{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            className={`absolute -bottom-16 flex gap-4 ${
              isRTL ? "left-0 flex-row-reverse" : "right-0"
            }`}
          >
            {/* For RTL, we swap the meaning of the arrows so they stay logical */}
            <Button
              onClick={isRTL ? nextTestimonial : prevTestimonial}
              className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors p-0"
            >
              {isRTL ? (
                <FiChevronRight className="w-6 h-6 text-white" />
              ) : (
                <FiChevronLeft className="w-6 h-6 text-white" />
              )}
            </Button>

            <Button
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors p-0"
            >
              {isRTL ? (
                <FiChevronLeft className="w-6 h-6 text-amber-800" />
              ) : (
                <FiChevronRight className="w-6 h-6 text-amber-800" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
