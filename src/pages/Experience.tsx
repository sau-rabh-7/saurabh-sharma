import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Calendar, MapPin, Building, ExternalLink, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      logo: "🚀",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      website: "https://techinnovations.com",
      description: "Leading development of scalable web applications and mentoring junior developers in modern technologies.",
      responsibilities: [
        "Architected and developed 5+ full-stack applications using React, Node.js, and AWS",
        "Led a team of 4 developers, conducting code reviews and establishing development standards",
        "Improved application performance by 40% through optimization and best practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 6 junior developers in modern web development practices"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "GraphQL"],
      achievements: [
        "Employee of the Quarter Q3 2023",
        "Successfully delivered 3 major projects ahead of schedule",
        "Reduced bug reports by 35% through improved testing practices"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      logo: "💡",
      position: "Full Stack Developer",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      website: "https://startupxyz.com",
      description: "Developed MVP products and scaled applications from 0 to 10k+ users in fast-paced startup environment.",
      responsibilities: [
        "Built and maintained 3 full-stack applications from conception to production",
        "Collaborated with design team to implement pixel-perfect responsive interfaces",
        "Integrated third-party APIs including payment processors and social media platforms",
        "Optimized database queries improving response times by 50%",
        "Participated in agile development cycles and sprint planning"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Socket.io", "Redis", "Heroku"],
      achievements: [
        "Launched 2 successful products that gained 10k+ users each",
        "Reduced server costs by 30% through optimization",
        "Implemented real-time features increasing user engagement by 25%"
      ]
    },
    {
      id: 3,
      company: "Digital Solutions Corp",
      logo: "🏢",
      position: "Frontend Developer",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      website: "https://digitalsolutions.com",
      description: "Specialized in creating responsive, accessible web applications for enterprise clients.",
      responsibilities: [
        "Developed responsive web applications for 8+ enterprise clients",
        "Ensured cross-browser compatibility and accessibility standards (WCAG 2.1)",
        "Collaborated with UX/UI designers to implement modern design systems",
        "Performed code reviews and maintained high code quality standards",
        "Created and maintained component libraries for team efficiency"
      ],
      technologies: ["React", "Vue.js", "SASS", "JavaScript", "Figma", "Storybook"],
      achievements: [
        "Improved website accessibility scores to 95%+ for all clients",
        "Created reusable component library used across 5 projects",
        "Reduced development time by 40% through code standardization"
      ]
    },
    {
      id: 4,
      company: "CodeBootcamp Academy",
      logo: "🎓",
      position: "Web Development Instructor",
      location: "Boston, MA",
      period: "2018 - 2019",
      type: "Part-time",
      website: "https://codebootcamp.com",
      description: "Taught full-stack web development to aspiring developers and created curriculum content.",
      responsibilities: [
        "Instructed 50+ students in HTML, CSS, JavaScript, and React fundamentals",
        "Developed curriculum and hands-on projects for web development bootcamp",
        "Mentored students through career transitions and job preparation",
        "Conducted technical interviews and assessment evaluations",
        "Organized coding workshops and guest speaker events"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "VS Code"],
      achievements: [
        "95% student satisfaction rate across all cohorts",
        "Helped 30+ students secure developer positions",
        "Created 10+ real-world projects for student portfolio development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  // CHANGE 1: Responsive gap between marker and card
                  className="relative flex gap-4 lg:gap-8 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                  {/* Timeline marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-elegant">
                    </div>
                  </div>
                  
                  {/* Content */}
                  {/* CHANGE 2: Responsive padding inside the card */}
                  <div className="flex-1 glass-strong rounded-2xl p-6 sm:p-8 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                          <Building className="w-5 h-5" />
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-smooth flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-2 lg:text-right">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-muted/50 hover:bg-muted transition-smooth">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-accent">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;