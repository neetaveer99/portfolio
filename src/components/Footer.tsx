import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:neetav99@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm code-font">
            Designed & Built by Neeta Veer
          </p>
          {/* <p className="text-muted-foreground/60 text-xs mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-primary" /> using React
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
