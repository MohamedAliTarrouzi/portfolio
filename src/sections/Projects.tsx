import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "SecretScan AI",
    description:
      "An intelligent application that scans your code repositories for misplaced credentials using Regular Expressions (REGEX), Shannon Entropy scoring, and Large Language Models (LLMs).",
    image: "/projects/secretscan.png",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "LiteLLMGateway",
      "SQLite",
      "Claude API",
    ],
    github: "https://github.com/MohamedAliTarrouzi",
  },
  {
    title: "Health Assistant RAG",
    description:
      "An intelligent medical assistant powered by a RAG (Retrieval-Augmented Generation) system trained on medical datasets, providing accurate insights for diabetic patient care.",
    image: "/projects/health.jpeg",
    tags: [
      "Python",
      "FastAPI",
      "JavaScript",
      "React",
      "PostgreSQL",
      "RAG",
      "Ollama",
      "Llama3",
      "Mistral",
    ],
    github: "https://github.com/MohamedAliTarrouzi",
  },
  {
    title: "Student Success Prediction",
    description:
      "A predictive analytics tool that estimates student academic outcomes based on input features using Decision Trees and Linear Regression trained on real-world datasets.",
    image: "/projects/student.png",
    tags: [
      "Python",
      "Streamlit",
      "Linear Regression",
      "Decision Tree",
      "MongoDB",
      "NoSQL",
    ],
    github: "https://github.com/MohamedAliTarrouzi",
  },
  {
    title: "Agentic Student Orientation System",
    description:
      "An intelligent orientation platform matching students to courses, internships, and careers using multi-agent orchestration via n8n, LangChain, and RAG over PDF documents.",
    image: "/projects/conseil.png",
    tags: [
      "Python",
      "FastAPI",
      "NoSQL",
      "MongoDB",
      "RAG",
      "n8n",
      "LangChain",
      "Ollama",
      "Llama3",
    ],
    github: "https://github.com/MohamedAliTarrouzi",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden scroll-mt-24">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Engineering Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              showcase growth.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent AI and software engineering projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-border/40 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                <div className="relative overflow-hidden aspect-video">
                  {/* Project Image with slight zoom in on hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="p-1.5 rounded-lg hover:bg-surface text-muted-foreground hover:text-primary transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3.5 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/MohamedAliTarrouzi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
