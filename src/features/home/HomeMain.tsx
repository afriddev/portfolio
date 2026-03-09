import { useEffect, useRef } from "react";
import { useAppContext } from "../../utils/AppContext";
import NavBar from "../../utils/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

function HomeMain() {
  const { scrollView } = useAppContext();
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollView) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
      ABOUT: aboutRef,
      SKILLS: skillsRef,
      PROJECTS: projectsRef,
      EXPERIENCE: experienceRef,
      CONTACT: contactRef,
    };

    const targetRef = refMap[scrollView];
    if (targetRef?.current) {
      const yOffset = -80;
      const y =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [scrollView]);

  return (
    <div className="w-full min-h-screen grid-bg">
      <NavBar />
      <main>
        <HeroSection />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={skillsRef}>
          <SkillsSection />
        </div>
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
        <FooterSection />
      </main>
    </div>
  );
}

export default HomeMain;
