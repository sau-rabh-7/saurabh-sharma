import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/public/images/slideshow-1.jpg",
      status: "Completed",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/example/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: "ai-task-manager",
      title: "AI-Powered Task Manager",
      description: "Smart task management with AI prioritization and natural language processing",
      image: "/public/images/slideshow-2.jpg",
      status: "In Progress",
      techStack: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API"],
      githubUrl: "https://github.com/example/ai-task-manager",
      demoUrl: "https://ai-tasks-demo.example.com"
    },
    {
      id: "blockchain-wallet",
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
      image: "/public/images/slideshow-3.jpg",
      status: "Completed",
      techStack: ["React", "Web3.js", "Ethers.js", "Node.js", "TypeScript"],
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

  const ProjectCard = ({ project }: { project: any }) => (
    <Link
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
  );


  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, AI/ML, and innovative solutions.
            Click on any project to learn more about the technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;