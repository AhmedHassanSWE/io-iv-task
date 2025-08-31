import { useTranslations, useLocale } from "next-intl";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function OurTeams() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  const teamMembers = [
    {
      id: 1,
      name: t("team.memberName"),
      position: t("team.memberPosition"),
      image: "/portrait.png",
    },
    {
      id: 2,
      name: t("team.memberName"),
      position: t("team.memberPosition"),
      image: "/portrait.png",
    },
    {
      id: 3,
      name: t("team.memberName"),
      position: t("team.memberPosition"),
      image: "/portrait.png",
    },
    {
      id: 4,
      name: t("team.memberName"),
      position: t("team.memberPosition"),
      image: "/portrait.png",
    },
    {
      id: 5,
      name: t("team.memberName"),
      position: t("team.memberPosition"),
      image: "/portrait.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-8" id="ourTeam" style={{ direction: "rtl" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4B2615] mb-6">{t("team.title")}</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("team.description")}
          </p>
        </div>

        {/* Team Members Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-full max-w-[360px] h-[260px] bg-[#6b3f32] rounded-lg shadow-lg overflow-hidden mx-auto">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          height={360}
                          width={360}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl text-[#4B2615] font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{member.position}</p>

                    {/* Contact Icons */}
                    <div className="flex justify-center space-x-4">
                      <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                        <FaWhatsapp className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                        <FiPhone className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 text-gray-600 hover:text-amber-600 transition-colors">
                        <FiMail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <CarouselPrevious
              className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10 border-0 bg-transparent hover:bg-transparent`}
            >
              <FaChevronLeft className={`w-[22px] h-[22px] text-[#4B2615]`} />
            </CarouselPrevious>

            <CarouselNext
              className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10 border-0 bg-transparent hover:bg-transparent ${
                isRTL ? "left-0 -translate-x-12" : "right-0 translate-x-12"
              }`}
            >
              <FaChevronRight className={`w-[22px] h-[22px] text-[#4B2615]`} />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default OurTeams;
