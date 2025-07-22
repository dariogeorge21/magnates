import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const FormSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1296px]">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side with cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-[#151bb1] font-semibold text-2xl mb-2">Contact Us</h3><br />
              <h2 className="text-[#0b1131] font-bold text-5xl mb-4">Get in touch</h2><br />
              <p className="text-[#a0abb8] font-medium text-sm">
                Feel free to contact us at any time, we will get back to you as
                soon as possible. Get started in just 30 seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#5b3dfc] rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#0b1131] font-bold text-xl mb-1">Innovative Classes</h3>
              </Card>

              <Card className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#5b3dfc] rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.45 10.5C17.45 10.5 14.52 14.2 12 14.2C9.48 14.2 6.55 10.5 6.55 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#0b1131] font-bold text-xl mb-1">24/7 Support</h3>
              </Card>

              <Card className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:col-span-2 md:mx-auto md:w-1/2">
                <div className="w-16 h-16 bg-[#5b3dfc] rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#0b1131] font-bold text-xl mb-1">Professional Team</h3>
              </Card>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0f001a] mb-1">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name" 
                    placeholder="First_Name Last_Name" 
                    className="w-full border-[#acb5c1] rounded-lg p-3" 
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-[#0f001a] mb-1">
                    Age<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="age" 
                    placeholder="" 
                    className="w-full border-[#acb5c1] rounded-lg p-3" 
                  />
                </div>
                
                <div>
                  <label htmlFor="qualifications" className="block text-sm font-medium text-[#0f001a] mb-1">
                    Qualifications<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="qualifications" 
                    placeholder="" 
                    className="w-full border-[#acb5c1] rounded-lg p-3" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0f001a] mb-1">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="" 
                    className="w-full border-[#acb5c1] rounded-lg p-3" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0f001a] mb-1">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="" 
                    className="w-full border-[#acb5c1] rounded-lg p-3 min-h-[126px]" 
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="demo"
                    className="w-5 h-5 rounded border border-solid border-[#a0abb8]"
                  />
                  <label
                    htmlFor="demo"
                    className="text-[#0f001a] font-medium text-sm"
                  >
                    FREE Demo
                  </label>
                </div>
                
                <Button className="w-full py-3 bg-[#ffc350] hover:bg-[#ffc350]/90 rounded text-[#0f1377] font-semibold">
                  Submit and unlock a free Career consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
