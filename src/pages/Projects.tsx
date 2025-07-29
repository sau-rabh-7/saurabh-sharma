import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { ExternalLink, Github, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";


const Projects = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring secure payment processing, inventory management, and admin dashboard.",
      image: "/public/images/slideshow-1.jpg",
      status: "Completed",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/example/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: "ai-task-manager",
      title: "AI-Powered Task Manager",
      description: "Smart task management with AI prioritization and natural language processing for optimal productivity and intelligent scheduling.",
      image: "/public/images/slideshow-2.jpg",
      status: "In Progress",
      techStack: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API", "TensorFlow", "Redis"],
      githubUrl: "https://github.com/example/ai-task-manager",
      demoUrl: "https://ai-tasks-demo.example.com"
    },
    {
      id: "blockchain-wallet",
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and hardware wallet compatibility for enterprise users.",
      image: "/public/images/slideshow-3.jpg",
      status: "Completed",
      techStack: ["React", "Web3.js", "Ethers.js", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
      githubUrl: "https://github.com/example/blockchain-wallet",
      demoUrl: "https://crypto-wallet-demo.example.com"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-accent/20 text-accent border-accent/30";
      case "In Progress": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work spanning web development, AI/ML, and innovative solutions.
              Click on any project to learn more about the technical implementation.
            </p>
          </div>

          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="glass-card rounded-lg overflow-hidden hover-lift group shadow-lg hover:shadow-xl block"
                  style={{ animationDelay: `${index * 150}ms` }}
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
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 3}
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
