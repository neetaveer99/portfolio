import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Server, 
  Plug, 
  Wrench,
  FileCode,
  Database,
  Globe,
  Palette
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Database Design'],
    isPrimary: true,
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'JavaScript (ES6+)', 'Ant Design', 'Tailwind CSS'],
    isPrimary: false,
  },
  {
    title: 'Integrations',
    icon: Plug,
    skills: ['Stripe', 'Razorpay', 'HubSpot', 'SendGrid', 'Landbot'],
    isPrimary: true,
  },
  {
    title: 'Tools & Deployment',
    icon: Wrench,
    skills: ['Git', 'Postman', 'Firebase', 'Vercel', 'Render'],
    isPrimary: false,
  },
];

const Skills = () => {
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
    <section ref={sectionRef} id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-card rounded-lg p-6 hover-lift ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                } ${category.isPrimary ? 'border-l-2 border-l-primary' : ''}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.isPrimary ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <IconComponent size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    {category.isPrimary && (
                      <span className="text-xs text-primary code-font">Core Skill</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${category.isPrimary ? 'bg-primary' : 'bg-muted-foreground'}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
