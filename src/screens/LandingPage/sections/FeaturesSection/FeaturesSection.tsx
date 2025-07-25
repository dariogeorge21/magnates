
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-24 bg-[#0f1377]">
      <div className="container flex flex-col lg:flex-row items-center justify-between max-w-full lg:max-w-7xl mx-auto px-4 gap-10 lg:gap-0">
        <div className="flex flex-col max-w-full lg:max-w-lg mb-8 lg:mb-0">
          <span className="font-semibold text-[#5975ff] text-lg md:text-2xl mb-2 md:mb-4">
            Start Now
          </span>

          <h2 className="font-bold text-white text-2xl md:text-5xl leading-snug md:leading-[68px] mb-4 md:mb-8">
            Learn from the best
            <br className="hidden md:block" />
            
          </h2>

          <p className="font-medium text-[#b8c5d5] text-sm md:text-base leading-6 md:leading-7 mb-6 md:mb-10">
            All the classes are led by industry experts with over 15 years of
            real-world experience- so you learn what really matters.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            Learn from Expert Commerce Lecturers &amp; Gain Real-World Exposure
            Interact with CEOs, Chartered Accountants and Industry Leaders for
            Practical Knowledge &amp; Experience.
          </p>

          <Button className="w-full sm:w-[170px] h-[39px] bg-[#ffc350] hover:bg-[#ffc350]/90 text-[#0f1377] font-semibold rounded text-base focus:outline-none focus:ring-2 focus:ring-[#151bb1] focus:ring-offset-2">
            Contact Us
          </Button>
        </div>

        <div className="w-full max-w-full lg:max-w-[557px] mt-8 lg:mt-0 flex justify-center features-image">
          <img
            className="w-full h-auto object-contain"
            alt="Industry expert teaching students image"
            src="https://c.animaapp.com/mc28gt7czECAIi/img/group-115.png"
          />
        </div>
      </div>

      {/* Hide image on mobile devices */}
      <style>{`
        @media (max-width: 768px) {
          .features-image {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
