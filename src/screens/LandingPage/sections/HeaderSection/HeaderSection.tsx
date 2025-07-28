import { useState } from "react";
import { Button } from "../../../../components/ui/button";

// Component Props Interface
interface HeaderSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaColor?: string;
  studentImageSrc?: string;
  studentImageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageTop?: string;
  imageLeft?: string;
}

// Small Circle Component
const SmallCircle = () => (
  <img src="/public/assets/HeaderSection/SmallCircle.svg" alt="SmallCircle" />
);

// Left Coin Component
const CoinLeft = () => (
  <img src="/public/assets/HeaderSection/CoinLeft.svg" alt="CoinLeft" />
);

// Right Coin Component
const CoinRight = () => (
  <img src="/public/assets/HeaderSection/CoinRight.svg" alt="CoinRight" />
);

// Star Component
const Star = () => (
  <img src="/public/assets/HeaderSection/Star.svg" alt="Star" />
);

export const HeaderSection = ({
  title = "Trusted by parents,\npreferred by students,\nproven by results",
  subtitle = "Diploma in computerized accounting and finance – The perfect launchpad for a high growth career, shape a smarter future.",
  ctaText = "Let's Talk",
  ctaColor = "#ffc94b",
  studentImageSrc = "/public/assets/HeaderSection/student_with_book.png",
  studentImageAlt = "Confident student with books showing thumbs up",
  imageWidth = "477px",
  imageHeight = "563px",
  imageTop = "50px",
  imageLeft = "697px"
}: HeaderSectionProps = {}): JSX.Element => {
  // Hamburger menu state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Scroll to section by id
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileNavOpen(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #3F43A9 0%, #0F1377 100%)'
      }}
      data-model-id="1:548-frame"
    >
      {/* Navigation */}
      <header className="container mx-auto py-6 px-8 flex justify-between items-center relative z-20">
        {/* ...logo code... */}
        <div className="flex items-center">
        <div className="flex items-center space-x-2">
            <div className="w-[42px] h-14 rotate-0 relative">
              <img src="/public/assets/HeaderSection/logo.svg" alt="logo" />
            </div>
            <div className="ml-12">
              <div className="[font-family:'Reem_Kufi',Helvetica] font-normal text-white text-[11px] leading-[normal]">
                THE
              </div>
              <img src="/public/assets/HeaderSection/Magnates.svg" alt="Magnates" />
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-[#FFC350] border-b-2 border-white pb-1"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about-us"
            className="text-white hover:text-[#FFC350]"
            onClick={e => {
              e.preventDefault();
              handleScrollTo("about-us");
            }}
          >
            About Us
          </a>
          <Button
            className="bg-transparent hover:bg-transparent border border-white text-white rounded-md px-6"
            onClick={() => handleScrollTo("form-section")}
          >
            Contact Us
          </Button>
        </nav>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white z-30"
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
        {/* Mobile Nav */}
        {mobileNavOpen && (
          <div className="fixed inset-0 bg-[#191c73]/90 z-20 flex flex-col items-center justify-center md:hidden transition-all">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close navigation menu"
              onClick={() => setMobileNavOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col gap-8 text-xl">
              <a
                href="#"
                className="text-white hover:text-[#FFC350] font-semibold"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileNavOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#about-us"
                className="text-white hover:text-[#FFC350] font-semibold"
                onClick={e => {
                  e.preventDefault();
                  handleScrollTo("about-us");
                }}
              >
                About Us
              </a>
              <Button
                className="bg-transparent hover:bg-[#FFC350] border border-white text-white rounded-md px-8 py-3 text-lg"
                onClick={() => handleScrollTo("form-section")}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Content - Two Column Layout */}
      <main className="container mx-auto px-8 pt-8 pb-16 flex flex-col lg:flex-row items-center min-h-[calc(100vh-120px)] relative z-10" role="main" aria-label="Hero section">
        {/* Left Content Block */}
        <div
          className="lg:w-1/2 mb-12 lg:mb-0 relative z-20 hero-overlap lg:min-h-[280px]"
          
        >
          <h1
            className="font-bold text-white leading-tight mb-8 text-5xl hero-title"
            style={{ fontSize: '60px' }}
          >
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            {subtitle}
          </p>
          <Button
            className="text-[#0b1131] font-semibold rounded-lg text-base transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              backgroundColor: ctaColor,
              padding: '20px 30px'
            }}
            onClick={() => handleScrollTo("form-section")}
            aria-label={`${ctaText} - Contact us to learn more about our programs`}
          >
            {ctaText}
          </Button>
        </div>

        {/* Right Image Block - Fixed Positioning */}
        {/* Image positioned absolutely at specific coordinates (477x563px at top:205px, left:797px) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <img
            src={studentImageSrc}
            alt={studentImageAlt}
            className="absolute pointer-events-auto hero-image bottom-0 lg:min-h-[280px]"
            style={{
              width: imageWidth,
              height: imageHeight,
              top: imageTop,
              left: imageLeft,
              objectFit: 'cover'
            }}
          />
        </div>
      </main>

      {/* Fixed Positioned Decorative Elements */}
      {/* CoinRight component - Fixed at 103.4px from right, 471.27px from bottom */}
      <div
        className="pointer-events-none z-15 animate-float decorative-coin-right"
        style={{
          position: 'absolute',
          right: '40px',
          bottom: '250px',
          width: 'auto',
          height: 'auto'
        }}
      >
        {/* CoinRight component */}
        <CoinRight />
      </div>

      {/* CoinLeft component - Fixed at 691.64px from left, 56px from bottom */}
      <div
        className="pointer-events-none z-15 animate-float-delayed decorative-coin-left"
        style={{
          position: 'absolute',
          left: '900px',
          bottom: '1px',
          width: 'auto',
          height: 'auto'
        }}
      >
        <CoinLeft />
      </div>

      {/* Star component - Fixed at 55.08px from right, 277.69px from bottom with dimensions 66.92px × 70.31px */}
      <div
        className="pointer-events-none z-20 animate-float decorative-star"
        style={{
          position: 'absolute',
          right: '155px',
          bottom: '207px',
          width: '66.92px',
          height: '70.31px',
          animationDelay: '0.5s'
        }}
      >
        <Star />
      </div>

      {/* Small Circle component - Fixed at 568.44px from right, 563.43px from bottom */}
      <div
        className="pointer-events-none z-15 decorative-small-circle"
        style={{
          position: 'absolute',
          right: '918px',
          bottom: '683px',
          width: 'auto',
          height: 'auto'
        }}
      >
        <SmallCircle />
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .hero-image {
            left: 600px !important;
            width: 400px !important;
            height: 472px !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-image {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            width: 350px !important;
            height: 413px !important;
            margin: 2rem auto 0 auto !important;
            display: block !important;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-overlap {
            transform: none !important;
            margin-right: 0 !important;
          }
          .hero-image {
            width: 300px !important;
            height: 354px !important;
            margin: 1.5rem auto 0 auto !important;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-image {
            width: 250px !important;
            height: 295px !important;
            margin: 1rem auto 0 auto !important;
          }
        }

        /* Hide decorative elements on mobile devices */
        @media (max-width: 1114px) {
          .hero-image {
            display: none !important;
          }
          .decorative-coin-left,
          .decorative-coin-right,
          .decorative-star,
          .decorative-small-circle {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
