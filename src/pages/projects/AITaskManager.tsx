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

const AITaskManager = () => {
  const project = {
    title: "AI-Powered Task Manager",
    description: "Smart task management with AI prioritization and natural language processing",
    longDescription: `An intelligent task management application that leverages artificial intelligence to help users organize and prioritize their workload effectively. The system uses machine learning algorithms to analyze task patterns and suggest optimal scheduling.

The application features natural language processing capabilities, allowing users to create tasks using conversational input. Advanced AI algorithms analyze task complexity, deadlines, and user behavior to provide intelligent prioritization recommendations.

Built with a modern tech stack including React for the frontend, Python with FastAPI for AI processing, and PostgreSQL for data persistence. The system integrates with popular calendar applications and includes real-time collaboration features for team productivity.`,
    year: "2024",
    team: "2 Developers",
    status: "In Progress",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API", "TensorFlow", "Redis"],
    githubUrl: "https://github.com/example/ai-task-manager",
    demoUrl: "https://ai-tasks-demo.example.com",
    screenshots: [
      "/public/images/slideshow-2.jpg",
      "/public/images/slideshow-3.jpg",
      "/public/images/slideshow-1.jpg"
    ],
    additionalImages: [
      {
        src: "/public/images/slideshow-2.jpg",
        alt: "AI dashboard interface"
      },
      {
        src: "/public/images/slideshow-3.jpg",
        alt: "Task prioritization system"
      }
    ],
    codeExamples: [
      {
        title: "AI Task Prioritization Algorithm",
        language: "python",
        code: `# AI-powered task prioritization using machine learning
import tensorflow as tf
from datetime import datetime, timedelta

class TaskPrioritizer:
    def __init__(self):
        self.model = tf.keras.models.load_model('task_priority_model.h5')
        
    def calculate_priority(self, task):
        # Extract features from task
        features = self.extract_features(task)
        
        # Predict priority score using trained model
        priority_score = self.model.predict([features])[0][0]
        
        # Adjust based on deadline urgency
        days_until_deadline = (task.deadline - datetime.now()).days
        urgency_multiplier = max(0.1, 1 / max(1, days_until_deadline))
        
        final_score = priority_score * urgency_multiplier
        return min(100, max(0, final_score * 100))
    
    def extract_features(self, task):
        return [
            len(task.description),
            task.estimated_hours,
            task.complexity_rating,
            task.user_importance_rating,
            int(task.has_dependencies)
        ]`
      },
      {
        title: "Natural Language Task Parser",
        language: "javascript",
        code: `// NLP-powered task creation from natural language
const parseTaskFromText = async (text) => {
  const response = await fetch('/api/nlp/parse-task', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  
  const parsed = await response.json();
  
  return {
    title: parsed.title,
    description: parsed.description,
    deadline: parsed.deadline ? new Date(parsed.deadline) : null,
    priority: parsed.priority || 'medium',
    tags: parsed.tags || [],
    estimatedTime: parsed.estimatedTime || null
  };
};

// Example usage
const createTaskFromSpeech = async (speechText) => {
  // "Finish the quarterly report by Friday, high priority"
  const task = await parseTaskFromText(speechText);
  await createTask(task);
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

export default AITaskManager;