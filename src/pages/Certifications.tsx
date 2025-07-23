import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { ExternalLink, Download, Award, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader } from "@/components/ui/loader";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      credentialId: "AWS-PSA-12345",
      logo: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization", "High Availability"],
      verificationUrl: "https://aws.amazon.com/verification/12345",
      downloadUrl: "/certificates/aws-solutions-architect.pdf",
      featured: true
    },
    {
      id: 2,
      title: "Google Cloud Professional Cloud Developer",
      issuer: "Google Cloud",
      issueDate: "August 2022",
      expiryDate: "August 2024",
      credentialId: "GCP-PCD-67890",
      logo: "🔧",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      description: "Professional-level certification for developing scalable and reliable applications on Google Cloud Platform.",
      skills: ["GCP Services", "Application Development", "CI/CD", "Monitoring", "Security"],
      verificationUrl: "https://cloud.google.com/certification/verify/67890",
      downloadUrl: "/certificates/gcp-developer.pdf",
      featured: true
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "June 2022",
      expiryDate: "June 2025",
      credentialId: "CKA-54321",
      logo: "⚓",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      description: "Hands-on certification demonstrating skills in Kubernetes administration and troubleshooting.",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
      verificationUrl: "https://training.linuxfoundation.org/certification/verify/54321",
      downloadUrl: "/certificates/cka.pdf",
      featured: false
    },
    {
      id: 4,
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      issueDate: "February 2021",
      expiryDate: "February 2024",
      credentialId: "MDB-DEV-98765",
      logo: "🍃",
      image: "https://images.unsplash.com/photo-1558618069-fbd25c85cd64?w=600&h=400&fit=crop",
      description: "Certification validating expertise in MongoDB database development and optimization.",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing", "Performance Tuning"],
      verificationUrl: "https://university.mongodb.com/verify/98765",
      downloadUrl: "/certificates/mongodb-developer.pdf",
      featured: false
    },
    {
      id: 5,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issueDate: "November 2021",
      expiryDate: "Never expires",
      credentialId: "AZ-900-11111",
      logo: "🔷",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      description: "Foundational certification demonstrating knowledge of cloud services and Azure platform.",
      skills: ["Azure Services", "Cloud Concepts", "Azure Pricing", "Support"],
      verificationUrl: "https://docs.microsoft.com/en-us/learn/certifications/verify/11111",
      downloadUrl: "/certificates/azure-fundamentals.pdf",
      featured: false
    },
    {
      id: 6,
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      issueDate: "September 2020",
      expiryDate: "September 2023",
      credentialId: "CEH-22222",
      logo: "🔒",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      description: "Certification demonstrating knowledge of information security and ethical hacking methodologies.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Tools", "Risk Analysis"],
      verificationUrl: "https://aspen.eccouncil.org/Verify/22222",
      downloadUrl: "/certificates/ceh.pdf",
      featured: false
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  const getStatusBadge = (expiryDate: string) => {
    if (expiryDate === "Never expires") {
      return <Badge className="bg-accent/20 text-accent border-accent/30">Permanent</Badge>;
    }
    
    const expiry = new Date(expiryDate);
    const now = new Date();
    const monthsUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30);
    
    if (monthsUntilExpiry > 12) {
      return <Badge className="bg-accent/20 text-accent border-accent/30">Valid</Badge>;
    } else if (monthsUntilExpiry > 3) {
      return <Badge className="bg-primary/20 text-primary border-primary/30">Expiring Soon</Badge>;
    } else {
      return <Badge variant="destructive">Expired</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              Featured Certifications
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCerts.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="glass-strong rounded-2xl overflow-hidden hover-lift group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-2xl border border-white/20">
                        {cert.logo}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(cert.expiryDate)}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground mb-1 font-medium">{cert.issuer}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Issued: {cert.issueDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        ID: {cert.credentialId}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Skills Validated</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Certifications */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Other Certifications</h2>
            
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">
              {otherCerts.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="bg-card/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
                  style={{ animationDelay: `${index * 150 + 400}ms` }}
                >
                    <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-sm border border-white/20">
                        {cert.logo}
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      {getStatusBadge(cert.expiryDate)}
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-smooth line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">{cert.issuer}</p>
                    
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" asChild className="flex-1 text-xs p-1">
                          <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Verify
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1 text-xs p-1">
                          <a href={cert.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certification Stats */}
          <section className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
                <div className="text-muted-foreground">Total Certifications</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {certifications.filter(c => getStatusBadge(c.expiryDate).props.className.includes('accent')).length}
                </div>
                <div className="text-muted-foreground">Active Certifications</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Technology Areas</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certifications;
