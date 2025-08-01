import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Github, Linkedin, Mail, Download, ExternalLink, Star, MapPin, GraduationCap, Calendar, Award, Target, User, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DecryptedText from "@/components/ui/DecryptedText";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const profileImages = [
    "images/slideshow-1.jpg",
    "images/slideshow-2.jpg",
    "images/slideshow-3.jpg"
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
    { degree: "Higher Secondary Education", institution: "Mithila Institute of Technology", period: "2020-2022", location: "Janakpur, Nepal", gpa: "3.22/4.0" },
    { degree: "Secondary Education Examination (SEE)", institution: "Daffodils Public School", period: "2006-2019", location: "Janakpur, Nepal", gpa: "3.95/4.0" },
  ];

  const coreSkills = ["Full Stack Development", "Cloud Architecture", "System Design", "API Development", "Database Design", "Applied Machine Learning & AI Integration"];
  const achievements = ["Top 10% GitHub contributor", "AWS Solutions Architect Certified", "Published 3 research papers", "Led team of 8 developers", "Built apps with 1M+ users"];
  const certifications = ["AWS Solutions Architect Professional", "Google Cloud Professional Developer", "Certified Kubernetes Administrator", "MongoDB Certified Developer", "GenAI using IBM Watsonx"];

  const getSkillIcon = (skill: string): string => {
    const iconMap: { [key: string]: string } = { 'JavaScript': 'javascript-plain', 'TypeScript': 'typescript-plain', 'Python': 'python-plain', 'Java': 'java-plain', 'Go': 'go-plain', 'React': 'react-original', 'Next.js': 'nextjs-plain', 'Express.js': 'express-original', 'Django': 'django-plain', 'Spring Boot': 'spring-plain', 'AWS': 'amazonwebservices-plain', 'Docker': 'docker-plain', 'Git': 'git-plain', 'MongoDB': 'mongodb-plain', 'PostgreSQL': 'postgresql-plain', 'Flask': 'flask-plain', 'TensorFlow': 'tensorflow-original', 'PyTorch': "pytorch-plain", 'Kubernetes': "kubernetes-plain", 'GitHub': "github-plain", 'Tailwind': "tailwindcss-plain", 'MySQL': "mysql-plain", 'C': 'c-plain', 'C++': 'cplusplus-plain', 'Bootstrap': 'bootstrap-plain' };
    return iconMap[skill] || 'devicon-plain';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-accent/20 text-accent border-accent/30";
      case "In Progress": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const featuredProjects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/images/slideshow-1.jpg",
      status: "Completed",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/example/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: "ai-task-manager",
      title: "AI-Powered Task Manager",
      description: "Smart task management with AI prioritization and natural language processing",
      image: "/images/slideshow-2.jpg",
      status: "In Progress",
      techStack: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
      githubUrl: "https://github.com/example/ai-task-manager",
      demoUrl: "https://ai-tasks-demo.example.com"
    },
    {
      id: "blockchain-wallet",
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
      image: "/images/slideshow-3.jpg",
      status: "Completed",
      techStack: ["React", "Web3.js", "Ethers.js", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/example/blockchain-wallet",
      demoUrl: "https://crypto-wallet-demo.example.com"
    }
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
    <div className="min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 lg:pt-0 lg:pb-0 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Profile Info Section --- */}
          {/* Order 1 on mobile, Order 1 on desktop (left side) */}
          <div className="space-y-8 animate-fade-in text-center order-1 lg:order-1">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-neutral-500 rounded-full blur-3xl opacity-60 transition-all duration-100"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white/20 backdrop-blur-lg shadow-2xl transition-all duration-500 hover:rounded-3xl hover:shadow-2xl">
                <img src="images/bw-pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-500 to-indigo-700 to-indigo-500 animate-text">
                Saurabh Sharma
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Passionate Developer & Problem Solver
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link, index) => (
                <Button key={link.label} variant="outline" asChild className="w-30 group glass-card hover-lift animation-delay-200 shadow-lg hover:shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
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
                Building the <span className="text-5xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-500 to-indigo-700 to-indigo-300 animate-text">Future</span> with Code
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

            <div className="flex flex-row gap-4 max-w-md mx-auto sm:max-w-none">
  <Button variant="outline" size="lg" asChild className="text-primary group flex-1 h-12 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
    <a href="/projects" className="flex items-center justify-center w-full">
      <span>View My Work</span>
      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  </Button>
  <Button variant="outline" size="lg" asChild className="text-primary group flex-1 h-12 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
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
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center items-center">
            
            {/* 2. Carousel is smaller and centered in the wrapper */}
            <div 
              className="relative w-full max-w-lg aspect-video touch-pan-x"
              onTouchStart={(e) => {
                const touchStartX = e.touches[0].clientX;
                e.currentTarget.dataset.touchStartX = touchStartX.toString();
              }}
              onTouchEnd={(e) => {
                const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    nextImage();
                  } else {
                    prevImage();
                  }
                }
              }}
            >
              {profileImages.map((src, index) => {
                const isActive = index === currentImageIndex;
                const distance = index - currentImageIndex;
                const isPrev = distance === -1 || (currentImageIndex === 0 && index === profileImages.length - 1);
                const isNext = distance === 1 || (currentImageIndex === profileImages.length - 1 && index === 0);

                let transform = 'scale(0.8) translateZ(-200px)';
                let opacity = 0.4;
                let zIndex = 1;

                if (isPrev) {
                  transform = 'scale(0.9) translateX(-20%) translateZ(-100px) rotateY(30deg)';
                  opacity = 0.6;
                  zIndex = 2;
                }
                if (isNext) {
                  transform = 'scale(0.9) translateX(20%) translateZ(-100px) rotateY(-30deg)';
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
                    className="absolute w-full h-full transition-all duration-500 ease-in-out"
                    style={{ transform, opacity, zIndex, transformStyle: 'preserve-3d' }}
                  >
                    <img src={src} alt={`About me ${index + 1}`} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                  </div>
                );
              })}
            </div>

            {/* 3. Buttons are positioned to the edges of the wrapper */}
            <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/40 border border-white/40 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all hidden md:flex items-center justify-center">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/40 border border-white/40 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all hidden md:flex items-center justify-center">
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
                <h3 className="text-3xl font-semibold text-primary mb-8 text-center">{category.title}</h3>
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
              {coreSkills.map((skill) => (<div key={skill} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground text-l">{skill}</span></div>))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2 "><Star className="w-6 h-6 text-primary" />Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (<div key={achievement} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground text-l">{achievement}</span></div>))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center gap-2"><Award className="w-6 h-6 text-primary" />Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (<div key={cert} className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-foreground text-l">{cert}</span></div>))}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="glass-card rounded-lg overflow-hidden hover-lift group shadow-lg hover:shadow-xl block"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className={`absolute top-3 right-3 text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="flex-1 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild 
                        className="flex-1 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
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
