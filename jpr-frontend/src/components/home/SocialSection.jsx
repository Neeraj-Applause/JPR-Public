// SOCIAL SECTION WITH SECONDARY HOVER EFFECTS
import { FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  { 
    id: 1, 
    name: "YouTube", 
    icon: FaYoutube, 
    href: "#",
    color: "#FF0000" // YouTube red
  },
  { 
    id: 2, 
    name: "Facebook", 
    icon: FaFacebook, 
    href: "#",
    color: "#1877F2" // Facebook blue
  },
  { 
    id: 4, 
    name: "X", 
    icon: FaXTwitter, 
    href: "#",
    color: "#000000" // X (Twitter) black
  },
  { 
    id: 5, 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    href: "#",
    color: "#0A66C2" // LinkedIn blue
  },
];

export default function SocialSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
           Follow JPRI
          </h2>
          <div className="mt-3 mb-4 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
          <div className="text-sm sm:text-base text-[#555]">
           Our Social Handles(Working on it, will update soon)
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 px-20">
          {socials.map(({ id, name, icon: Icon, href, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
                group rounded-2xl border border-[#e3e3e3] bg-white
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                overflow-hidden flex flex-col cursor-pointer
                transition-all duration-500 ease-out
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                hover:-translate-y-2
                hover:border-transparent
                relative
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent
                before:opacity-0 before:transition-opacity before:duration-500
                hover:before:opacity-100
              "
              style={{
                '--hover-color': color
              }}
            >
              {/* Icon section */}
              <div
                className="
                  flex-1 flex items-center justify-center py-6 bg-white
                  transition-all duration-500 ease-out
                  group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-br 
                  before:from-transparent before:via-transparent before:to-white/30
                  before:opacity-0 before:transition-opacity before:duration-500
                  group-hover:before:opacity-100
                "
              >
                <Icon
                  className="
                    h-16 w-16 transition-all duration-500 ease-out
                    group-hover:scale-125 group-hover:rotate-3
                    filter group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                    relative z-10
                  "
                  style={{ 
                    color: color,
                    filter: 'brightness(1) contrast(1.1)'
                  }}
                />
                
                {/* Subtle glow effect */}
                <div 
                  className="
                    absolute inset-0 rounded-full blur-xl opacity-0 
                    transition-opacity duration-500 group-hover:opacity-20
                  "
                  style={{ backgroundColor: color }}
                />
              </div>

              {/* Label bar with enhanced styling */}
              <div
                className="
                  bg-primary text-white text-center
                  py-3 text-sm sm:text-base font-semibold
                  transition-all duration-500 ease-out
                  group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary
                  group-hover:text-white group-hover:shadow-inner
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-white/10 before:to-transparent
                  before:opacity-0 before:transition-opacity before:duration-500
                  group-hover:before:opacity-100
                "
              >
                <span className="relative z-10">{name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
