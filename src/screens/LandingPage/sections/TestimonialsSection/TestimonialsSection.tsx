import { Card, CardContent } from "../../../../components/ui/card";

// Interface for service card data
interface ServiceCard {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  descriptionOpacity: string;
  iconSrc: string;
  iconAlt: string;
  bgImageSrc: string;
  bgImageAlt: string;
}

export const TestimonialsSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards: ServiceCard[] = [
    {
      id: 1,
      title: "Career ready curriculum",
      description:
        "Gain industry-aligned knowledge that prepares you for real-world success.",
      bgColor: "bg-white",
      textColor: "text-[#0b1131]",
      descriptionOpacity: "opacity-50",
      iconSrc: "/public/card-1.png",
      iconAlt: "Career ready curriculum icon",
      bgImageSrc: "/public/bg-card-1.png",
      bgImageAlt: "Career ready curriculum background",
    },
    {
      id: 2,
      title: "Interview Training",
      description:
        "Master the art of interviews with expert-led coaching and mock sessions.",
      bgColor: "bg-[#3f43a9]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      iconSrc: "/public/card-2.svg",
      iconAlt: "Interview Training icon",
      bgImageSrc: "/public/bg-card-2.png",
      bgImageAlt: "Interview Training background",
    },
    {
      id: 3,
      title: "Global Certifications",
      description:
        "Boost your credentials with internationally recognized certifications.",
      bgColor: "bg-[#101478]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      iconSrc: "/public/card-3.svg",
      iconAlt: "Global Certifications icon",
      bgImageSrc: "/public/bg-card-3.png",
      bgImageAlt: "Global Certifications background",
    },
    {
      id: 4,
      title: "Employability Skills",
      description:
        "Develop communication, teamwork, leadership, and more for workplace excellence.",
      bgColor: "bg-[#3f43a9]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      iconSrc: "/public/card-4.svg",
      iconAlt: "Employability Skills icon",
      bgImageSrc: "/public/bg-card-2.png",
      bgImageAlt: "Employability Skills background",
    },
    {
      id: 5,
      title: "100% Placement Opportunities",
      description:
        "Unlock top job opportunities with guaranteed placement support.",
      bgColor: "bg-[#101478]",
      textColor: "text-white",
      descriptionOpacity: "opacity-50",
      iconSrc: "/public/card-5.svg",
      iconAlt: "100% Placement Opportunities icon",
      bgImageSrc: "/public/bg-card-2.png",
      bgImageAlt: "100% Placement Opportunities background",
    },
  ];

  return (
    <section
  className="w-full py-16 bg-white bg-opacity-20 relative"
  aria-labelledby="services-heading"
>
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h3 className="font-semibold text-2xl text-[#151bb1] font-['Poppins',Helvetica] mb-4">
        Our Services
      </h3>
      <h2
        id="services-heading"
        className="font-bold text-5xl text-[#0b1131] font-['Poppins',Helvetica] leading-[68px]"
      >
        DISCOVER THE MAGNATE MAGIC
      </h2>
    </div>

    {/* Services Grid - Using 6-column layout for better control */}
    <div className="grid grid-cols-6 gap-7 justify-items-center">
      {serviceCards.map((card, index) => (
        <article 
          key={card.id} 
          className={`relative ${
            // First 3 cards span 2 columns each
            index < 3 ? 'col-span-2' : 
            // Last 2 cards: 4th card starts at column 2, 5th card starts at column 4
            index === 3 ? 'col-start-2 col-span-2' :
            index === 4 ? 'col-start-4 col-span-2' : ''
          }`}
        >
          <Card
            className={`${card.bgColor} rounded-lg shadow-[0px_10px_100px_10px_#0000001a] relative overflow-hidden`}
            style={{ width: "385px", height: "444px" }}
            role="article"
            aria-labelledby={`card-title-${card.id}`}
          >
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={card.bgImageAlt}
                src={card.bgImageSrc}
                style={{ width: "385px", height: "444px" }}
              />

              {/* Card Content */}
              <CardContent className="relative z-10 flex flex-col items-center justify-center h-full pt-16">
                <div className="flex justify-center mb-8">
                  <img
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    className="w-auto h-auto"
                  />
                </div>
                <h3
                  id={`card-title-${card.id}`}
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
        </article>
      ))}
    </div>
  </div>
</section>
  );
};
