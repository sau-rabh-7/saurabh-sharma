import Navigation from "@/components/Layout/Navigation";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Experience from "@/components/Sections/Experience";
import Education from "@/components/Sections/Education";
import Certifications from "@/components/Sections/Certifications";
import Blog from "@/components/Sections/Blog";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
