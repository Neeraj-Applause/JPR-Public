// SOCIAL SECTION WITH SECONDARY HOVER EFFECTS
import youtubeIcon from "../../assets/icons/social/youtube.svg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import newsletterIcon from "../../assets/icons/social/newsletter.svg";
import twitterIcon from "../../assets/icons/social/x.svg";
import linkedinIcon from "../../assets/icons/social/linkedIn.svg";

const socials = [
  { id: 1, name: "YouTube", icon: youtubeIcon, href: "#" },
  { id: 2, name: "Facebook", icon: facebookIcon, href: "#" },
  { id: 3, name: "Newsletter", icon: newsletterIcon, href: "#" },
  { id: 4, name: "Twitter", icon: twitterIcon, href: "#" },
  { id: 5, name: "LinkedIn", icon: linkedinIcon, href: "#" },
];

export default function SocialSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What is JPRI team up to?
          </h2>
          <div className="mt-3 mb-4 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-[#555]">
            Our Social Handles
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {socials.map(({ id, name, icon, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
                group rounded-3xl border border-[#e3e3e3] bg-white
                shadow-[0_8px_18px_rgba(0,0,0,0.06)]
                overflow-hidden flex flex-col cursor-pointer
                transition-all duration-300
                hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]
                hover:bg-[#FFE8E8]
              "
            >
              {/* Icon section */}
              <div
                className="
                  flex-1 flex items-center justify-center py-6 bg-white
                  transition-colors duration-300
                  group-hover:bg-secondary/10
                "
              >
                <img
                  src={icon}
                  alt={name}
                  className="
                    h-16 object-contain transition-transform duration-300
                    group-hover:scale-110 group-hover:drop-shadow-md
                  "
                />
              </div>

              {/* Label bar */}
              <div
                className="
                  bg-primary text-white text-center
                  py-3 text-sm sm:text-base font-semibold
                  transition-all duration-300
                  group-hover:bg-secondary group-hover:text-white
                "
              >
                {name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
