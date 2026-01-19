import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className={`text-3xl md:text-5xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Let's Connect
        </h2>
        
        <p className={`text-muted-foreground text-lg mb-12 leading-relaxed ${isVisible ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Info */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          <a
            href="mailto:neetav99@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">neetav99@gmail.com</p>
            </div>
          </a>
          
          <a
            href="tel:8446141538"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Phone size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground">8446141538</p>
            </div>
          </a>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin size={20} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">Kharadi, Pune</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:neetav99@gmail.com"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-all duration-300 hover-lift ${isVisible ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}
        >
          <Send size={18} />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
