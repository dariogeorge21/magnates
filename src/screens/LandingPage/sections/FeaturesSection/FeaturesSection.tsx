import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 bg-[#0f1377]">
      <div className="container flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <div className="flex flex-col max-w-lg">
          <span className="font-semibold text-[#5975ff] text-2xl mb-4">
            Start Now
          </span>

          <h2 className="font-bold text-white text-5xl leading-[68px] mb-8">
            Learn from
            <br />
            the best
          </h2>

          <p className="font-medium text-[#b8c5d5] text-sm leading-7 mb-10">
            All the classes are led by industry experts with over 15 years of
            real-world experience- so you learn what really matters.
            <br />
            <br />
            Learn from Expert Commerce Lecturers &amp; Gain Real-World Exposure
            Interact with CEOs, Chartered Accountants and Industry Leaders for
            Practical Knowledge &amp; Experience.
          </p>

          <Button className="w-[170px] h-[39px] bg-[#ffc350] hover:bg-[#ffc350]/90 text-[#0f1377] font-semibold rounded">
            Contact Us
          </Button>
        </div>

        <div className="mt-10 lg:mt-0">
          <img
            className="w-full max-w-[557px] h-auto"
            alt="Industry expert teaching students"
            src="https://c.animaapp.com/mc28gt7czECAIi/img/group-115.png"
          />
        </div>
      </div>
    </section>
  );
};
