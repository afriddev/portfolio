import Animate from "../../utils/animations/Animate";
import { HiArrowRight } from "react-icons/hi";
import { useAppContext } from "../../utils/AppContext";

const HIGHLIGHT_SKILLS = [
  "React",
  "FastAPI",
  "Kubernetes",
  "TypeScript",
  "AI/LLM",
];

function AboutSection() {
  const { dispatch } = useAppContext();

  function HandleGetInTouch() {
    dispatch({ type: "setScrollView", payload: "CONTACT" });
    setTimeout(() => {
      dispatch({ type: "setScrollView", payload: undefined });
    }, 400);
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Animate delay={100}>
          <span className="section-label">Biography</span>
        </Animate>

        <Animate delay={200}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-16">
            What{" "}
            <span className="font-playfair italic text-zinc-500 font-normal">
              I Do
            </span>
          </h2>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Animate delay={300}>
            <div className="relative">
              <div className="aspect-[4/5] max-w-sm rounded-md overflow-hidden bg-zinc-100">
                <img
                  src="favicon.ico"
                  alt="Shaik Afrid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-green-500 text-white text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-md">
                Active
              </div>
            </div>
          </Animate>

          <div className="flex flex-col justify-center">
            <Animate delay={350}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
                  The Full-Stack Architect
                </span>
              </div>
            </Animate>

            <Animate delay={400}>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug mb-6">
                Building refined digital products with a focus on{" "}
                <span className="text-zinc-400">scalable architecture</span> and
                AI-driven engineering.
              </h3>
            </Animate>

            <Animate delay={450}>
              <p className="text-sm lg:text-base text-zinc-500 leading-relaxed mb-8">
                I bridge the gap between design and high-level engineering.
                Based in Hyderabad, I focus on creating digital experiences that
                are as technically sound as they are visually intuitive.
                Currently leading a sub-team at RailTel, delivering
                enterprise-grade full-stack solutions and AI prototypes.
              </p>
            </Animate>

            <Animate delay={500}>
              <div className="flex gap-12 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Location
                  </span>
                  <span className="text-sm lg:text-base font-semibold">
                    Hyderabad, India
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Status
                  </span>
                  <span className="text-sm lg:text-base font-semibold text-green-600">
                    Open to Work
                  </span>
                </div>
              </div>
            </Animate>

            <Animate delay={550}>
              <div className="flex flex-wrap gap-2 mb-8">
                {HIGHLIGHT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] uppercase tracking-wider text-zinc-500 border border-zinc-200 rounded-full px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 px-3 py-1">
                  +15 more
                </span>
              </div>
            </Animate>

            <Animate delay={600}>
              <button
                className="btn-outline w-full lg:w-fit text-[11px] justify-center"
                onClick={HandleGetInTouch}
              >
                Get in touch
                <HiArrowRight className="btn-icon w-3.5 h-3.5" />
              </button>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
