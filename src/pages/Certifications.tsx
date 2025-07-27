import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { ExternalLink, Download, Award, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CertificationsPage = () => {
  // --- Data using reliable YYYY-MM-DD date format ---
  const certifications = [
    {
      id: 1,
      title: "AGEN AI Using IBM Watsonx",
      issuer: "IBM",
      issueDate: "2023-06-14",
      expiryDate: null,
      credentialId: "ab69de9fca5d400a9ef4ab3045c7d01a",
      logo: "☁️",
      image: "images/ibm-cert.png",
      description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
      skills: ["Machine Learning","RAG Models", "AI Models Implementation","Cloud Architecture", "API Integration"],
      verificationUrl: "https://courses.vit.skillsnetwork.site/certificates/ab69de9fca5d400a9ef4ab3045c7d01a",
      downloadUrl: "https://courses.vit.skillsnetwork.site/certificates/ab69de9fca5d400a9ef4ab3045c7d01a",
      featured: true
    }
  ];

  // --- Refactored logic to be more robust ---
  const getCertificationStatus = (expiryDate: string | null): 'permanent' | 'valid' | 'expiring' | 'expired' => {
    if (expiryDate === null) {
      return 'permanent';
    }
    
    const expiry = new Date(expiryDate);
    const now = new Date();
    
    // Check if the date is valid before doing calculations
    if (isNaN(expiry.getTime())) {
        return 'expired'; // Treat invalid dates as expired
    }

    if (expiry < now) {
        return 'expired';
    }

    const monthsUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30.44); // More accurate month calculation
    
    if (monthsUntilExpiry > 12) {
      return 'valid';
    } else {
      return 'expiring';
    }
  };

  const certificationsWithStatus = certifications.map(cert => ({
      ...cert,
      status: getCertificationStatus(cert.expiryDate)
  }));

  //const featuredCerts = certificationsWithStatus.filter(cert => cert.featured);
  const otherCerts = certificationsWithStatus.filter(cert => cert.featured);
  const activeCertsCount = certificationsWithStatus.filter(c => c.status === 'valid' || c.status === 'permanent' || c.status === 'expiring').length;

  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
        case 'permanent':
            return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-400/30">Permanent</Badge>;
        case 'valid':
            return <Badge className="bg-accent/20 text-accent border-accent/30">Valid</Badge>;
        case 'expiring':
            return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-400/30">Expiring Soon</Badge>;
        case 'expired':
            return <Badge variant="destructive">Expired</Badge>;
        default:
            return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Certifications */}
          {/* <section className="mb-16">
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
                      <StatusBadge status={cert.status} />
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
                        Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
          </section> */}

          {/* Other Certifications */}
          <section>
            {/* <h2 className="text-3xl font-bold text-foreground mb-8">Other Certifications</h2> */}
            
            <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-5">
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
                    {/* <div className="absolute top-2 left-2">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-sm border border-white/20">
                        {cert.logo}
                      </div>
                    </div> */}
                    <div className="absolute top-2 right-2">
                      <StatusBadge status={cert.status} />
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-smooth line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">{cert.issuer}</p>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
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
                        <Button variant="outline" size="sm" asChild className="flex-1 text-sm p-1">
                          <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Verify
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1 text-sm p-1">
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
                  {activeCertsCount}
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

export default CertificationsPage;
