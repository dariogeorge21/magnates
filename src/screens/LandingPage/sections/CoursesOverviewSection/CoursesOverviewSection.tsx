import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useRef, useEffect } from "react";

export const CoursesOverviewSection = (): JSX.Element => {
  // Data for certification items
  const scrollItems = [
    "International Certification",
    "Individual Course Certification",
    "Course Completion Certification",
    "Government Accredited"
  ];

  // Ref for scroll area
  const scrollRef = useRef<HTMLDivElement>(null);

  // Infinite auto-scroll (marquee effect)
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    let frameId: number;
    let speed = 0.5; // px per frame, adjust for slower/faster

    function animate() {
      if (!scrollEl) return;
      if (scrollEl.scrollLeft >= scrollEl.scrollWidth / 2) {
        scrollEl.scrollLeft = 0;
      } else {
        scrollEl.scrollLeft += speed;
      }
      frameId = requestAnimationFrame(animate);
    }
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="w-full h-[223px] bg-white py-16">
      <div className="container relative h-full flex items-center">
        <Card className="w-[322px] h-[97px] border-none shadow-none">
          <CardContent className="p-0 flex items-center h-full">
            <div className="flex flex-col">
              <span className="font-bold text-[34.8px] leading-[39.4px] text-[#191c73] font-sans">
                Achieve
              </span>
              <span className="font-light text-[29px] leading-[39.4px] text-[#101828] font-sans">
                Certifications
              </span>
            </div>
            <Separator
              orientation="vertical"
              className="h-[93px] ml-6 bg-[#111849]"
            />
          </CardContent>
        </Card>

        <div
          ref={scrollRef}
          className="w-full max-w-[calc(100%-322px)] ml-4 overflow-x-scroll scrollbar-hide"
          tabIndex={0}
          aria-label="Certifications overview scroll area"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <div className="flex items-center gap-[60px] py-4 min-w-max">
            {/* Duplicate scrollItems for infinite scroll */}
            {Array(2).fill(0).map((_, dupIdx) => (
              scrollItems.map((item, index) => (
                <div key={`scrollitem-${dupIdx}-${index}-${item}`} className="flex items-center">
                  <img
                    src="/public/Overview.svg"
                    alt="Certification icon"
                    className="w-[37px] h-[37px]"
                    style={{ minWidth: 37, minHeight: 37 }}
                    aria-hidden="true"
                  />
                  <span className="text-[24px] font-medium text-[#909090] whitespace-nowrap ml-2">
                    {item}
                  </span>
                  {index !== scrollItems.length - 1 && (
                    <span className="text-[48px] text-[#909090] m-12 w-[1px]">
                      <svg width="2" height="65" viewBox="0 0 2 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0L0.999997 65" stroke="#909090"/>
                      </svg>
                    </span>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};