import { BookOpenIcon, CheckCircleIcon, ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { useRef, useEffect, useState } from "react";

// TypeScript interfaces for type safety
interface CourseContent {
  idealFor: string;
  programHighlights: string[];
  statutoryModules: string[];
  certificates: string[];
  benefits: string[];
  duration: string;
  courseName: string;
  courseFullName: string;
}

interface CourseData {
  "6months": CourseContent;
  "1year": CourseContent;
}

// Comprehensive course data structure
const courseData: CourseData = {
  "6months": {
    idealFor: "Ideal For: Beginners Looking To Launch A Career In Corporate Accounting",
    programHighlights: [
      "Accounting Basics",
      "Introduction to IT",
      "AI integrated advanced Excel",
      "PowerPoint",
      "MS Word",
      "Data Analytics (Power BI)",
      "SAP FICO",
      "Tally Prime (v6.0)",
      "QuickBooks",
      "Corporate Tax",
    ],
    statutoryModules: [
      "GST & GST Filing",
      "ITR Filing",
      "E-PAN",
      "E-Way Bill",
      "EPFO, ESIC, LIN Register",
      "TDS, TCS",
      "GCC VAT",
    ],
    certificates: [
      "International Association Of Accounting Professionals (IAAP)",
      "GCC VAT",
      "IAAP Hours Sheet",
      "University of Cambridge",
      "Statutory (Central Govt.)",
      "Office Automation"
    ],
    benefits: [
      "Employability Skills",
      "Interview Training",
      "100% Placement Opportunities",
    ],
    duration: "6",
    courseName: "IDCAF",
    courseFullName: "International Diploma In Computerised Accounting And Finance"
  },
  "1year": {
    idealFor: "Ideal For: Career-focused individuals aiming for leadership roles in finance",
    programHighlights: [
      "Accounting Basics",
      "Introduction to IT",
      "AI Integrated Advanced Excel",
      "PowerPoint",
      "MS Word",
      "Data Analytics (Power BI)",
      "SAP FICO",
      "SAP MM",
      "Tally Prime (v6.0)",
      "QuickBooks",
      "Zoho Books",
      "Corporate Tax",
    ],
    statutoryModules: [
      "GST & GST Filing",
      "ITR Filing",
      "E-PAN",
      "E-Way Bill",
      "EPFO, ESIC, LIN Register",
      "TDS, TCS",
      "GCC VAT",
    ],
    certificates: [
      "International association of accounting professionals (IAAP)",
      "GCC VAT",
      "IAAP Hours Sheet",
      "University of Cambridge",
      "SAP MM",
      "Microsoft",
      "Tally",
      "National Skill Development Corporation (NSDC)",
      "QuickBooks",
      "Zoho Books",
      "IAAP Hours Sheet",
      "Office Automation",
      "Statutory (Central Govt.)"
    ],
    benefits: [
      "9 Months Training + 3-6 Months Internship At CA Firms / Companies",
      "Employability Skills",
      "Interview Training",
      "100% Placement Opportunities",
    ],
    duration: "1",
    courseName: "IDCAF",
    courseFullName: "International Diploma In Computerised Accounting And Finance"
  }
};

// Type for tab selection
type TabValue = "6months" | "1year";

// Reusable component for rendering program highlights
const ProgramHighlightsList = ({ items }: { items: string[] }) => {
  const midPoint = Math.ceil(items.length / 2);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-0.5">
        {items.slice(0, midPoint).map((item: string, index: number) => (
          <div
            key={`highlight-1-${index}`}
            className="flex items-center gap-0.5 transition-all duration-300 ease-in-out"
          >
            <ChevronRightIcon className="w-6 h-6" />
            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-0.5">
        {items.slice(midPoint).map((item: string, index: number) => (
          <div
            key={`highlight-2-${index}`}
            className="flex items-center gap-0.5 transition-all duration-300 ease-in-out"
          >
            <ChevronRightIcon className="w-6 h-6" />
            <span className="opacity-50 font-medium text-sm text-[#0b1131]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OffersSection = (): JSX.Element => {
  // State management for tab switching
  const [selectedTab, setSelectedTab] = useState<TabValue>("6months");

  // Ref for certificates scroll area
  const certificatesScrollRef = useRef<HTMLDivElement>(null);

  // Infinite auto-scroll (marquee effect)
  useEffect(() => {
    const scrollEl = certificatesScrollRef.current;
    if (!scrollEl) return;
    let frameId: number;
    let speed = 0.5; // px per frame, adjust for slower/faster

    function animate() {
      if (!scrollEl) return;
      // If we've scrolled past the first set, reset to start
      if (scrollEl.scrollLeft >= scrollEl.scrollWidth / 2) {
        scrollEl.scrollLeft = 0;
      } else {
        scrollEl.scrollLeft += speed;
      }
      frameId = requestAnimationFrame(animate);
    }
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [selectedTab]);

  // Get current course data based on selected tab
  const currentCourse = courseData[selectedTab];

  // Handle tab change with animation support
  const handleTabChange = (value: string) => {
    if (value === "6months" || value === "1year") {
      setSelectedTab(value as TabValue);
    }
  };

  return (
    <section className="w-full py-10 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-full md:max-w-6xl mx-auto px-2 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-semibold text-lg md:text-2xl text-[#151bb1] mb-1 md:mb-2">
            Courses Offered
          </h3>
          <h2 className="font-bold text-2xl md:text-5xl text-[#0b1131]">
            DISCOVER THE MAGNATE courses
          </h2>
        </div>

        {/* Duration Toggle */}
        <div className="flex justify-center mb-6 md:mb-8">
          <ToggleGroup
            type="single"
            value={selectedTab}
            onValueChange={handleTabChange}
            className="relative p-1 md:p-2 bg-[#ffffff14] rounded-[50px] border-[1.5px] border-solid border-[#edeaff] overflow-hidden"
          >
            {/* Animated Background Slider */}
            <div
              className={`absolute top-1 md:top-2 bottom-1 md:bottom-2 bg-[#edeaff] rounded-[40px] transition-all duration-500 ease-out transform ${
                selectedTab === "6months"
                  ? "left-1 md:left-2 right-1/2 md:right-[50%]"
                  : "left-1/2 md:left-[50%] right-1 md:right-2"
              }`}
              style={{
                boxShadow: '0 2px 8px rgba(91, 61, 252, 0.15)',
                zIndex: 1
              }}
            />

            <ToggleGroupItem
              value="6months"
              className="relative z-10 rounded-[40px] px-5 py-2.5 flex items-center gap-2.5 bg-transparent data-[state=on]:bg-transparent transition-all duration-400 ease-out hover:scale-105"
            >
              <div className={`w-[34px] h-[34px] flex items-center justify-center rounded-full transition-all duration-400 ease-out transform ${
                selectedTab === "6months"
                  ? "bg-[#5b3dfc] scale-110 shadow-lg shadow-[#5b3dfc]/30"
                  : "bg-transparent scale-100 hover:scale-105"
              }`}>
                <BookOpenIcon className={`w-[18px] h-[18px] transition-all duration-400 ease-out ${
                  selectedTab === "6months"
                    ? "text-white transform scale-110"
                    : "text-[#0b1131] transform scale-100"
                }`} />
              </div>
              <span className={`font-medium text-[15px] transition-all duration-400 ease-out ${
                selectedTab === "6months"
                  ? "text-[#27149f] font-semibold transform scale-105"
                  : "text-[#0b1131] font-medium transform scale-100"
              }`}>
                6 Months
              </span>
            </ToggleGroupItem>

            <ToggleGroupItem
              value="1year"
              className="relative z-10 rounded-[40px] px-5 py-2.5 flex items-center gap-2.5 bg-transparent data-[state=on]:bg-transparent transition-all duration-400 ease-out hover:scale-105"
            >
              <div className={`w-[34px] h-[34px] flex items-center justify-center rounded-full transition-all duration-400 ease-out transform ${
                selectedTab === "1year"
                  ? "bg-[#5b3dfc] scale-110 shadow-lg shadow-[#5b3dfc]/30"
                  : "bg-transparent scale-100 hover:scale-105"
              }`}>
                <BookOpenIcon className={`w-[18px] h-[18px] transition-all duration-400 ease-out ${
                  selectedTab === "1year"
                    ? "text-white transform scale-110"
                    : "text-[#0b1131] transform scale-100"
                }`} />
              </div>
              <span className={`font-medium text-[15px] transition-all duration-400 ease-out ${
                selectedTab === "1year"
                  ? "text-[#27149f] font-semibold transform scale-105"
                  : "text-[#0b1131] font-medium transform scale-100"
              }`}>
                1 Year
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Course Card with Animation */}
        <div
          key={selectedTab}
          className="transition-all duration-500 ease-in-out transform"
          style={{
            animation: 'fadeInSlide 0.5s ease-in-out'
          }}
        >
          <Card className="w-full rounded-lg shadow-[0px_10px_100px_10px_#0000001a] relative overflow-hidden">
            <CardContent className="p-0">
              {/* Background Effect */}
              <div
                className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(public/bg-effect-3.png)' }}
              >

                <div className="absolute inset-0">
                  {/* Course Header */}
                  <div className="flex flex-col md:flex-row px-4 md:px-12 pt-6 md:pt-10 pb-4 md:pb-6 relative gap-4 md:gap-0">
                    <div className="w-full md:w-[282px] font-medium text-xs md:text-sm text-[#0b1131] transition-all duration-300 mb-2 md:mb-0">
                      {currentCourse.idealFor}
                    </div>

                    <Separator orientation="vertical" className="hidden md:block mx-6 h-[70px]" />

                    <div className="flex flex-col">
                      <h2 className="font-semibold text-2xl md:text-[37.3px] leading-tight md:leading-[38px] text-[#151bb1] transition-all duration-300">
                        {currentCourse.courseName}
                      </h2>
                      <br className="hidden md:block" />
                      <h3 className="font-semibold text-lg md:text-xl text-[#151bb1] mt-[-8px] md:mt-[-18px] transition-all duration-300">
                        {currentCourse.courseFullName}
                      </h3>
                    </div>

                    <div className="absolute right-4 md:right-12 top-0 w-[110px] md:w-[157px] h-[46px] md:h-[66px] bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-1.png)] bg-cover">
                      <div className="relative w-[90px] md:w-[122px] h-[20px] md:h-[30px] top-px left-[10px] md:left-[22px]">
                        <div className="absolute w-[20px] md:w-[27px] top-0 left-0 font-bold text-2xl md:text-[44px] text-[#151bb1] leading-tight md:leading-[68px] transition-all duration-300">
                          {currentCourse.duration}
                        </div>
                        <div className="absolute w-[60px] md:w-[83px] top-[12px] md:top-[19px] left-[20px] md:left-[35px] font-medium text-xs md:text-base text-[#151bb1] leading-5 md:leading-7">
                          {selectedTab === "6months" ? "Month" : "Year"}
                        </div>
                      </div>
                    </div>
                  </div>

                <Separator className="mx-4 md:mx-12 bg-[#ffc350]" />

                  {/* Course Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-12 py-4 md:py-6">
                    {/* Program Highlights */}
                    <div className="space-y-2 md:space-y-3.5">
                      <h4 className="font-semibold text-xs md:text-sm text-[#151bb1] leading-tight md:leading-[18px]">
                        Program Highlights
                      </h4>

                      <ProgramHighlightsList items={currentCourse.programHighlights} />
                    </div>

                    {/* Statutory Modules */}
                    <div className="space-y-2 md:space-y-3.5">
                      <h4 className="font-semibold text-xs md:text-sm text-[#151bb1] leading-tight md:leading-[18px]">
                        Statutory Modules
                      </h4>

                      <ProgramHighlightsList items={currentCourse.statutoryModules} />
                    </div>
                  </div>

                  {/* Certificates */}
                  <div className="px-4 md:px-12 py-4 md:py-6">
                    <h4 className="font-semibold text-xs md:text-sm text-[#151bb1] text-center mb-4 md:mb-6">
                      Certificates
                    </h4>

                    {/* Horizontal Scrollable Certificates Display */}
                    <div
                      ref={certificatesScrollRef}
                      className="overflow-x-auto overflow-y-hidden scrollbar-hide transition-all duration-300"
                      role="region"
                      aria-label="Certificates showcase"
                      tabIndex={0}
                      style={{
                        scrollBehavior: 'auto',
                        WebkitOverflowScrolling: 'touch'
                      }}
                    >
                      <div
                        className="flex items-center min-w-max"
                        style={{ gap: '36px' }}
                      >
                        {/* Duplicate certificates for infinite scroll */}
                        {Array(2).fill(0).map((_, dupIdx) => (
                          currentCourse.certificates.map((certificate: string, index: number) => (
                            <div
                              key={`certificate-${selectedTab}-${dupIdx}-${index}-${certificate}`}
                              className="flex-shrink-0 text-center focus:outline-none focus:ring-2 focus:ring-[#151bb1] focus:ring-offset-2 rounded-md px-2 py-1 transition-all duration-300 ease-in-out"
                              tabIndex={0}
                              role="button"
                              aria-label={`Certificate: ${certificate}`}
                            >
                              <span
                                className="font-medium text-xs md:text-sm text-[#0b1131] opacity-70 whitespace-nowrap block"
                                style={{
                                  height: '20px',
                                  lineHeight: '20px',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis'
                                }}
                              >
                                {certificate}
                              </span>
                            </div>
                          ))
                        ))}
                      </div>
                    </div>

                  </div>
                  <Separator className="mx-4 md:mx-12 bg-[#ffc350]" />


                  {/* Benefits Footer */}
                  <div className="mx-4 md:mx-12 mt-4 mb-8 md:mt-4 md:mb-12">
                    <div className="bg-[#151bb1] rounded-lg py-2 md:py-3 px-4 md:px-6">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                        {currentCourse.benefits.map((benefit: string, index: number) => (
                          <div
                            key={`benefit-${selectedTab}-${index}`}
                            className="inline-flex items-center gap-2 transition-all duration-300 ease-in-out"
                          >
                            <CheckCircleIcon className="w-5 h-5 md:w-[22px] md:h-[22px] text-white" />
                            <span className="text-shadow-[0.11px_0.22px_0.22px_#00000061] font-medium text-white text-xs md:text-[14.2px] leading-tight md:leading-[17.7px]">
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
      </div>
    </section>
  );
};
