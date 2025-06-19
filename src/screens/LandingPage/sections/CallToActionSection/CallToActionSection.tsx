import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#111849] bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-7.png)] bg-cover bg-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8">
        <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-[#5975ff] tracking-normal">
          Connect With Us
        </h3>

        <p className="font-['Poppins',Helvetica] font-bold text-white text-5xl text-center tracking-normal leading-[68px] max-w-[1300px]">
          &quot;whether you are exploring your future or guiding your
          child&apos;s, this is where confidence begins&quot;
        </p>

        <Button className="mt-8 bg-[#3029d9] hover:bg-[#2620b0] text-white font-['Poppins',Helvetica] font-semibold px-6 py-2 rounded">
          Contact Us
        </Button>
      </div>
    </section>
  );
};
