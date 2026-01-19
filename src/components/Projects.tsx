import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Folder, Server } from 'lucide-react';

const projects = [
  {
    title: 'SpeakUp London',
    description: 'Admin system managing complete student lifecycle: enquiry, booking, classes, teachers, agents, and payments. Built robust backend APIs, business logic, integrations, and handled deployment.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Ant Design'],
    role: 'Backend APIs & Integrations',
    isBackendFocused: true,
  },
  {
    title: 'DropNPark',
    description: 'Backend system for car parking booking platform with multiple services. Designed APIs, database models, and integrated Stripe payment gateway with SendGrid email notifications.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'SendGrid'],
    role: 'Backend Development',
    isBackendFocused: true,
  },
  {
    title: 'Pigmy Bank - Admin Panel',
    description: 'End-to-end system for managing customers, transactions, and pigmy collections. Sole developer responsible for architecture, development, testing, and deployment.',
    tech: ['MERN Stack', 'Firebase', 'REST APIs', 'Auth'],
    role: 'Full Stack Solo Development',
    isBackendFocused: true,
  },
  {
    title: 'Zomato Frontend Clone',
    description: 'A responsive frontend clone of Zomato showcasing UI/UX skills with modern design patterns and smooth user experience.',
    tech: ['React', 'CSS', 'JavaScript'],
    role: 'Frontend Development',
    link: 'https://effortless-piroshki-5d938c.netlify.app/',
    isBackendFocused: false,
  },
  {
    title: 'Coffee Shop Web App',
    description: 'A beautiful coffee shop website with modern UI, product showcase, and responsive design for an engaging user experience.',
    tech: ['React', 'CSS', 'JavaScript'],
    role: 'Frontend Development',
    link: 'https://6572e0adb3088f633f5fdef0--snazzy-strudel-451a47.netlify.app/',
    isBackendFocused: false,
  },
];

const Projects = () => {
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
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-lg p-6 hover-lift group transition-all duration-300 hover:border-primary/50 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              } ${project.isBackendFocused ? 'border-l-2 border-l-primary' : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  {project.isBackendFocused ? (
                    <Server size={36} className="text-primary" />
                  ) : (
                    <Folder size={36} className="text-muted-foreground" />
                  )}
                  {project.isBackendFocused && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded code-font">
                      Backend
                    </span>
                  )}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-primary/70 text-xs mb-4 code-font">
                {project.role}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs code-font text-muted-foreground bg-muted/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
