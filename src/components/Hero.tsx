import { Mail, Github, Linkedin, ArrowRight, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-primary code-font text-sm md:text-base mb-4 animate-fade-up">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Neeta Veer
        </h1>

        {/* Title with Backend Focus */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <Server className="text-primary" size={28} />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
            MERN Stack Developer
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-primary/80 text-lg md:text-xl mb-6 animate-fade-up" style={{ animationDelay: '250ms' }}>
          Backend & Product-Focused Engineer
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '300ms' }}>
          3+ years of experience building production-grade <span className="text-primary font-medium">backend systems</span>, 
          REST APIs, and admin panels. Strong in <span className="text-primary font-medium">Node.js</span>, 
          payment integrations, and complete project ownership.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <a href="mailto:mujahedpatel86@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
            <Mail size={24} />
          </a>
          <a href="https://github.com/mujahedpatel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/mujahedpatel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
            <Linkedin size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 code-font text-sm animate-fade-up hover-lift"
          style={{ animationDelay: '500ms' }}
        >
          View My Work
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
