
export const AboutUsSection = (): JSX.Element => {
  // Content paragraphs
  const paragraphs = [
    "We are a professionally-driven skill academy offering globally certified programs in Finance — designed to meet the evolving needs of today's job market.",
    "Our programs are industry-aligned, backed by certifications like IAAP UK, NSDC, Cambridge, & BFSI and delivered by expert trainers with real-world experience. From mastering essential tools to gaining internship exposure and assured placement opportunities, we prepare you to walk into any job interview with confidence.",
    "With a strong focus on outcomes, not just instruction, we blend classroom learning with practical training — ensuring every student becomes job-ready and not just course-complete.",
  ];

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#151bb1] text-2xl mb-4">
              About Us
            </h3>

            <h2 className="font-['Poppins',Helvetica] font-bold text-5xl leading-[68px] mb-12">
              <span className="text-[#0b1131]">At </span>
              <span className="text-[#151bb1]">The Magnates</span>
              <span className="text-[#0b1131]">
                , we don&apos;t&nbsp;&nbsp;just&nbsp;&nbsp;teach : <br />
                we transform careers.
              </span>
            </h2>

            <div className="space-y-8">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['Poppins',Helvetica] font-medium text-[#a0abb8] text-sm leading-7"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <img
              className="max-w-full h-auto"
              alt="The Magnates illustration"
              src="https://c.animaapp.com/mc28gt7czECAIi/img/group-114.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
