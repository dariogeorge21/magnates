
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Home", isActive: true },
    { title: "Contact Us", isActive: false },
  ];

  // Social media icons data
  const socialIcons = [
    {
      alt: "Image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/image-106.png",
    },
    {
      alt: "Image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/image-107.png",
    },
    {
      alt: "Image",
      src: "https://c.animaapp.com/mc28gt7czECAIi/img/image-108.png",
    },
  ];

  return (
    <footer className="w-full bg-white py-16">
      <div className="container mx-auto max-w-[1208px]">
        <Separator className="mb-12" />

        <div className="flex flex-col space-y-12">
          {/* Logo section */}
          <div className="flex items-center">
            <div className="w-[42px] h-14 rotate-180 relative">
              <div className="absolute w-[42px] h-[45px] top-0 rotate-180 left-0 bg-[url(https://c.animaapp.com/mc28gt7czECAIi/img/group-16529.png)] bg-[100%_100%]" />
              <img
                className="absolute w-[25px] h-3 top-11 left-[11px] -rotate-180"
                alt="Vector"
                src="https://c.animaapp.com/mc28gt7czECAIi/img/vector-470.svg"
              />
            </div>
            <div className="ml-12">
              <div className="[font-family:'Reem_Kufi',Helvetica] font-normal text-[#0f1377] text-[11px] leading-[normal] ">
                THE
              </div>
              <img
                className="w-[167px] h-6"
                alt="Magnates"
                src="https://c.animaapp.com/mc28gt7czECAIi/img/magnates.svg"
              />
            </div>
          </div>

          {/* Main footer content */}
          <div className="flex justify-between">
            <div className="flex flex-col space-y-8 max-w-[289px]">
              <p className="[font-family:'Poppins',Helvetica] font-medium text-[#a0abb8] text-xs leading-6">
                The Magnates is the highest rated expert team in the Kerala to
                &quot;An Academy of Professionals, For Future
                Professionals&quot;
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-[#a0abb8] text-xs leading-6">
                ©2025 TheMagnates
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              {/* Navigation links */}
              <div className="flex space-x-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`[font-family:'Poppins',Helvetica] font-semibold text-sm leading-[normal] ${
                      link.isActive ? "text-[#0f1377]" : "text-[#a0abb8]"
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Social media icons */}
              <div className="flex space-x-4 justify-end">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" className="block">
                    <img
                      className="w-[31px] h-[31px] object-cover"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
