import Animate from "../../utils/animations/Animate";

const SKILLS = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "Spring Boot",
  "NestJS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "Kafka",
  "gRPC",
  "ELK Stack",
  "CI/CD",
  "Git",
  "Linux",
  "Flutter",
  "Kotlin",
  "Java",
  "C++",
  "RAG",
  "GraphRAG",
  "LLM",
  "PyTorch",
  "Embeddings",
  "LangChain",
  "Hugging Face",
  "Shell Scripting",
  "Grafana",
];

function SkillsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <Animate delay={100}>
          <span className="section-label mx-auto justify-center">
            Inventory
          </span>
        </Animate>

        <Animate delay={200}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-16">
            Tech{" "}
            <span className="font-playfair italic text-zinc-500 font-normal">
              Stack
            </span>
          </h2>
        </Animate>

        <Animate delay={300}>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default SkillsSection;
