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
      title: "Performance Evaluation of Multi-Power, Multi-Prime, and Multi-Exponent RSA Variants",
      abstract: "This paper investigates advanced RSA variants—Multi-Power, Multi-Prime, and Multi-Exponent RSA—to address the challenges of balancing cryptographic security with computational performance.",
      authors: ["Saurabh Sharma", "Abhilash Panigrahi", "Sidharth Sivakumar"],
      journal: "IEEE",
      year: 2025,
      pdfUrl: "https://drive.google.com/file/d/1DnGMZPs87HCN94Y2h3h8yR55d0UsneTQ/view?usp=sharing",
      doi: "10.1234/jmai.2023.001"
    }
  ];

  const openPaper = (paper: any) => {
    setSelectedPaper(paper);
  };

  const closePaper = () => {
    setSelectedPaper(null);
  };

  // --- CHANGE 1: Function to create an embeddable Google Drive URL ---
  const getEmbedUrl = (url: string) => {
    // Extracts the file ID from the sharing URL and constructs a preview URL
    const fileId = url.split('/d/')[1]?.split('/')[0];
    if (!fileId) return ""; // Return empty string if URL format is unexpected
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const getDownloadUrl = (url: string) => {
    const fileId = url.split('/d/')[1]?.split('/')[0];
    if (!fileId) return "";
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
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
                {/* ... Card content remains the same ... */}
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
              <Button variant="outline" size="sm" asChild className="group sm:flex-1 h-10 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                  <a href={getDownloadUrl(selectedPaper.pdfUrl)}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={closePaper} className="text-primary group sm:flex-1 h-10 px-6 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                  Close
                </Button>
              </div>
            </div>
            
            {/* --- CHANGE 2: Replaced placeholder with an iframe for the PDF --- */}
            <div className="flex-1 p-2 sm:p-4 bg-muted/50">
              <iframe
                src={getEmbedUrl(selectedPaper.pdfUrl)}
                className="w-full h-full rounded-lg"
                title={selectedPaper.title}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Papers;