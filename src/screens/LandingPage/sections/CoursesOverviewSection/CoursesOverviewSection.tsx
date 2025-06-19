import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const CoursesOverviewSection = (): JSX.Element => {
  // Data for logos and text items
  const scrollItems = [
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/fullpurple-3.png",
      alt: "Fullpurple",
      width: "123.13px",
      height: "53px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/fullpurple-3.png",
      alt: "Fullpurple",
      width: "123.13px",
      height: "53px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/fullpurple-3.png",
      alt: "Fullpurple",
      width: "123.13px",
      height: "53px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/university-of-cambridge-logo-wine-3-1.png",
      alt: "University of Cambridge",
      width: "174px",
      height: "57px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/bsfi-3-1.png",
      alt: "Bsfi",
      width: "54.11px",
      height: "63px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/tally-prime-3-1.png",
      alt: "Tally prime",
      width: "128.07px",
      height: "56px",
    },
    {
      type: "text",
      content: "Office Automation",
    },
    {
      type: "text",
      content: "Iaap Hours Sheet",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/microsoft-1.svg",
      alt: "Microsoft",
      width: "116px",
      height: "24.78px",
    },
    {
      type: "text",
      content: "Tally",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/nsdc-2.png",
      alt: "Nsdc",
      width: "96.17px",
      height: "56px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/qb-2.png",
      alt: "Qb",
      width: "81px",
      height: "51px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/zoho-books-2.png",
      alt: "Zoho books",
      width: "97px",
      height: "33px",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/sap-new-2.png",
      alt: "Sap new",
      width: "64px",
      height: "34px",
    },
    {
      type: "text",
      content: "Sap Fico",
    },
    {
      type: "text",
      content: "Sap Mm",
    },
    {
      type: "text",
      content: "Iaap Hours Sheet",
    },
    {
      type: "text",
      content: "Gcc Vat",
    },
  ];

  return (
    <section className="w-full h-[223px] bg-white py-16">
      <div className="container relative h-full flex items-center">
        <Card className="w-[322px] h-[97px] border-none shadow-none">
          <CardContent className="p-0 flex items-center h-full">
            <div className="flex flex-col">
              <span className="font-bold text-[34.8px] leading-[39.4px] text-[#191c73] font-sans">
                50+
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

        <ScrollArea className="w-full max-w-[calc(100%-322px)] ml-4">
          <div className="flex items-center gap-[66px] py-4">
            {scrollItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "image" ? (
                  <img
                    className="object-contain"
                    style={{ width: item.width, height: item.height }}
                    alt={item.alt}
                    src={item.src}
                  />
                ) : (
                  <div className="[text-shadow:0.12px_0.23px_0.23px_#00000061] font-medium text-[#868686] text-[14.8px] tracking-[0] leading-[18.5px] whitespace-nowrap font-['Poppins',Helvetica]">
                    {item.content}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
