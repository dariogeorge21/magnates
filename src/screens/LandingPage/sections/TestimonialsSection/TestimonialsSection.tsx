import {
  AwardIcon,
  BarChartIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  UsersIcon,
} from "lucide-react";

import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      id: 1,
      title: "Career ready curriculum",
      description:
        "Gain industry-aligned knowledge that prepares you for real-world success.",
      bgColor: "bg-white",
      textColor: "text-[#0b1131]",
      descriptionOpacity: "opacity-50",
      icon: <BriefcaseIcon className="w-[88px] h-[88px]" />,
      bgImage: "https://c.animaapp.com/mc28gt7czECAIi/img/bg-effect-2.png",
    },
    {
      id: 2,
      title: "Interview Training",
      description:
        "Master the art of interviews with expert-led coaching and mock sessions.",
      bgColor: "bg-[#3f43a9]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      icon: <GraduationCapIcon className="w-[88px] h-[88px]" />,
      bgImage: "https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-2.png",
    },
    {
      id: 3,
      title: "Global Certifications",
      description:
        "Boost your credentials with internationally recognized certifications.",
      bgColor: "bg-[#101478]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      icon: <AwardIcon className="w-[88px] h-[88px]" />,
      bgImage: "https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-3.png",
    },
    {
      id: 4,
      title: "Employability Skills",
      description:
        "Develop communication, teamwork, leadership, and more for workplace excellence.",
      bgColor: "bg-[#3f43a9]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      icon: <UsersIcon className="w-[84px] h-[84px]" />,
      bgImage: "https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-4.png",
    },
    {
      id: 5,
      title: "100% Placement Opportunities",
      description:
        "Unlock top job opportunities with guaranteed placement support.",
      bgColor: "bg-[#101478]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      icon: <BarChartIcon className="w-[79px] h-[62px]" />,
      bgImage: "https://c.animaapp.com/mc28gt7czECAIi/img/mask-group-6.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-white bg-opacity-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-semibold text-2xl text-[#151bb1] font-['Poppins',Helvetica] mb-4">
            Our Services
          </h3>
          <h2 className="font-bold text-5xl text-[#0b1131] font-['Poppins',Helvetica] leading-[68px]">
            DISCOVER THE MAGNATE MAGIC
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {serviceCards.slice(0, 3).map((card) => (
            <div key={card.id} className="relative">
              <Card
                className={`${card.bgColor} rounded-lg shadow-[0px_10px_100px_10px_#0000001a] h-[444px] relative overflow-hidden`}
              >
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`${card.title} background`}
                    src={card.bgImage}
                  />

                  {/* Card Content */}
                  <CardContent className="relative z-10 flex flex-col items-center justify-center h-full pt-16">
                    <div className="flex justify-center mb-8">{card.icon}</div>
                    <h3
                      className={`${card.textColor} font-bold text-2xl text-center font-['Poppins',Helvetica] mb-6 px-4`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`${card.textColor} ${card.descriptionOpacity} font-medium text-sm text-center font-['Poppins',Helvetica] leading-7 max-w-[293px]`}
                    >
                      {card.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.slice(3, 5).map((card) => (
            <div key={card.id} className="relative">
              <Card
                className={`${card.bgColor} rounded-lg shadow-[0px_10px_100px_10px_#0000001a] h-[444px] relative overflow-hidden`}
              >
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={`${card.title} background`}
                    src={card.bgImage}
                  />

                  {/* Card Content */}
                  <CardContent className="relative z-10 flex flex-col items-center justify-center h-full pt-16">
                    <div className="flex justify-center mb-8">{card.icon}</div>
                    <h3
                      className={`${card.textColor} font-bold text-2xl text-center font-['Poppins',Helvetica] mb-6 px-4`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`${card.textColor} ${card.descriptionOpacity} font-medium text-sm text-center font-['Poppins',Helvetica] leading-7 max-w-[293px]`}
                    >
                      {card.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
