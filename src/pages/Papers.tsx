import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";

const Papers = () => {
  const [selectedPaper, setSelectedPaper] = useState<any>(null);

  const papers = [
    {
      id: 1,
      title: "Machine Learning Approaches to Predictive Analytics in Healthcare",
      abstract: "This paper explores the application of advanced machine learning algorithms in healthcare predictive analytics, focusing on patient outcome prediction and early disease detection using ensemble methods and deep learning architectures.",
      authors: ["Saurabh Sharma", "Dr. Jane Smith", "Prof. John Doe"],
      journal: "Journal of Medical AI",
      year: 2023,
      pdfUrl: "/papers/ml-healthcare.pdf",
      doi: "10.1234/jmai.2023.001"
    },
    {
      id: 2,
      title: "Scalable Microservices Architecture for Real-time Data Processing",
      abstract: "An innovative approach to designing scalable microservices architectures that can handle real-time data processing at enterprise scale, with focus on containerization and orchestration strategies.",
      authors: ["Saurabh Sharma", "Dr. Alice Johnson"],
      journal: "IEEE Transactions on Cloud Computing",
      year: 2023,
      pdfUrl: "/papers/microservices-architecture.pdf",
      doi: "10.1109/tcc.2023.456"
    },
    {
      id: 3,
      title: "Blockchain-based Identity Management System for IoT Networks",
      abstract: "A novel blockchain-based identity management framework designed specifically for IoT networks, addressing security, scalability, and interoperability challenges in distributed systems.",
      authors: ["Saurabh Sharma", "Dr. Bob Wilson", "Prof. Carol Davis"],
      journal: "ACM Transactions on Internet of Things",
      year: 2022,
      pdfUrl: "/papers/blockchain-iot.pdf",
      doi: "10.1145/tiot.2022.789"
    }
  ];

  const openPaper = (paper: any) => {
    setSelectedPaper(paper);
  };

  const closePaper = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="group relative bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={() => openPaper(paper)}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-4">
                    {paper.abstract}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      <strong>Authors:</strong> {paper.authors.join(", ")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Published:</strong> {paper.journal}, {paper.year}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-primary font-medium">
                      Click to read
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* PDF Viewer Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedPaper.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedPaper.authors.join(", ")} • {selectedPaper.year}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={selectedPaper.pdfUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={closePaper}>
                  Close
                </Button>
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">PDF Preview</h3>
                    <p className="text-muted-foreground">
                      In a real implementation, this would show an embedded PDF viewer
                    </p>
                    <Button className="mt-4" asChild>
                      <a href={selectedPaper.pdfUrl} target="_blank" rel="noopener noreferrer">
                        Open PDF in New Tab
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Papers;