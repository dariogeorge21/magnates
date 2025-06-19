import { BookOpenIcon, CheckCircleIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

// Course program highlights data
const programHighlights = [
  "Accounting Basics",
  "Introduction to IT",
  "Ai integrated advanced Excel",
  "PowerPoint",
  "MS Word",
  "data analytics (Power BI)",
  "SAP FICO",
  "Tally Prime (v6.0)",
  "QuickBooks",
  "Corporate Tax",
];

// Statutory modules data
const statutoryModules = [
  "GST & GST Filing",
  "ITR Filing",
  "E-PAN",
  "E-Way Bill",
  "EPFO, ESIC, LIN Register",
  "TDS, TCS",
  "GCC VAT",
];

// Certificate partners data
const certificates = [
  {
    name: "Fullpurple",
    src: "https://c.animaapp.com/mc28gt7czECAIi/img/fullpurple-3.png",
    width: "123.13px",
    height: "53px",
  },
  {
    name: "University of Cambridge",
    src: "https://c.animaapp.com/mc28gt7czECAIi/img/university-of-cambridge-logo-wine-3.png",
    width: "174px",
    height: "57px",
  },
  {
    name: "Bsfi",
    src: "https://c.animaapp.com/mc28gt7czECAIi/img/bsfi-3-1.png",
    width: "54.11px",
    height: "63px",
  },
  {
    name: "Tally prime",
    src: "https://c.animaapp.com/mc28gt7czECAIi/img/tally-prime-3.png",
    width: "128.07px",
    height: "56px",
  },
  { name: "Office Automation", type: "text" },
  { name: "Iaap Hours Sheet", type: "text" },
];

// Benefits data
const benefits = [
  "Employability Skills",
  "Interview Training",
  "100% Placement Opportunities",
];

export const OffersSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="font-semibold text-2xl text-[#151bb1] mb-2">
            Courses Offered
          </h3>
          <h2 className="font-bold text-5xl text-[#0b1131]">
            DISCOVER THE MAGNATE courses
          </h2>
        </div>

        {/* Duration Toggle */}
        <div className="flex justify-center mb-8">
          <ToggleGroup
            type="single"
            defaultValue="6months"
            className="p-2 bg-[#ffffff14] rounded-[50px] border-[1.5px] border-solid border-[#edeaff]"
          >
            <ToggleGroupItem
              value="6months"
              className="rounded-[40px] px-5 py-2.5 flex items-center gap-2.5 bg-[#edeaff] data-[state=on]:bg-[#edeaff]"
            >
              <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#5b3dfc] rounded-full">
                <BookOpenIcon className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="font-medium text-[15px] text-[#27149f]">
                6 Months
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="1year"
              className="rounded-[40px] px-5 py-2.5 flex items-center gap-2.5 data-[state=on]:bg-[#edeaff]"
            >
              <div className="w-[34px] h-[34px] flex items-center justify-center">
                <BookOpenIcon className="w-[18px] h-[18px] text-[#0b1131]" />
              </div>
              <span className="font-medium text-[15px] text-[#0b1131]">
                1 Year
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Course Card */}
        <Card className="w-full rounded-lg shadow-[0px_10px_100px_10px_#0000001a] relative overflow-hidden">
          <CardContent className="p-0">
            {/* Background Effect */}
            <div className="relative">
              <img
                className="w-full h-auto"
                alt="Background effect"
                src="https://c.animaapp.com/mc28gt7czECAIi/img/bg-effect-1.png"
              />

              <div className="absolute inset-0">
                {/* Course Header */}
                <div className="flex px-12 pt-10 pb-6 relative">
                  <div className="w-[282px] font-medium text-sm text-[#0b1131]">
                    Ideal For: Beginners Looking To Launch A Career In Corporate
                    Accounting
                  </div>

                  <Separator orientation="vertical" className="mx-6 h-[70px]" />

                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[37.3px] leading-[38px] text-[#151bb1]">
                      IDCAF
                    </h2>
                    <br />
                    <h3 className="font-semibold text-xl text-[#151bb1] mt-[-18px]">
                      International Diploma In Computerised Accounting And
                      Finance
                    </h3>
                  </div>

                  <div className="absolute right-12 top-0 w-[157px] h-[66px] bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-1.png)] bg-cover">
                    <div className="relative w-[122px] h-[30px] top-px left-[22px]">
                      <div className="absolute w-[27px] top-0 left-0 font-bold text-[44px] text-[#151bb1] leading-[68px]">
                        6
                      </div>
                      <div className="absolute w-[83px] top-[19px] left-[35px] font-medium text-base text-[#151bb1] leading-7">
                        Month
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mx-12 bg-[#ffc350]" />

                {/* Course Content */}
                <div className="grid grid-cols-2 gap-8 px-12 py-6">
                  {/* Program Highlights */}
                  <div className="space-y-3.5">
                    <h4 className="font-semibold text-sm text-[#151bb1] leading-[18px]">
                      Program Highlights
                    </h4>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        {programHighlights.slice(0, 5).map((item, index) => (
                          <div
                            key={`highlight-1-${index}`}
                            className="flex items-center gap-0.5"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-0.5">
                        {programHighlights.slice(5).map((item, index) => (
                          <div
                            key={`highlight-2-${index}`}
                            className="flex items-center gap-0.5"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Statutory Modules */}
                  <div className="space-y-3.5">
                    <h4 className="font-semibold text-sm text-[#151bb1] leading-[18px]">
                      Statutory Modules
                    </h4>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-0.5">
                        {statutoryModules.slice(0, 5).map((item, index) => (
                          <div
                            key={`statutory-1-${index}`}
                            className="flex items-center gap-0.5"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-0.5">
                        {statutoryModules.slice(5).map((item, index) => (
                          <div
                            key={`statutory-2-${index}`}
                            className="flex items-center gap-0.5"
                          >
                            <ChevronRightIcon className="w-6 h-6" />
                            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>


                {/* Certificates */}
                <div className="px-12 py-6">
                  <h4 className="font-semibold text-sm text-[#151bb1] text-center mb-6">
                    Certificates
                  </h4>

                  <div className="flex items-center gap-[66px] overflow-x-auto">
                    {certificates.map((cert, index) =>
                      cert.type === "text" ? (
                        <span
                          key={`cert-${index}`}
                          className="text-shadow-[0.12px_0.23px_0.23px_#00000061] font-medium text-[#3f3f3f] text-[14.8px] leading-[18.5px] whitespace-nowrap"
                        >
                          {cert.name}
                        </span>
                      ) : (
                        <img
                          key={`cert-${index}`}
                          className="object-contain"
                          alt={cert.name}
                          src={cert.src}
                          style={{ width: cert.width, height: cert.height }}
                        />
                      ),
                    )}
                  </div>
                </div>
                <Separator className="mx-12 bg-[#ffc350]" />


                {/* Benefits Footer */}
                <div className="mx-12 mt-4 mb-12">
                  <div className="bg-[#151bb1] rounded-lg py-3 px-6">
                    <div className="flex items-center justify-between">
                      {benefits.map((benefit, index) => (
                        <div
                          key={`benefit-${index}`}
                          className="inline-flex items-center gap-2"
                        >
                          <CheckCircleIcon className="w-[22px] h-[22px] text-white" />
                          <span className="text-shadow-[0.11px_0.22px_0.22px_#00000061] font-medium text-white text-[14.2px] leading-[17.7px]">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
