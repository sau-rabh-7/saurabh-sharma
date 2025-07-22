import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Calendar, Clock, Tag, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "A comprehensive guide to architecting and deploying microservices using modern containerization technologies and best practices.",
    content: "In this detailed guide, we'll explore how to build and deploy scalable microservices architecture using Node.js and Docker...",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    author: "John Doe",
    publishedAt: "March 15, 2024",
    readTime: "12 min read",
    tags: ["Node.js", "Docker", "Microservices", "DevOps"],
    category: "Architecture",
    featured: true,
    views: 2847,
    likes: 156
  };

  const blogPosts = [
    {
      id: 2,
      title: "React Performance Optimization: Advanced Techniques",
      excerpt: "Deep dive into advanced React optimization techniques including memoization, code splitting, and bundle analysis.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "March 8, 2024",
      readTime: "8 min read",
      tags: ["React", "Performance", "JavaScript"],
      category: "Frontend",
      views: 1923,
      likes: 89
    },
    {
      id: 3,
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Exploring different database design patterns and when to use them in modern web applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "February 28, 2024",
      readTime: "10 min read",
      tags: ["Database", "Architecture", "MongoDB", "PostgreSQL"],
      category: "Backend",
      views: 1654,
      likes: 72
    },
    {
      id: 4,
      title: "AI-Powered Code Reviews: The Future of Development",
      excerpt: "How artificial intelligence is revolutionizing code review processes and improving software quality.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "February 20, 2024",
      readTime: "6 min read",
      tags: ["AI", "Machine Learning", "Code Review"],
      category: "AI/ML",
      views: 2134,
      likes: 98
    },
    {
      id: 5,
      title: "Implementing OAuth 2.0 in Express.js Applications",
      excerpt: "Step-by-step guide to implementing secure OAuth 2.0 authentication in your Express.js applications.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "February 12, 2024",
      readTime: "15 min read",
      tags: ["Security", "OAuth", "Express.js", "Authentication"],
      category: "Security",
      views: 1789,
      likes: 134
    },
    {
      id: 6,
      title: "GraphQL vs REST: Choosing the Right API Architecture",
      excerpt: "Comprehensive comparison of GraphQL and REST APIs with real-world examples and use cases.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "January 30, 2024",
      readTime: "9 min read",
      tags: ["GraphQL", "REST", "API", "Architecture"],
      category: "Architecture",
      views: 2456,
      likes: 187
    },
    {
      id: 7,
      title: "Cloud Cost Optimization Strategies for Startups",
      excerpt: "Practical strategies to reduce cloud infrastructure costs while maintaining performance and scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      author: "John Doe",
      publishedAt: "January 22, 2024",
      readTime: "11 min read",
      tags: ["Cloud", "AWS", "Cost Optimization", "Startups"],
      category: "Cloud",
      views: 1567,
      likes: 93
    }
  ];

  const categories = ["All", "Architecture", "Frontend", "Backend", "AI/ML", "Security", "Cloud"];
  const popularTags = ["React", "Node.js", "Docker", "AWS", "GraphQL", "MongoDB", "TypeScript", "Kubernetes"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <section className="mb-16">
            <div className="glass-strong rounded-2xl overflow-hidden hover-lift group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground border-primary">
                    Featured
                  </Badge>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 bg-accent/10 text-accent border-accent/30">
                    {featuredPost.category}
                  </Badge>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.publishedAt}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Filter Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "hero" : "outline"}
                  size="sm"
                  className="hover-glow"
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="glass-card rounded-xl overflow-hidden hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-accent/20 text-accent border-accent/30">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.views} views</span>
                          <span>{post.likes} likes</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <section className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button variant="hero" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </section>

            {/* Popular Tags */}
            <section className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="hover:bg-primary/10 hover:text-primary hover:border-primary/30 cursor-pointer transition-smooth text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>

            {/* External Links */}
            <section className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="https://medium.com/@username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Medium Articles</span>
                </a>
                <a href="https://dev.to/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Dev.to Posts</span>
                </a>
                <a href="https://hashnode.com/@username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Hashnode Blog</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;