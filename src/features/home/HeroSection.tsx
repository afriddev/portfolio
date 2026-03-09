import { useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import Animate from "../../utils/animations/Animate";
import { useAppContext } from "../../utils/AppContext";

function HeroSection() {
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const { dispatch } = useAppContext();

  function HandleResumeClick() {
    resumeRef.current?.click();
  }

  function HandleCollaborateClick() {
    dispatch({ type: "setScrollView", payload: "CONTACT" });
    setTimeout(() => {
      dispatch({ type: "setScrollView", payload: undefined });
    }, 400);
  }

  return (
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col gap-8 lg:gap-10">
          <Animate delay={100}>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
                Open to Work
              </span>
            </div>
          </Animate>

          <Animate delay={200}>
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.9] tracking-tight">
              <span className="block text-foreground">SHAIK</span>
              <span className="block text-zinc-500">AFRID</span>
            </h1>
          </Animate>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-20">
            <Animate delay={300}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-zinc-400" />
                <span className="text-sm lg:text-base xl:text-lg uppercase tracking-[0.3em] text-zinc-600 font-medium">
                  Software Engineer
                </span>
              </div>
            </Animate>

            <Animate delay={400}>
              <p className="text-base lg:text-lg xl:text-xl text-zinc-500 leading-relaxed max-w-lg">
                Crafting high-performance digital systems with a focus on
                scalable architecture, AI-driven solutions, and clean
                engineering.
              </p>
            </Animate>
          </div>

          <Animate delay={500}>
            <div className="flex items-center gap-4 mt-4">
              <button className="btn-primary" onClick={HandleCollaborateClick}>
                Collaborate
                <HiArrowRight className="btn-icon w-3.5 h-3.5" />
              </button>
              <button className="btn-outline" onClick={HandleResumeClick}>
                Resume
                <LiaDownloadSolid className="btn-icon w-4 h-4" />
              </button>
            </div>
          </Animate>
        </div>
      </div>

      <Animate delay={600}>
        <div className="hidden lg:flex flex-col gap-4 fixed right-10 top-1/2 -translate-y-1/2 z-40">
          <a
            href="https://www.linkedin.com/in/afriddev/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaLinkedinIn className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://github.com/afriddev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaGithub className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://x.com/AFRIDANON"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaXTwitter className="w-[18px] h-[18px]" />
          </a>
          <a
            href="mailto:afridayan01@gmail.com"
            className="social-icon-link"
          >
            <IoMailOutline className="w-[18px] h-[18px]" />
          </a>
        </div>
      </Animate>

      <a
        href="Shaik afrid - Resume.pdf"
        download
        ref={resumeRef}
        className="hidden"
      >
        Resume
      </a>
    </section>
  );
}

export default HeroSection;
