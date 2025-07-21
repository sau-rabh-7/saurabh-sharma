import { useState } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  image: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "microservices-architecture",
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "Learn how to design and implement a robust microservices architecture using modern tools and best practices.",
      content: `
# Building Scalable Microservices with Node.js and Docker

Microservices architecture has become the go-to pattern for building scalable, maintainable applications. In this comprehensive guide, we'll explore how to design and implement a robust microservices system.

## Why Microservices?

Traditional monolithic applications can become difficult to maintain and scale as they grow. Microservices offer several advantages:

- **Independent deployment**: Each service can be deployed independently
- **Technology diversity**: Different services can use different technologies
- **Fault isolation**: Failure in one service doesn't bring down the entire system
- **Team autonomy**: Different teams can work on different services

## Getting Started

Let's start by setting up our basic microservice structure...

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Service running on port \${PORT}\`);
});
\`\`\`

## Containerization with Docker

Docker containers provide the perfect environment for microservices...
      `,
      publishDate: "2024-01-15",
      readTime: 8,
      tags: ["Microservices", "Node.js", "Docker", "Architecture"],
      featured: true,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop"
    },
    {
      id: "react-performance",
      title: "React Performance Optimization: Beyond the Basics",
      excerpt: "Advanced techniques for optimizing React applications, including code splitting, memoization, and virtual DOM optimization.",
      content: `
# React Performance Optimization: Beyond the Basics

Performance is crucial for user experience. Let's dive into advanced React optimization techniques that go beyond the typical recommendations.

## Understanding React's Rendering Process

Before optimizing, it's important to understand how React works under the hood...
      `,
      publishDate: "2024-01-08",
      readTime: 12,
      tags: ["React", "Performance", "JavaScript", "Optimization"],
      featured: true,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
      id: "ai-web-development",
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build web applications and what developers need to know.",
      content: `
# The Future of AI in Web Development

Artificial Intelligence is revolutionizing every industry, and web development is no exception. Let's explore the current landscape and future possibilities.

## Current AI Applications in Web Development

- **Code Generation**: Tools like GitHub Copilot
- **Automated Testing**: AI-powered test generation
- **Performance Optimization**: Intelligent caching and optimization
- **User Experience**: Personalization and recommendation systems

## What's Coming Next?

The future holds even more exciting possibilities...
      `,
      publishDate: "2024-01-01",
      readTime: 6,
      tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
      featured: false,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      id: "database-design-patterns",
      title: "Modern Database Design Patterns for Scalable Applications",
      excerpt: "Essential database design patterns and strategies for building applications that can handle millions of users.",
      content: `
# Modern Database Design Patterns for Scalable Applications

As applications grow, database design becomes increasingly critical. Let's explore patterns that ensure your database can scale with your success.

## Key Principles

1. **Normalization vs Denormalization**: When to use each approach
2. **Indexing Strategies**: Optimizing query performance
3. **Partitioning**: Horizontal and vertical scaling techniques
4. **Caching Layers**: Redis, Memcached, and application-level caching

## Implementation Examples

Let's look at some real-world examples...
      `,
      publishDate: "2023-12-20",
      readTime: 10,
      tags: ["Database", "PostgreSQL", "MongoDB", "Scalability"],
      featured: false,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      id: "devops-best-practices",
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "A comprehensive guide to implementing DevOps practices that improve development velocity and application reliability.",
      content: `
# DevOps Best Practices for Modern Development Teams

DevOps isn't just about tools—it's about culture, practices, and continuous improvement. Here's how to implement effective DevOps practices.

## Core Principles

- **Continuous Integration**: Automated testing and integration
- **Continuous Deployment**: Safe, automated deployments
- **Infrastructure as Code**: Version-controlled infrastructure
- **Monitoring and Observability**: Understanding your systems

## Getting Started

Begin with these fundamental practices...
      `,
      publishDate: "2023-12-10",
      readTime: 15,
      tags: ["DevOps", "CI/CD", "AWS", "Infrastructure"],
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <Card 
      className="group cursor-pointer transition-spring hover:shadow-elegant hover:-translate-y-2"
      onClick={() => setSelectedPost(post)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
          {post.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="tech" className="text-xs">
                Featured
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-3 group-hover:text-primary transition-smooth line-clamp-2">
          {post.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.publishDate)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{post.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const BlogModal = ({ post, onClose }: { post: BlogPost; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
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
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="tech" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-muted-foreground">
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology trends, and software engineering best practices.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Featured Posts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">All Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}

        {/* CTA for more posts */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to read more? Check out my full blog archive.
          </p>
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;