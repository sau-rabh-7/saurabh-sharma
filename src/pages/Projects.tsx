import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with modern UI, secure payments, and admin dashboard.",
      longDescription: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and an admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com",
      status: "Completed",
      year: "2024",
      team: "Solo Project",
      featured: true
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered features and sentiment analysis.",
      longDescription: "A modern chat application featuring real-time messaging, AI-powered chatbots, sentiment analysis, file sharing, and group chat functionality. Built with React, Express.js, Socket.io, and integrated with OpenAI API.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Express.js", "Socket.io", "OpenAI", "PostgreSQL"],
      github: "https://github.com/username/ai-chat",
      demo: "https://ai-chat-demo.com",
      status: "In Progress",
      year: "2024",
      team: "2 Developers",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management with real-time updates and analytics.",
      longDescription: "A comprehensive project management tool with kanban boards, real-time collaboration, time tracking, analytics dashboard, and team management features. Perfect for agile development teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
      github: "https://github.com/username/task-manager",
      demo: "https://taskmanager-demo.com",
      status: "Completed",
      year: "2023",
      team: "3 Developers",
      featured: false
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns and climate analysis.",
      longDescription: "Interactive dashboard for weather data analysis with real-time updates, historical data visualization, predictive analytics, and customizable reports. Built with modern data visualization libraries.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
      status: "Completed",
      year: "2023",
      team: "Solo Project",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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

          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card rounded-lg overflow-hidden hover-lift group shadow-lg hover:shadow-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className={`absolute top-3 right-3 text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
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
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1 text-xs">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1 text-xs">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
