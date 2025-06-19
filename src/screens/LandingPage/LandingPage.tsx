import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CoursesOverviewSection } from "./sections/CoursesOverviewSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { OffersSection } from "./sections/OffersSection/OffersSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FormSection } from "./sections/FormSection";
import { HeaderSection } from "./sections/HeaderSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:511"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* OverlapGroupWrapperSubsect - Navigation */}
       

       


        {/* GroupSubsect - About Us Section */}
        <div className="w-full relative">
          <HeaderSection/>
          {/* OverlapWrapperSubsect - Courses Overview Section */}
        <CoursesOverviewSection />
          <AboutUsSection />
          

          {/* CTA Button */}
          <div className="relative mx-auto container">
            <Button className="bg-[#151bb1] text-white font-semibold rounded px-4 py-2 my-8">
              Enroll to become a Magnate
            </Button>
          </div>
          <OffersSection />

          
        </div>

        {/* FeatureWrapperSubsect - Testimonials Section */}
        <TestimonialsSection />

        

        {/* FrameSubsect - Features Section */}
        <FeaturesSection />
        <FormSection/>

        {/* CtaSubsect - Call to Action Section */}
        <CallToActionSection />

        {/* FooterSubsect - Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
