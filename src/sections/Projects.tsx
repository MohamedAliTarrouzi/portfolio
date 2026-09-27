import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "SecretScan AI",
    description:
      "An application that scans your code for misplaced credentials using REGEX(Regular Expressions), Shanon Entropy and LLMs ( Large Language Models).",
    image: "/projects/secretscan.png",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "LiteLLMGateway",
      "SQLite",
      "ClaudeAPI",
    ],
    github: "#",
  },
  {
    title: "Health Assistant",
    description:
      " An intelligent application that answers medical related questions. It is based on a RAG system trained on real world sources, and extracts information from data about diabetic patients.",
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
    github: "#",
  },
  {
    title: "Student Prediction",
    description:
      "A mini project that allows a student to fill in certain fields that will determene whether they will pass or fail. It based on a machine learning model that uses linear regression and decision tree, and is trained and tested on real world data.",
    image: "/projects/student.png",
    tags: [
      "Python",
      "Streamlit",
      "Linear Regression",
      "Decision Tree",
      "MongoDB",
      "NoSQL",
    ],
    github: "#",
  },
  {
    title: "Student Orientation",
    description:
      "An intelligent application that takes the students input through specific fields like name, course, interest, resume, and whether they want to which course or internship or job would be fit for them. It uses RAG trained on pdf souces, and multiple agents orchestrated by n8n and langchain.",
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
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/*Bg glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              showcase growth.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent academic projects.
          </p>
        </div>
        {/*Projects Grid*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {/*Image*/}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/*Overlay Links Implement later
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transform-opacity duration-300 ">
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5"/>
                  </a>
                </div>
                */}
              </div>
              {/*Content*/}
              <div className="p-6 space-y-4 ">
                <div className="flex items-start justfiy-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*View All*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500 ">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
