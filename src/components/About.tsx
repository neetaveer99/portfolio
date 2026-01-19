import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    { degree: 'M.Sc Computer Science', institution: 'Shree Shivaji College, Parbhani', year: '2021' },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className={`md:col-span-2 space-y-4 ${isVisible ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Neeta, a <span className="text-primary font-medium">Backend & Product-Focused Engineer</span> with 
              3+ years of experience building and maintaining production-grade admin panels and backend systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Strong in <span className="text-primary">backend development</span>, 
              <span className="text-primary"> payment gateway integrations</span>, 
              <span className="text-primary"> REST API design</span>, and deployment. 
              Experienced in improving live systems and handling complete project ownership from architecture to production.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in the MERN stack with extensive experience in third-party integrations 
              including Stripe, Razorpay, HubSpot, SendGrid, and Landbot.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Pune, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">8446141538</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">neetav99@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <div className="glass-card rounded-lg p-6 hover-lift">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-medium text-foreground text-sm">{edu.degree}</h4>
                    <p className="text-muted-foreground text-xs">{edu.institution}</p>
                    <p className="text-primary text-xs code-font">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
