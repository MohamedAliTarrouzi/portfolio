import type { ComponentType, CSSProperties } from "react";
import {
  Code2,
  Cpu,
  Server,
  Layout,
  Workflow,
  Database,
  Layers,
  Zap,
} from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiFastapi,
  SiDjango,
  SiDotnet,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiApacheairflow,
  SiApachespark,
  SiAirbyte,
  SiDocker,
  SiMinio,
  SiStreamlit,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiOllama,
  SiN8N,
  SiAnthropic,
  SiLangchain,
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaCss3Alt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

type IconProps = {
  className?: string;
  style?: CSSProperties;
};

type SkillItem = {
  name: string;
  icon: ComponentType<IconProps>;
  color?: string;
};

type SkillCategory = {
  title: string;
  icon: ComponentType<IconProps>;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM Systems",
    icon: Cpu,
    skills: [
      { name: "RAG Systems", icon: FaBrain, color: "#a78bfa" },
      { name: "LangChain", icon: SiLangchain, color: "#1c3c3c" },
      { name: "LangGraph", icon: Layers, color: "#8b5cf6" },
      { name: "Ollama (Llama 3, Mistral)", icon: SiOllama, color: "#ffffff" },
      { name: "Claude API", icon: SiAnthropic, color: "#d97706" },
      { name: "LiteLLM Gateway", icon: Zap, color: "#f59e0b" },
      { name: "n8n AI Automation", icon: SiN8N, color: "#ff6d5a" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599c" },
      { name: "C#", icon: TbBrandCSharp, color: "#512bd4" },
      { name: "Java", icon: FaJava, color: "#ea2d2e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "PHP", icon: SiPhp, color: "#777bb4" },
      { name: "SQL", icon: FaDatabase, color: "#00758f" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#092e20" },
      { name: ".NET Core", icon: SiDotnet, color: "#512bd4" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "RESTful APIs", icon: Server, color: "#8b5cf6" },
      { name: "SQLite", icon: SiSqlite, color: "#003b57" },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "TypeScript UI", icon: SiTypescript, color: "#3178c6" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "Vite", icon: SiVite, color: "#646cff" },
      { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
    ],
  },
  {
    title: "Data & DevOps Pipelines",
    icon: Workflow,
    skills: [
      { name: "Apache Spark", icon: SiApachespark, color: "#e25a1c" },
      { name: "Apache Airflow", icon: SiApacheairflow, color: "#017cee" },
      { name: "Airbyte", icon: SiAirbyte, color: "#615eff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "MinIO S3", icon: SiMinio, color: "#c72c48" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
  {
    title: "Databases & Analytics",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MSSQL", icon: FaDatabase, color: "#cc292b" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Power BI", icon: Database, color: "#f2c811" },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              Technologies
            </span>
            .
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Technologies, frameworks, and tools I utilize to build intelligent
            applications and scalable systems.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pill Tags with Logos */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skillIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface border border-border/60 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-surface/80 transition-all duration-300 group/pill shadow-sm"
                      >
                        <IconComponent
                          className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover/pill:scale-110"
                          style={{
                            color: skill.color || "var(--color-primary)",
                          }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
