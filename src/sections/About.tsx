import { Lightbulb, Mountain, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creating scalable solutions through innovative thinking",
  },
  {
    icon: Mountain,
    title: "Persistence",
    description:
      "Remaining on overcoming obstacles and challenges to deliver value",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Establishing strong relations with teammates and clients",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animated-fade-in">
              <span className="text-secondary-foreground tex-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Refining the process,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one step at a time
              </span>
              .
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a final year software engineer student passionate about
                Artificial Intelligence and Data Science with over 2 years of
                experience through developping applications and intelligent
                services in academic and intership environments. I integrated in
                this field through my university course and through it I found
                my passion through crafting intelligent and innovative services.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">"For in the dew of little things the heart finds its morning and is refreshed. " -Kahlil Gibran</p>
            </div>
          </div>
          {/*Right Column - Highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,idx)=>(
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
