import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CoursesOverviewSection } from "./sections/CoursesOverviewSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:511"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* OverlapGroupWrapperSubsect - Navigation */}
        <div className="w-full bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/header.png)] bg-cover bg-center">
          <nav className="container mx-auto py-[60px] flex justify-end">
            <div className="flex gap-5">
              <div className="relative">
                <div className="font-bold text-white text-sm text-center">
                  Home
                </div>
                <div className="absolute w-[27px] h-0.5 bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-[100px]" />
              </div>
              <div className="opacity-60 font-semibold text-white text-sm text-center">
                About Us
              </div>
            </div>
          </nav>
        </div>

        {/* OurFirmSubsect - Hero Section */}
        <div className="w-full bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/header.png)] bg-cover bg-center">
          <HeroSection />
        </div>


        {/* GroupSubsect - About Us Section */}
        <div className="w-full relative">
          {/* OverlapWrapperSubsect - Courses Overview Section */}
        <CoursesOverviewSection />
          <AboutUsSection />

          {/* CTA Button */}
          <div className="relative mx-auto container">
            <Button className="bg-[#151bb1] text-white font-semibold rounded px-4 py-2 my-8">
              Enroll to become a Magnate
            </Button>
          </div>

          {/* Background Image */}
          <img
            className="w-full"
            alt="Rectangle"
            src="https://c.animaapp.com/mc28gt7czECAIi/img/rectangle-14.svg"
          />
        </div>

        {/* FeatureWrapperSubsect - Testimonials Section */}
        <TestimonialsSection />

        

        {/* FrameSubsect - Features Section */}
        <FeaturesSection />
        form

        {/* CtaSubsect - Call to Action Section */}
        <CallToActionSection />

        {/* FooterSubsect - Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
