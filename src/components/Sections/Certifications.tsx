import { useState } from "react";
import { Award, ExternalLink, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  thumbnail: string;
  description: string;
  skills: string[];
  verificationUrl?: string;
  certificateUrl?: string;
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      id: "aws-architect",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023-06",
      expiryDate: "2026-06",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Demonstrates expertise in designing distributed systems and architectures on AWS cloud platform.",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability", "Cost Optimization"],
      verificationUrl: "https://aws.amazon.com/verification/12345",
      certificateUrl: "/certificates/aws-architect.pdf"
    },
    {
      id: "google-cloud-dev",
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "2023-03",
      expiryDate: "2025-03",
      thumbnail: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      description: "Validates ability to design, build, and deploy applications on Google Cloud Platform.",
      skills: ["GCP", "Kubernetes", "Docker", "CI/CD", "Microservices"],
      verificationUrl: "https://cloud.google.com/certification/verify/12345",
      certificateUrl: "/certificates/gcp-developer.pdf"
    },
    {
      id: "meta-react",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      issueDate: "2022-11",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Comprehensive program covering modern front-end development with React and best practices.",
      skills: ["React", "JavaScript", "HTML/CSS", "Version Control", "UX/UI Design"],
      verificationUrl: "https://coursera.org/verify/professional-cert/12345",
      certificateUrl: "/certificates/meta-frontend.pdf"
    },
    {
      id: "mongodb-developer",
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      issueDate: "2022-08",
      expiryDate: "2025-08",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Demonstrates proficiency in MongoDB database design, development, and optimization.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation", "Indexing"],
      verificationUrl: "https://university.mongodb.com/verify/12345",
      certificateUrl: "/certificates/mongodb-developer.pdf"
    },
    {
      id: "scrum-master",
      title: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      issueDate: "2022-05",
      expiryDate: "2024-05",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      description: "Certified in Scrum framework and agile project management methodologies.",
      skills: ["Scrum", "Agile", "Project Management", "Team Leadership", "Facilitation"],
      verificationUrl: "https://scrumalliance.org/verify/12345",
      certificateUrl: "/certificates/scrum-master.pdf"
    },
    {
      id: "docker-certified",
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      issueDate: "2022-02",
      expiryDate: "2024-02",
      thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
      description: "Validates skills in containerization, orchestration, and Docker ecosystem tools.",
      skills: ["Docker", "Containerization", "Orchestration", "DevOps", "Kubernetes"],
      verificationUrl: "https://docker.com/verify/12345",
      certificateUrl: "/certificates/docker-associate.pdf"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  const CertificationCard = ({ cert }: { cert: Certification }) => (
    <Card 
      className="group cursor-pointer transition-spring hover:shadow-elegant hover:-translate-y-2"
      onClick={() => setSelectedCert(cert)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={cert.thumbnail}
            alt={cert.title}
            className="w-full h-40 object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Award className="w-6 h-6 text-white drop-shadow-lg" />
          </div>
          {cert.expiryDate && (
            <div className="absolute bottom-2 left-2">
              <Badge 
                variant={isExpired(cert.expiryDate) ? "destructive" : "tech"}
                className="text-xs"
              >
                {isExpired(cert.expiryDate) ? "Expired" : "Valid"}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
          {cert.title}
        </CardTitle>
        <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {cert.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="w-3 h-3" />
          {formatDate(cert.issueDate)}
          {cert.expiryDate && (
            <>
              <span>-</span>
              {formatDate(cert.expiryDate)}
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {cert.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {cert.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{cert.skills.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const CertificationModal = ({ cert, onClose }: { cert: Certification; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant">
        <div className="relative">
          <img
            src={cert.thumbnail}
            alt={cert.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-smooth"
          >
            ×
          </button>
          <div className="absolute bottom-4 left-4">
            <Badge 
              variant={isExpired(cert.expiryDate) ? "destructive" : "tech"}
              className="text-sm"
            >
              {isExpired(cert.expiryDate) ? "Expired" : "Valid Certificate"}
            </Badge>
          </div>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{cert.title}</h2>
            <p className="text-xl text-primary font-semibold mb-2">{cert.issuer}</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Issued: {formatDate(cert.issueDate)}
              {cert.expiryDate && (
                <span>• Expires: {formatDate(cert.expiryDate)}</span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground">{cert.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Skills Covered</h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="tech" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {cert.verificationUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </a>
                </Button>
              )}
              {cert.certificateUrl && (
                <Button variant="hero" asChild>
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
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
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Certification Detail Modal */}
        {selectedCert && (
          <CertificationModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Certifications;