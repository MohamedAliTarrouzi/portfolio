import { Experience } from './Experience';
import { Button } from '@/components/Button';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { ArrowRight, Download, GitBranch} from 'lucide-react';
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/*Background*/}
      <div className="absolute inset-0">
        <img
          src="/bg-purple-2.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "rgba(216, 180, 254, 0.8)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Column - Text Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • AI & Data Specialist
              </span>
            </div>

            {/*Headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">Delivering <span className="text-primary glow-text"> intelligent </span> solutions with <br/> <span className="font-serif italic font-normal text-white">efficiency</span></h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hello, I'm Mohamed Ali Tarrouzi - a software engineer student specializing in Artifical Intelligence and Data Science. I build scalable, intelligent, and performant applications that 
                utilise AI to automate tasks while enhancing User Experience.
              </p>
            </div>

            {/*Call to Action*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/></Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5"/> Download CV
              </AnimatedBorderButton>
            </div>
            {/*Social Links*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                { icon: FaGithub, href: "https://github.com/MohamedAliTarrouzi"},
                { icon: FaLinkedin , href: "https://www.linkedin.com/in/mohamed-ali-tarrouzi-209735286/"},
              ].map((social,idx)=>(
                <a 
                key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5"/>}
                </a>
              ))}
            </div>
          </div>
          {/*Right Column - Profile Image*/}
          <div>
            {/*Profile Image*/}
            <div>
              {/* <img src="/profil.png" alt="Mohamed Ali Tarrouzi" className="w-full aspect-auto object-cover rounded-1"></img>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
