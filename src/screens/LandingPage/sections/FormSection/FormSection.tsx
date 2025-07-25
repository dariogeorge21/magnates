import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const FormSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[80px] md:py-[120px]">
      <div className="container mx-auto px-4 max-w-[1296px]">
        <div className="flex flex-col md:flex-row gap-32 md:gap-12 items-center justify-center">
          {/* Left side with cards */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 min-h-[399px]"> 
              {/* Left column: two stacked cards */}
              <div className="flex flex-col gap-8 justify-between h-full">
                <Card className="bg-white rounded-[25.2px] shadow-[0_8px_40px_0_rgba(21,27,177,0.10)] p-8 flex flex-col items-center w-[271px] h-[220px]"> {/* 220*1.05=231, 180*1.05=189, 24*1.05=25.2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-[77.2px] h-[77.2px] rounded-full bg-[#151bb1] flex items-center justify-center shadow-[0_0_24px_0_rgba(21,27,177,0.20)] mb-4"> {/* 64*1.05=67.2 */}
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6973 22.6289V30.1189" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5173 26.373H11.875" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M28.7316 22.8555H28.5176" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M32.3586 30.0059H32.1445" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path opacity="0.4" d="M14.1445 2C14.1445 3.48097 15.3695 4.68152 16.8806 4.68152H18.9935C21.3248 4.68983 23.2131 6.54052 23.2237 8.82532V10.1754" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8566 41.9245C24.8462 42.0263 18.9461 42.0222 13.1455 41.9245C6.707 41.9245 2 37.3321 2 31.0219V21.7227C2 15.4125 6.707 10.8201 13.1455 10.8201C18.9779 10.7204 24.8823 10.7225 30.8566 10.8201C37.2951 10.8201 42 15.4146 42 21.7227V31.0219C42 37.3321 37.2951 41.9245 30.8566 41.9245Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-[#0b1131] leading-tight">Innovative<br />Classes</div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white rounded-[25.2px] shadow-[0_8px_40px_0_rgba(21,27,177,0.10)] p-8 flex flex-col items-center w-[271px] h-[220px]">
                  <div className="flex flex-col items-center">
                    <div className="w-[77.2px] h-[77.2px] rounded-full bg-[#151bb1] flex items-center justify-center shadow-[0_0_24px_0_rgba(21,27,177,0.20)] mb-4">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03228 6.99481C3.69822 5.89218 7.36737 1.88161 9.98572 2.00268C10.7684 2.06754 11.4603 2.54103 12.0225 3.09018C13.3133 4.35065 17.0083 9.11793 17.2181 10.1211C17.7283 12.5815 14.7965 13.9998 15.6938 16.4796C17.9813 22.0771 21.9229 26.0185 27.5228 28.3038C30.0006 29.201 31.419 26.2693 33.8795 26.7817C34.8806 26.9914 39.6503 30.6863 40.9108 31.9771C41.4578 32.537 41.9335 33.231 41.9984 34.0137C42.0957 36.7703 37.8362 40.4911 37.006 40.9668C35.0471 42.3678 32.4914 42.344 29.3758 40.8954C20.6818 37.2784 6.78791 23.6468 3.10363 14.6246C1.69391 11.5264 1.59662 8.95361 3.03228 6.99481Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path opacity="0.4" d="M5.96484 4.72461L9.05747 9.31198" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path opacity="0.4" d="M34.3457 34.7715L38.952 38.3715" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-[#0b1131] leading-tight">24/7<br />Support</div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* Right column: one centered card */}
              <div className="flex items-center h-full">
                <Card className="bg-white rounded-[25.2px] shadow-[0_8px_40px_0_rgba(21,27,177,0.10)] p-8 flex flex-col items-center w-[271px] h-[220px] mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-[77.2px] h-[77.2px] rounded-full bg-[#151bb1] flex items-center justify-center shadow-[0_0_24px_0_rgba(21,27,177,0.20)] mb-4">
                    <svg width="44" height="35" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M33.0234 15.1544C36.1484 15.1544 38.6835 12.6212 38.6835 9.49616C38.6835 6.37115 36.1484 3.83789 33.0234 3.83789" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M35.625 21.3027C36.5582 21.3671 37.4861 21.4994 38.3996 21.705C39.6689 21.9535 41.1957 22.4737 41.7391 23.6125C42.086 24.3419 42.086 25.1911 41.7391 25.9223C41.1975 27.0611 39.6689 27.5796 38.3996 27.8406" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path opacity="0.4" d="M10.9765 15.1544C7.85145 15.1544 5.31641 12.6212 5.31641 9.49616C5.31641 6.37115 7.85145 3.83789 10.9765 3.83789" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.37382 21.3027C7.4406 21.3671 6.51276 21.4994 5.59921 21.705C4.3299 21.9535 2.80315 22.4737 2.26146 23.6125C1.91285 24.3419 1.91285 25.1911 2.26146 25.9223C2.80136 27.0611 4.3299 27.5796 5.59921 27.8406" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.992 22.5215C28.3243 22.5215 33.734 23.4797 33.734 27.3145C33.734 31.1474 28.36 32.1414 21.992 32.1414C15.658 32.1414 10.25 31.1832 10.25 27.3484C10.25 23.5137 15.624 22.5215 21.992 22.5215Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M21.9895 17.0512C17.8133 17.0512 14.4648 13.7027 14.4648 9.52469C14.4648 5.34848 17.8133 2 21.9895 2C26.1657 2 29.5142 5.34848 29.5142 9.52469C29.5142 13.7027 26.1657 17.0512 21.9895 17.0512Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-[#0b1131] leading-tight">Professional<br />Team</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="w-full max-w-[494px] scale-[1.03]"> {/* 480*1.03=494.4 */}
              <h3 className="text-[#151bb1] font-semibold text-lg md:text-xl mb-2">Contact Us</h3>
              <h2 className="text-[#0b1131] font-extrabold text-4xl md:text-5xl leading-tight mb-4">Get in touch</h2>
              <p className="text-[#a0abb8] font-medium text-base mb-8">
                Feel free to contact us at any time, we will get back to you as soon as possible. Get started in just 30 seconds.
              </p>
              <div className="bg-white rounded-[24px] shadow-[0_8px_40px_0_rgba(21,27,177,0.10)] p-8 md:p-9">
                <form className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0f001a] mb-1">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="First_Name Last_Name" 
                      className="w-full border border-[#e3e7ed] rounded-[12px] p-3 text-base font-medium focus:ring-2 focus:ring-[#151bb1]/20 focus:border-[#151bb1] transition" 
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-[#0f001a] mb-1">
                      Age<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="age" 
                      placeholder="" 
                      className="w-full border border-[#e3e7ed] rounded-[12px] p-3 text-base font-medium focus:ring-2 focus:ring-[#151bb1]/20 focus:border-[#151bb1] transition" 
                    />
                  </div>
                  <div>
                    <label htmlFor="qualifications" className="block text-sm font-semibold text-[#0f001a] mb-1">
                      Qualifications<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="qualifications" 
                      placeholder="" 
                      className="w-full border border-[#e3e7ed] rounded-[12px] p-3 text-base font-medium focus:ring-2 focus:ring-[#151bb1]/20 focus:border-[#151bb1] transition" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0f001a] mb-1">
                      Phone<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="" 
                      className="w-full border border-[#e3e7ed] rounded-[12px] p-3 text-base font-medium focus:ring-2 focus:ring-[#151bb1]/20 focus:border-[#151bb1] transition" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0f001a] mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="" 
                      className="w-full border border-[#e3e7ed] rounded-[12px] p-3 min-h-[126px] text-base font-medium focus:ring-2 focus:ring-[#151bb1]/20 focus:border-[#151bb1] transition" 
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Checkbox
                      id="demo"
                      className="w-5 h-5 rounded border border-solid border-[#a0abb8]"
                    />
                    <label
                      htmlFor="demo"
                      className="text-[#0f001a] font-medium text-sm select-none"
                    >
                      FREE Demo
                    </label>
                  </div>
                  <Button className="w-[108%] max-w-none py-4 bg-[#ffc350] hover:bg-[#ffc350]/90 rounded-[12px] text-[#0f1377] font-semibold text-base shadow-none ml-[-4%]">
                    Submit and unlock a free Career consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
