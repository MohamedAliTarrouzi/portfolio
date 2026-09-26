const projects = [
  {
    title: "SecretScan AI",
    description:
      "An application that scans your code for misplaced credentials using REGEX(Regular Expressions), Shanon Entropy and LLMs ( Large Language Models).",
    image: "",
    tags: [
      "FastAPI",
      "React",
      "Python",
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
    image: "",
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
    image: "",
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
    image: "",
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
            Projects that <span className="font-serif italic font-normal text-white"> showcase growth.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
