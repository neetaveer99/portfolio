import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Creatoactive Studio',
    role: 'Full Stack Developer (MERN)',
    period: 'Jan 2024 - Present',
    description: [
      'Developed and maintained production admin panels managing student enquiries, bookings, payments, and lifecycle workflows',
      'Designed REST APIs using Node.js and Express with validation and centralized error handling',
      'Integrated third-party services including HubSpot, SendGrid, Landbot, Stripe, and Razorpay',
      'Improved existing live projects through backend refactoring and production issue fixes',
      'Managed deployment and environment configuration on Vercel and Render',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jun 2023 - Dec 2023',
    description: [
      'Built Pigmy Bank Management System (Admin Panel) for customer, transaction, and collection management',
      'Owned complete development lifecycle including design, backend, frontend, testing, and deployment',
      'Implemented authentication, role-based access, and secure data handling',
    ],
  },
  {
    company: '8 Miles Solution',
    role: 'Full Stack Developer',
    period: 'Aug 2022 - Mar 2023',
    description: [
      'Developed CRM dashboard for internal lead and client management',
      'Built reusable React components and optimized backend APIs',
      'Implemented search, filters, and pagination for large datasets',
    ],
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section ref={sectionRef} id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          Experience
        </h2>

        <div className={`flex flex-col md:flex-row gap-4 ${isVisible ? 'animate-fade-up animation-delay-100' : 'opacity-0'}`}>
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-3 text-left text-sm whitespace-nowrap transition-all duration-300 ${
                  activeIndex === index
                    ? 'text-primary bg-primary/10 md:border-l-2 md:border-primary md:-ml-px border-b-2 md:border-b-0 border-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="flex-1 min-h-[300px] p-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground">
                  {experiences[activeIndex].role}
                  <span className="text-primary"> @ {experiences[activeIndex].company}</span>
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <Calendar size={14} />
                  <span className="code-font">{experiences[activeIndex].period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {experiences[activeIndex].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
