import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Github, Linkedin, Mail, Download, ExternalLink, Star, MapPin, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const contactLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/username",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/username",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:hello@example.com",
    },
    {
      icon: <Download className="w-5 h-5" />,
      label: "Resume",
      href: "/resume.pdf",
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "Go", icon: "🔵" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Express.js", icon: "🟢" },
        { name: "Django", icon: "🎯" },
        { name: "Spring Boot", icon: "🍃" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "📝" }
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2020-2022",
      logo: "🏛️"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      period: "2016-2020",
      logo: "🎓"
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack platform with modern UI and secure payments",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      href: "/projects"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat with AI-powered features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["React", "Express.js", "OpenAI"],
      href: "/projects"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative workspace with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      href: "/projects"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animate-gradient opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image and Name */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Profile Images */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-full h-full glass-strong rounded-full overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                Saurabh Sharma
              </h1>
              <p className="text-xl text-muted-foreground">
                Passionate Developer & Problem Solver
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link, index) => (
                <Button
                  key={link.label}
                  variant="outline"
                  asChild
                  className="group glass-card hover-lift animation-delay-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {link.icon}
                    {link.label}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content - Introduction */}
          <div className="space-y-8 animate-fade-in animation-delay-600 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Building the <span className="text-gradient">Future</span> with Code
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a passionate developer who loves creating scalable web applications and 
                exploring cutting-edge technologies. With expertise in modern tech stacks, 
                I turn complex problems into elegant solutions.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="hover-glow">
                <a href="/projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-glow">
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float animation-delay-400"></div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="skill-section hover-lift"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:transform hover:scale-105"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="glass-card p-6 rounded-xl hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    {edu.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center gap-2">
              <Star className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my best work and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" asChild className="w-full hover-glow">
                      <a href={project.href}>
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild className="hover-glow">
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;