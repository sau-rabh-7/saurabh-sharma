import { useState } from "react";
import { MapPin, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  description: string;
  achievements: string[];
  techStack: string[];
  companyUrl?: string;
}

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: "tech-corp",
      company: "TechCorp Inc.",
      role: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "Present",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop",
      description: "Leading development of cloud-native applications and mentoring junior developers in a fast-paced startup environment.",
      achievements: [
        "Architected and delivered 3 major product features serving 100K+ users",
        "Reduced application load time by 40% through performance optimization",
        "Led a team of 4 developers in implementing microservices architecture",
        "Established CI/CD pipelines reducing deployment time from hours to minutes"
      ],
      techStack: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "MongoDB", "Redis"],
      companyUrl: "https://techcorp.com"
    },
    {
      id: "startup-solutions",
      company: "Startup Solutions",
      role: "Full Stack Developer",
      location: "Austin, TX",
      startDate: "2020-06",
      endDate: "2021-12",
      logo: "https://images.unsplash.com/photo-1611095973362-ee049b8fb2b8?w=100&h=100&fit=crop",
      description: "Developed scalable web applications and APIs for various client projects ranging from e-commerce to healthcare.",
      achievements: [
        "Built and deployed 12+ client applications with 99.9% uptime",
        "Implemented secure payment processing systems handling $2M+ transactions",
        "Developed RESTful APIs serving 50K+ daily requests",
        "Collaborated with designers to create responsive, accessible user interfaces"
      ],
      techStack: ["React", "Express.js", "PostgreSQL", "Stripe", "Heroku", "GraphQL"],
      companyUrl: "https://startupsolutions.com"
    },
    {
      id: "innovation-labs",
      company: "Innovation Labs",
      role: "Frontend Developer",
      location: "Remote",
      startDate: "2019-03",
      endDate: "2020-05",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
      description: "Focused on creating intuitive user interfaces and optimizing user experience for web applications.",
      achievements: [
        "Increased user engagement by 35% through UX improvements",
        "Migrated legacy applications to modern React architecture",
        "Implemented automated testing reducing bugs by 60%",
        "Contributed to open-source projects with 500+ GitHub stars"
      ],
      techStack: ["React", "TypeScript", "Jest", "Cypress", "Figma", "Webpack"],
      companyUrl: "https://innovationlabs.com"
    }
  ];

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const ExperienceCard = ({ experience }: { experience: Experience }) => (
    <Card 
      className="group cursor-pointer transition-spring hover:shadow-elegant hover:-translate-y-1"
      onClick={() => setSelectedExperience(experience)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg group-hover:text-primary transition-smooth">
              {experience.role}
            </CardTitle>
            <p className="text-primary font-semibold">{experience.company}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-spring" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {experience.techStack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{experience.techStack.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ExperienceModal = ({ experience, onClose }: { experience: Experience; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant">
        <div className="p-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{experience.role}</h2>
                  <p className="text-xl text-primary font-semibold mb-2">{experience.company}</p>
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 text-muted-foreground hover:text-foreground rounded-full flex items-center justify-center hover:bg-muted transition-smooth"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground">{experience.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <Badge key={tech} variant="tech" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {experience.companyUrl && (
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Company Website
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and technologies, building scalable solutions and leading teams.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Experience Detail Modal */}
        {selectedExperience && (
          <ExperienceModal
            experience={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;