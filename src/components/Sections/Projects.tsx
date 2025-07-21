import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/username/ecommerce",
      demoUrl: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: "ai-chatbot",
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot using OpenAI API with natural language processing capabilities and context awareness.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      techStack: ["Python", "OpenAI API", "FastAPI", "React", "WebSocket"],
      githubUrl: "https://github.com/username/ai-chatbot",
      demoUrl: "https://chatbot-demo.com",
      featured: true,
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/username/task-manager",
      featured: true,
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      techStack: ["React", "Weather API", "Charts.js", "Geolocation"],
      githubUrl: "https://github.com/username/weather-app",
      demoUrl: "https://weather-demo.com",
    },
    {
      id: "portfolio-cms",
      title: "Portfolio CMS",
      description: "Content management system for portfolios with drag-and-drop interface and dynamic content updates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      techStack: ["Vue.js", "Node.js", "Express", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/username/portfolio-cms",
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology for transparency and immutability.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      githubUrl: "https://github.com/username/blockchain-voting",
    },
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card 
      className="group cursor-pointer transition-spring hover:shadow-elegant hover:-translate-y-2"
      onClick={() => setSelectedProject(project)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 group-hover:text-primary transition-smooth">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-smooth"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="tech" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="hero" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
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

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;