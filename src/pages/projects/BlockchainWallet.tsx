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

const BlockchainWallet = () => {
  const project = {
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
    longDescription: `A comprehensive blockchain wallet application supporting multiple cryptocurrencies and blockchain networks. The wallet prioritizes security with hardware wallet integration and multi-signature capabilities for enterprise users.

The application features a clean, intuitive interface for managing digital assets across Ethereum, Bitcoin, and other major blockchain networks. Advanced features include DeFi protocol integration, allowing users to participate in yield farming and liquidity mining directly from the wallet.

Security is paramount with implementation of BIP-39 mnemonic phrases, hierarchical deterministic (HD) wallet structure, and end-to-end encryption. The application also includes real-time price tracking, transaction history analysis, and portfolio management tools for comprehensive asset oversight.`,
    year: "2023",
    team: "3 Developers",
    status: "Completed",
    techStack: ["React", "Web3.js", "Ethers.js", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
    githubUrl: "https://github.com/example/blockchain-wallet",
    demoUrl: "https://crypto-wallet-demo.example.com",
    screenshots: [
      "/public/images/slideshow-3.jpg",
      "/public/images/slideshow-1.jpg",
      "/public/images/slideshow-2.jpg"
    ],
    additionalImages: [
      {
        src: "/public/images/slideshow-3.jpg",
        alt: "Wallet dashboard interface"
      },
      {
        src: "/public/images/slideshow-1.jpg",
        alt: "Transaction management"
      }
    ],
    codeExamples: [
      {
        title: "Multi-Chain Wallet Connection",
        language: "javascript",
        code: `// Multi-chain wallet connection with Web3 providers
class MultiChainWallet {
  constructor() {
    this.providers = new Map();
    this.accounts = new Map();
  }
  
  async connectChain(chainId, rpcUrl) {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      await provider.ready;
      
      this.providers.set(chainId, provider);
      console.log(\`Connected to chain \${chainId}\`);
      
      return provider;
    } catch (error) {
      throw new Error(\`Failed to connect to chain \${chainId}: \${error.message}\`);
    }
  }
  
  async getBalance(chainId, address, tokenAddress = null) {
    const provider = this.providers.get(chainId);
    if (!provider) throw new Error(\`Chain \${chainId} not connected\`);
    
    if (tokenAddress) {
      // ERC-20 token balance
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const balance = await contract.balanceOf(address);
      const decimals = await contract.decimals();
      return ethers.utils.formatUnits(balance, decimals);
    } else {
      // Native token balance
      const balance = await provider.getBalance(address);
      return ethers.utils.formatEther(balance);
    }
  }
}`
      },
      {
        title: "Secure Transaction Signing",
        language: "typescript",
        code: `// Secure transaction signing with hardware wallet support
interface TransactionParams {
  to: string;
  value: string;
  gasLimit?: string;
  gasPrice?: string;
  data?: string;
}

class SecureTransactionManager {
  private wallet: ethers.Wallet | null = null;
  private hardwareWallet: any = null;
  
  async signTransaction(
    params: TransactionParams,
    useHardware: boolean = false
  ): Promise<string> {
    const transaction = {
      to: params.to,
      value: ethers.utils.parseEther(params.value),
      gasLimit: params.gasLimit || '21000',
      gasPrice: params.gasPrice || ethers.utils.parseUnits('20', 'gwei'),
      data: params.data || '0x'
    };
    
    if (useHardware && this.hardwareWallet) {
      // Sign with hardware wallet
      return await this.hardwareWallet.signTransaction(transaction);
    } else if (this.wallet) {
      // Sign with software wallet
      return await this.wallet.signTransaction(transaction);
    }
    
    throw new Error('No wallet available for signing');
  }
  
  async broadcastTransaction(signedTx: string): Promise<string> {
    const provider = this.getProvider();
    const result = await provider.sendTransaction(signedTx);
    return result.hash;
  }
}`
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

export default BlockchainWallet;