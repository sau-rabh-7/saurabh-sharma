import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Import your new background components
// import Background from "./components/ui/background";
// import DarkVeil from "./components/ui/DarkVeil";

// Import your pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Papers from "./pages/Papers";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* 2. Create a main wrapper for the backgrounds and content */}
      <div className="relative min-h-screen">
        {/* These components will now render on every page, behind the content */}
        {/* <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
        <DarkVeil/>
        </div>
        <Background /> */}
        
        {/* 3. The rest of your app content renders on top */}
        <div className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/papers" element={<Papers />} />
              <Route path="/certifications" element={<Certifications />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
