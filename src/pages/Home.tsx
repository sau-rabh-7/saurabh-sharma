import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Github, Linkedin, Mail, Download, ExternalLink, Star, MapPin, GraduationCap, Calendar, Award, Target, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DecryptedText from "@/components/ui/DecryptedText";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const profileImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
  ];

  const contactLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/sau-rabh-7" },
    { icon: <Linkedin className="w-5 h-5" />, label: "Linkedin", href: "https://linkedin.com/in/saurabhsharma98048" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:saurabh98048@gmail.com" },
    { icon: <Download className="w-5 h-5" />, label: "Resume", href: "https://drive.google.com/file/d/1234567890/view" },
  ];

  const skillCategories = [
    { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"] },
    { title: "Frameworks", skills: ["React", "Next.js", "Express.js", "Django", "Flask", "TensorFlow", "PyTorch", "Bootstrap", "Tailwind"] },
    { title: "Tools", skills: ["AWS", "Docker", "Kubernetes", "Git", "GitHub", "MongoDB", "PostgreSQL", "MySQL"] }
  ];

  const education = [
    { degree: "Bachelor of Technology in Computer Science", institution: "Vellore Institute of Technology", period: "2022-2026", location: "Vellore, India", gpa: "8.96/10.0" },
    { degree: "Higher Secondary Education", institution: "Mithila Institute of Technology", period: "2020-2022", location: "Janakpur, Nepal", gpa: "3.22/10.0" },
    { degree: "Secondary Education Examination (SEE)", institution: "Daffodils Public School", period: "2006-2019", location: "Janakpur, Nepal", gpa: "3.95/4.0" },
  ];

  const coreSkills = ["Full Stack Development", "Cloud Architecture", "System Design", "API Development", "Database Design", "Applied Machine Learning & AI Integration"];
  const achievements = ["Top 10% GitHub contributor", "AWS Solutions Architect Certified", "Published 3 research papers", "Led team of 8 developers", "Built apps with 1M+ users"];
  const certifications = ["AWS Solutions Architect Professional", "Google Cloud Professional Developer", "Certified Kubernetes Administrator", "MongoDB Certified Developer", "GenAI using IBM Watsonx"];

  const getSkillIcon = (skill: string): string => {
    const iconMap: { [key: string]: string } = { 'JavaScript': 'javascript-plain', 'TypeScript': 'typescript-plain', 'Python': 'python-plain', 'Java': 'java-plain', 'Go': 'go-plain', 'React': 'react-original', 'Next.js': 'nextjs-plain', 'Express.js': 'express-original', 'Django': 'django-plain', 'Spring Boot': 'spring-plain', 'AWS': 'amazonwebservices-plain', 'Docker': 'docker-plain', 'Git': 'git-plain', 'MongoDB': 'mongodb-plain', 'PostgreSQL': 'postgresql-plain', 'Flask': 'flask-plain', 'TensorFlow': 'tensorflow-original', 'PyTorch': "pytorch-plain", 'Kubernetes': "kubernetes-plain", 'GitHub': "github-plain", 'Tailwind': "tailwindcss-plain", 'MySQL': "mysql-plain", 'C': 'c-plain', 'C++': 'cplusplus-plain', 'Bootstrap': 'bootstrap-plain' };
    return iconMap[skill] || 'devicon-plain';
  };

  const featuredProjects = [
    { title: "AI-Powered Analytics Platform", description: "Real-time data processing and machine learning insights for enterprise clients.", tech: ["React", "Python", "AWS", "TensorFlow"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", href: "https://github.com/username/ai-analytics" },
    { title: "E-Commerce Microservices", description: "Scalable microservices architecture handling millions of transactions.", tech: ["Node.js", "Docker", "MongoDB", "Redis"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "https://github.com/username/ecommerce" },
    { title: "Blockchain Voting System", description: "Secure and transparent voting platform using blockchain technology.", tech: ["Solidity", "Web3.js", "React", "Ethereum"], image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop", href: "https://github.com/username/blockchain-voting" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 lg:pt-0 lg:pb-0 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Profile Info Section --- */}
          {/* Order 1 on mobile, Order 1 on desktop (left side) */}
          <div className="space-y-8 animate-fade-in text-center order-1 lg:order-1">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 transition-all duration-200"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white/20 backdrop-blur-sm shadow-xl transition-all duration-200 ease-in-out hover:rounded-3xl hover:shadow-2xl hover:scale-105">
                <img src="images/bw-pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                Saurabh Sharma
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Passionate Developer & Problem Solver
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link, index) => (
                <Button key={link.label} variant="outline" asChild className="group glass-card hover-lift animation-delay-200 shadow-lg hover:shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* --- Introduction Section --- */}
          {/* Order 2 on mobile, Order 2 on desktop (right side) */}
          <div className="space-y-8 animate-fade-in animation-delay-600 order-2 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center lg:text-left">
                Building the <span className="text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-indigo-300 via-purple-700 to-indigo-300 animate-text">Future</span> with Code
              </h2>
              <div className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                <div>
                  <DecryptedText text="I'm a passionate developer who loves creating scalable web " animateOn="view" speed={50} maxIterations={10} className="text-muted-foreground" encryptedClassName="text-accent" />
                </div>
                <div>
                  <DecryptedText text="applications and exploring cutting-edge technologies. With" animateOn="view" speed={50} maxIterations={10} className="text-muted-foreground" encryptedClassName="text-accent" />
                </div>
                <div>
                  <DecryptedText text="expertise in modern tech stacks, I turn complex problems into" animateOn="view" speed={50} maxIterations={10} className="text-muted-foreground" encryptedClassName="text-accent" />
                </div>
                <div>
                  <DecryptedText text="elegant solutions." animateOn="view" speed={50} maxIterations={10} className="text-muted-foreground" encryptedClassName="text-accent" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-none">
              <Button variant="outline" size="lg" asChild className="text-primary group sm:flex-1 h-12 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                <a href="/projects" className="flex items-center justify-center w-full">
                  <span>View My Work</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-primary group sm:flex-1 h-12 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                <a href="/contact" className="flex items-center justify-center w-full">
                  <span>Get In Touch</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float animation-delay-400"></div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* --- NEW IMAGE CAROUSEL --- */}
            <div className="relative w-full h-96 flex items-center justify-center">
              {profileImages.map((src, index) => {
                const isActive = index === currentImageIndex;
                const distance = index - currentImageIndex;
                const isPrev = distance === -1 || (currentImageIndex === 0 && index === profileImages.length - 1);
                const isNext = distance === 1 || (currentImageIndex === profileImages.length - 1 && index === 0);

                let transform = 'scale(0.8) translateZ(-200px)';
                let opacity = 0.4;
                let zIndex = 1;

                if (isPrev) {
                  transform = 'scale(0.9) translateX(-50%) translateZ(-100px) rotateY(30deg)';
                  opacity = 0.6;
                  zIndex = 2;
                }
                if (isNext) {
                  transform = 'scale(0.9) translateX(50%) translateZ(-100px) rotateY(-30deg)';
                  opacity = 0.6;
                  zIndex = 2;
                }
                if (isActive) {
                  transform = 'scale(1) translateZ(0)';
                  opacity = 1;
                  zIndex = 3;
                }

                return (
                  <div
                    key={src}
                    className="absolute w-64 h-80 transition-all duration-500 ease-in-out"
                    style={{ transform, opacity, zIndex, transformStyle: 'preserve-3d' }}
                  >
                    <img src={src} alt={`About me ${index + 1}`} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                  </div>
                );
              })}
              <button onClick={prevImage} className="absolute left-0 z-10 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-0 z-10 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <User className="w-8 h-8 text-primary" /> About Me
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>I'm a passionate full-stack developer with over 5 years of experience building scalable web applications and cloud solutions. My journey began during my undergraduate studies at VIT University, where I discovered my love for solving complex problems through code.</p>
                  <p>Currently pursuing my Bachelor's degree in Computer Science, I specialize in modern JavaScript frameworks, cloud architecture, and machine learning integration. I've had the opportunity to work with both startups and enterprise clients, building scalable applications that serve millions of users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">Technologies I work with to bring ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="glass-card rounded-xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <h3 className="text-3xl font-semibold text-accent mb-8 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skill} className="px-4 py-2 bg-card/80 text-foreground rounded-full text-sm font-medium border border-border/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-3" style={{ animationDelay: `${skillIndex * 50}ms` }}>
                      <i className={`devicon-${getSkillIcon(skill)} text-lg`} style={{ color: 'inherit' }}></i>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary" /> Education
            </h2>
            <p className="text-xl text-muted-foreground">Academic foundation and continuous learning</p>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={edu.degree} className="glass-card rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-primary font-bold text-xl">{edu.institution.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg mb-1">{edu.degree}</h3>
                    <p className="text-primary text-base font-semibold mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{edu.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2"><Target className="w-6 h-6 text-primary" />Core Skills</h3>
            <div className="space-y-3">
              {coreSkills.map((skill) => (<div key={skill} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground">{skill}</span></div>))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2 "><Star className="w-6 h-6 text-primary" />Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (<div key={achievement} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground">{achievement}</span></div>))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2"><Award className="w-6 h-6 text-primary" />Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (<div key={cert} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground text-sm">{cert}</span></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center gap-2"><Star className="w-8 h-8 text-primary" />Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Showcasing my best work and innovative solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group glass-card rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (<Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{tech}</Badge>))}
                    </div>
                    <Button variant="outline" asChild className="w-full hover-glow shadow-md">
                      <a href={project.href} className="flex items-center justify-center">
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
            <Button variant="outline" size="lg" asChild className="text-primary group flex-1 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
              <a href="/projects" className="flex items-center justify-center">
                <span>View All Projects</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
