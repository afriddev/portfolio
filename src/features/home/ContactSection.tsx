import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import Animate from "../../utils/animations/Animate";

interface SocialLink {
  number: string;
  name: string;
  url: string;
  rightIcon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    number: "01",
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=afridayan01@gmail.com&su=Hey",
    rightIcon: <IoMailOutline className="w-5 h-5" />,
  },
  {
    number: "02",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/afriddev/",
    rightIcon: <FaLinkedinIn className="w-5 h-5" />,
  },
  {
    number: "03",
    name: "GitHub",
    url: "https://github.com/afriddev",
    rightIcon: <FaGithub className="w-5 h-5" />,
  },
];

function ContactSection() {
  function HandleLinkClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Animate delay={100}>
          <span className="section-label">Available for Work</span>
        </Animate>

        <Animate delay={200}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-16">
            Get In{" "}
            <span className="font-playfair italic text-zinc-500 font-normal">
              Touch
            </span>
          </h2>
        </Animate>

        <Animate delay={300}>
          <div className="flex flex-col">
            {SOCIAL_LINKS.map((link) => (
              <div
                key={link.number}
                className="social-row group"
                onClick={() => HandleLinkClick(link.url)}
              >
                <div className="flex items-center gap-6">
                  <span className="social-num">{link.number}</span>
                  <span className="social-name">{link.name}</span>
                </div>
                <div className="social-icon">{link.rightIcon}</div>
              </div>
            ))}
          </div>
        </Animate>

        <Animate delay={400}>
          <div className="mt-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 block mb-3">
              Based in Hyderabad
            </span>
            <a
              href="mailto:afridayan01@gmail.com"
              className="flex items-center gap-3 group cursor-pointer w-fit"
            >
              <span className="text-lg lg:text-xl font-bold tracking-wide group-hover:text-zinc-500 transition-colors">
                AFRIDAYAN01@GMAIL.COM
              </span>
              <span className="text-foreground group-hover:text-foreground transition-all duration-500 group-hover:rotate-[360deg] inline-block">
                <HiArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default ContactSection;
