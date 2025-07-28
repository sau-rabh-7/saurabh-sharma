import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
    frameworks: ["React", "Next.js", "Express.js", "Django", "Spring Boot"],
    tools: ["AWS", "Docker", "Git", "MongoDB", "PostgreSQL"],
    specialties: ["Full-Stack Development", "Machine Learning", "DevOps", "API Design"],
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Passionate about building scalable web applications and AI-powered solutions. 
              Experienced in MERN stack, cloud technologies, and modern development practices.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                asChild
                className="group"
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Right Content - Profile & Skills */}
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative w-full h-full bg-muted overflow-hidden shadow-elegant blob-border group-hover:blob-animate">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;