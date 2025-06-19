import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "age", label: "Age", required: true, type: "input" },
    {
      id: "qualifications",
      label: "Qualifications",
      required: true,
      type: "input",
    },
    { id: "phone", label: "Phone", required: true, type: "input" },
    { id: "message", label: "Your Message", required: false, type: "textarea" },
  ];

  return (
    <section className="relative w-full py-32 bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/rectangle-14.svg)] bg-[100%_100%]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side image */}
          <div className="lg:w-1/2">
            <img
              className="w-full max-w-[822px]"
              alt="Contact illustration"
              src="https://c.animaapp.com/mc28gt7czECAIi/img/group-119.png"
            />
          </div>

          {/* Right side form */}
          <div className="lg:w-1/2 max-w-[488px]">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-[#151bb1] mb-2">
                Contact Us
              </h3>
              <h2 className="font-bold text-5xl text-[#0b1131] leading-[68px] mb-4">
                Get in touch
              </h2>
              <p className="font-medium text-sm text-[#a0abb8] leading-7 mb-8">
                Feel free to contact us at any time, we will get back to you as
                soon as possible. Get started in just 30 seconds.
              </p>
            </div>

            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6">
                  {/* Name field with floating label */}
                  <div className="relative">
                    <div className="relative border border-[#acb5c1] rounded-lg">
                      <div className="absolute -top-3 left-[11px] px-2 bg-white">
                        <span className="text-[#0f001a] opacity-80 text-base">
                          Name
                        </span>
                        <span className="text-[#ff0000]">*</span>
                      </div>
                      <Input
                        className="border-none h-[53px] pl-4 opacity-80 text-text-color"
                        defaultValue="First_Name Last_Name"
                      />
                    </div>
                  </div>

                  {/* Dynamically generated form fields */}
                  {formFields.map((field) => (
                    <div key={field.id} className="relative">
                      {field.type === "input" ? (
                        <Input
                          className="h-[53px] pl-4 border-[1.2px] border-[#acb5c1] rounded-lg"
                          placeholder={`${field.label}${field.required ? "*" : ""}`}
                        />
                      ) : (
                        <Textarea
                          className="h-[126px] pl-4 pt-4 border-[1.2px] border-[#acb5c1] rounded-lg"
                          placeholder={field.label}
                        />
                      )}
                    </div>
                  ))}

                  {/* Checkbox for free demo */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="free-demo"
                      className="w-5 h-5 border-[#a0abb8] rounded"
                    />
                    <label
                      htmlFor="free-demo"
                      className="font-medium text-sm text-[#0f001a] leading-7"
                    >
                      Free Demo
                    </label>
                  </div>

                  {/* Submit button */}
                  <Button className="w-full h-[39px] bg-[#ffc350] hover:bg-[#ffc350]/90 text-[#0f1377] font-semibold text-sm rounded">
                    Submit and unlock a free Career consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
