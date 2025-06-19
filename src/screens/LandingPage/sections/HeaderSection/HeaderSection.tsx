import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-[#0b1131] relative overflow-hidden" data-model-id="1:548-frame">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="The Magnates Logo" 
            className="h-12"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/200x50/0b1131/FFC350?text=THE+MAGNATES";
            }}
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-[#FFC350] border-b-2 border-white pb-1">Home</a>
          <a href="#" className="text-white hover:text-[#FFC350]">About Us</a>
          <Button className="bg-transparent hover:bg-transparent border border-white text-white rounded-md px-6">
            Contact Us
          </Button>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Trusted by parents,<br />
            preferred by students,<br />
            proven by results
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Diploma in computerized accounting and finance – The perfect
            launchpad for a high growth career, shape a smarter future.
          </p>
          <Button className="bg-[#FFC350] hover:bg-[#FFC350]/90 text-[#0b1131] font-semibold px-8 py-3 rounded-md text-base">
            Let's Talk
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="https://c.animaapp.com/mc3eajl71Nd39x/img/student-image." 
            alt="Student with books" 
            className="relative z-10 max-w-full"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#5b3dfc] rounded-full opacity-20 blur-md"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#5b3dfc] rounded-full opacity-20 blur-md"></div>
      
      {/* Coin Elements */}
      <img 
        src="https://c.animaapp.com/mc3eajl71Nd39x/img/coin-1.png" 
        alt="" 
        className="absolute top-32 right-64 w-20 h-20 animate-float"
      />
      <img 
        src="https://c.animaapp.com/mc3eajl71Nd39x/img/coin-2.png" 
        alt="" 
        className="absolute bottom-40 right-1/4 w-24 h-24 animate-float-delayed"
      />
      
      {/* Star Element */}
      <img 
        src="https://c.animaapp.com/mc3eajl71Nd39x/img/star.png" 
        alt="" 
        className="absolute top-1/3 right-16 w-12 h-12 animate-pulse"
      />

      {/* Add animation keyframes to the global CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};
