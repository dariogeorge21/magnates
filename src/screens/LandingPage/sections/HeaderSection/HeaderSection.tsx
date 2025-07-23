import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#1e2875] via-[#2d3a9f] to-[#3b47c9] overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-12 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Lion Logo */}
            <div className="w-12 h-12 mr-3">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#FFC350"/>
                <path d="M24 8C28.4183 8 32 11.5817 32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8Z" fill="#8B4513"/>
                <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="#654321"/>
                <path d="M30 14C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10C28.8954 10 28 10.8954 28 12C28 13.1046 28.8954 14 30 14Z" fill="#654321"/>
                <path d="M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C21.7909 10 20 11.7909 20 14C20 16.2091 21.7909 18 24 18Z" fill="#D2691E"/>
              </svg>
            </div>
            <div className="text-white">
              <div className="text-xs font-normal tracking-wider">THE</div>
              <div className="text-xl font-bold tracking-wide">MAGNATES</div>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e2875] px-6 py-2 rounded-md font-medium transition-all duration-300">
          Contact Us
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between px-12 mt-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-white text-6xl font-bold leading-tight mb-8">
            Trusted by parents,<br />
            preferred by students,<br />
            proven by results
          </h1>
          
          <p className="text-white text-lg leading-relaxed mb-12 max-w-xl">
            Diploma in computerized accounting and finance – The perfect 
            launchpad for a high growth career, shape a smarter future.
          </p>

          <Button className="bg-[#FFC350] hover:bg-[#FFB020] text-[#1e2875] font-semibold px-8 py-3 rounded-md text-lg transition-all duration-300">
            Let's Talk
          </Button>
        </div>

        {/* Right Content - Student Image */}
        <div className="flex-1 relative flex justify-end">
          <div className="relative">
            {/* Student Image */}
            <img
              src="/public/student_with_book.png"
              alt="Student with books"
              className="relative z-10 max-w-lg h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Circle */}
        <div className="absolute top-32 right-48 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
        
        {/* Top Right Larger Circle */}
        <div className="absolute top-48 right-24 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
        
        {/* Bottom Left Circle */}
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-white bg-opacity-15 rounded-full"></div>
        
        {/* Bottom Right Circle */}
        <div className="absolute bottom-48 right-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
        
        {/* Star Shape - Top Right */}
        <div className="absolute top-1/3 right-12">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L24.7023 15.2977L40 20L24.7023 24.7023L20 40L15.2977 24.7023L0 20L15.2977 15.2977L20 0Z" fill="#FFC350"/>
          </svg>
        </div>
        
        {/* Additional decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-white to-transparent opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-white to-transparent opacity-30 rounded-full"></div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e2875] via-transparent to-[#3b47c9] opacity-50"></div>
    </section>
  );
};