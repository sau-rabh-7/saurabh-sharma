import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Cloud, Cpu, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      title: "Languages & Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "Go", icon: "🔵" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Express.js", icon: "🟢" },
        { name: "Django", icon: "🎯" },
        { name: "Spring Boot", icon: "🍃" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" }
      ]
    }
  ];

  const quickActions = [
    { label: "View Projects", href: "/projects", variant: "hero" as const },
    { label: "Experience", href: "/experience", variant: "outline" as const },
    { label: "Contact Me", href: "/contact", variant: "outline" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animate-gradient opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="text-gradient block">Full Stack</span>
                <span className="block">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about building scalable web applications and AI-powered solutions. 
                Experienced in modern technologies and development practices.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
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

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              {quickActions.map((action, index) => (
                <Button 
                  key={action.label}
                  variant={action.variant} 
                  size="lg" 
                  asChild
                  className="hover-glow animation-delay-400"
                  style={{ animationDelay: `${index * 150 + 400}ms` }}
                >
                  <a href={action.href}>{action.label}</a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content - Profile & Skills */}
          <div className="space-y-8 animate-fade-in animation-delay-600">
            {/* Profile Image */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-full h-full glass-strong rounded-full overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.title} 
                  className="glass-card p-6 rounded-2xl hover-lift"
                  style={{ animationDelay: `${categoryIndex * 200 + 800}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-smooth hover-lift"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float animation-delay-400"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;