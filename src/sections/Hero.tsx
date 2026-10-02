import { useMemo } from 'react';
import { Button } from '@/components/Button';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const skills = [
  "Python",
  "C++",
  "C#",
  "Java",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "FastAPI",
  "Django",
  ".NET",
  "PHP",
  "Laravel",
  "RAG Systems",
  "LangChain",
  "LangGraph",
  "Ollama",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "MSSQL",
  "Apache Airflow",
  "Airbyte",
  "n8n",
  "MinIO",
  "Streamlit",
  "Power BI",
  "Git & GitHub",
];

export const Hero = () => {
  // Pre-generate random positions for background dots once to ensure pure rendering
  const bgDots = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${(i * 137.5) % 100}%`,
      top: `${(i * 97.3) % 100}%`,
      duration: `${15 + (i % 5) * 4}s`,
      delay: `${(i % 6) * 0.8}s`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg-purple-2.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "rgba(216, 180, 254, 0.8)",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • AI & Data Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Delivering <span className="text-primary glow-text">intelligent</span> solutions with{" "}
                <br />
                <span className="font-serif italic font-normal text-white">efficiency</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hello, I'm Mohamed Ali Tarrouzi — a software engineering student specializing in Artificial Intelligence and Data Science. I build scalable, intelligent, and performant applications that utilize AI to automate tasks while enhancing User Experience.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                href={encodeURI("/Mohamed Ali Tarrouzi CV .pdf")}
                download="Mohamed-Ali-Tarrouzi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground font-medium">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/MohamedAliTarrouzi", label: "GitHub" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/mohamed-ali-tarrouzi-209735286/",
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile2.jpeg"
                  alt="Mohamed Ali Tarrouzi Profile"
                  className="w-full aspect-auto object-cover rounded-2xl"
                />
                {/* Floating Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Available for Internship & Roles</span>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 shadow-xl">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground font-medium">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center font-medium">
            Technologies & Frameworks I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  );
};
