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
      iconSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445768/card-1_ozyqqy.png",
      iconAlt: "Career ready curriculum icon",
      bgImageSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753446531/bg-card-1_hfutjm.png",
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
      iconSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445768/card-2_n7uuig.svg",
      iconAlt: "Interview Training icon",
      bgImageSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/bg-card-2_pt1rvx.png",
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
      iconSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/card-3_s2vjqj.svg",
      iconAlt: "Global Certifications icon",
      bgImageSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/bg-card-3_hqsz9h.png",
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
      iconSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753446476/card-4_u4iimk.png",
      iconAlt: "Employability Skills icon",
      bgImageSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/bg-card-2_pt1rvx.png",
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
      iconSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/card-5_ft7jpq.svg",
      iconAlt: "100% Placement Opportunities icon",
      bgImageSrc: "https://res.cloudinary.com/dobqxxtml/image/upload/v1753445767/bg-card-2_pt1rvx.png",
      bgImageAlt: "100% Placement Opportunities background",
    },
  ];

  return (
    <section
      className="w-full py-10 md:py-16 bg-white bg-opacity-20 relative"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h3 className="font-semibold text-lg md:text-2xl text-[#151bb1] font-['Poppins',Helvetica] mb-2 md:mb-4">
            Our Services
          </h3>
          <h2
            id="services-heading"
            className="font-bold text-2xl md:text-5xl text-[#0b1131] font-['Poppins',Helvetica] leading-snug md:leading-[68px]"
          >
            DISCOVER THE MAGNATE MAGIC
          </h2>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-[1296px] mx-auto">
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className="w-full flex justify-center"
            >
              <Card
                className={`${card.bgColor} rounded-lg shadow-[0px_10px_100px_10px_#0000001a] relative overflow-hidden flex flex-col items-center justify-center`}
                style={{ width: '340px', height: '420px', minWidth: '340px', minHeight: '420px', maxWidth: '340px', maxHeight: '420px' }}
                role="article"
                aria-labelledby={`card-title-${card.id}`}
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Background Image */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    alt={card.bgImageAlt}
                    src={card.bgImageSrc}
                  />

                  {/* Card Content */}
                  <CardContent className="relative z-10 flex flex-col items-center justify-center h-full pt-10 md:pt-16">
                    <div className="flex justify-center mb-4 md:mb-8">
                      <img
                        src={card.iconSrc}
                        alt={card.iconAlt}
                        className="w-12 h-12 md:w-auto md:h-auto"
                      />
                    </div>
                    <h3
                      id={`card-title-${card.id}`}
                      className={`${card.textColor} font-bold text-lg md:text-2xl text-center font-['Poppins',Helvetica] mb-3 md:mb-6 px-2 md:px-4`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`${card.textColor} ${card.descriptionOpacity} font-medium text-xs md:text-sm text-center font-['Poppins',Helvetica] leading-6 md:leading-7 max-w-[220px] md:max-w-[293px]`}
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
