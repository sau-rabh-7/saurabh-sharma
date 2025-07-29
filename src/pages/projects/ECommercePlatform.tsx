import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CodeShowcase } from "@/components/ui/code-showcase";
import { ImageWithText } from "@/components/ui/image-with-text";

const ECommercePlatform = () => {
  const project = {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    longDescription: `This comprehensive e-commerce platform demonstrates modern web development practices with a focus on user experience and scalability. The application features a responsive design that works seamlessly across all devices.

The backend architecture utilizes Node.js with Express.js, providing RESTful APIs for product management, user authentication, and order processing. MongoDB serves as the primary database, offering flexible document storage for product catalogs and user data.

Advanced features include real-time inventory management, secure payment processing through Stripe integration, and an admin dashboard for comprehensive store management. The platform also implements Redis caching for improved performance and JWT-based authentication for secure user sessions.`,
    year: "2024",
    team: "Solo Project",
    status: "Completed",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.example.com",
    screenshots: [
      "/public/images/slideshow-1.jpg",
      "/public/images/slideshow-2.jpg",
      "/public/images/slideshow-3.jpg"
    ],
    additionalImages: [
      {
        src: "/public/images/slideshow-1.jpg",
        alt: "Product catalog interface"
      },
      {
        src: "/public/images/slideshow-2.jpg",
        alt: "Shopping cart and checkout"
      }
    ],
    codeExamples: [
      {
        title: "Product API Endpoint",
        language: "javascript",
        code: `// Product controller with MongoDB integration
const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };
    
    const products = await Product.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
      
    const total = await Product.countDocuments(query);
    
    res.json({
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};`
      },
      {
        title: "React Product Component",
        language: "tsx",
        code: `// Product card component with add to cart functionality
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart(product);
      toast.success('Product added to cart!');
    } catch (error) {
      toast.error('Failed to add product');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="glass-card rounded-lg overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-muted-foreground">$\{product.price}</p>
        <Button 
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full mt-4"
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};`
      }
    ]
  };

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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
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
              {project.techStack.map((tech) => (
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

export default ECommercePlatform;