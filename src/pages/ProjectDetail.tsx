import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CodeShowcase } from "@/components/ui/code-showcase";
import { ImageWithText } from "@/components/ui/image-with-text";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const projectData = {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with modern technologies.",
    longDescription: `This full-stack e-commerce platform represents a complete solution for online retail businesses. 
    Built with React and Node.js, it features a modern, responsive design that works seamlessly across all devices.
    
    The platform includes comprehensive user management with secure authentication, a dynamic product catalog with advanced filtering and search capabilities, a robust shopping cart system, and secure payment processing through Stripe integration.
    
    On the administrative side, the platform offers a powerful dashboard for inventory management, order tracking, sales analytics, and customer relationship management. The system is designed to scale with growing businesses and handle high traffic loads efficiently.`,
    
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
    ],
    
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS", "Express", "Redis"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
    status: "Completed",
    year: "2024",
    team: "Solo Project",
    
    codeExamples: [
      {
        title: "User Authentication Middleware",
        language: "javascript",
        code: `const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};`
      },
      {
        title: "React Product Component",
        language: "typescript",
        code: "interface Product {\n  id: string;\n  name: string;\n  price: number;\n  image: string;\n  description: string;\n}\n\nconst ProductCard: React.FC<{ product: Product }> = ({ product }) => {\n  const { addToCart } = useCart();\n  \n  return (\n    <Card className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <CardContent>\n        <h3>{product.name}</h3>\n        <p>${product.price}</p>\n        <Button onClick={() => addToCart(product)}>\n          Add to Cart\n        </Button>\n      </CardContent>\n    </Card>\n  );\n};"
      }
    ],
    
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        alt: "Mobile responsive design"
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        alt: "Admin dashboard"
      }
    ]
  };

  const project = projectData;

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {project.team}
              </div>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Screenshot Carousel */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Project Screenshots</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.screenshots.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Detailed Description */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              
              <ImageWithText
                src={project.additionalImages[0].src}
                alt={project.additionalImages[0].alt}
                position="right"
                size="medium"
              >
                <p className="text-foreground leading-relaxed mb-4">
                  {project.longDescription.split('\n')[0]}
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  {project.longDescription.split('\n')[1]}
                </p>
              </ImageWithText>

              <div className="clear-both">
                <ImageWithText
                  src={project.additionalImages[1].src}
                  alt={project.additionalImages[1].alt}
                  position="left"
                  size="medium"
                >
                  <p className="text-foreground leading-relaxed">
                    {project.longDescription.split('\n')[2]}
                  </p>
                </ImageWithText>
              </div>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Code Highlights</h2>
            {project.codeExamples.map((example, index) => (
              <CodeShowcase
                key={index}
                title={example.title}
                language={example.language}
                code={example.code}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;