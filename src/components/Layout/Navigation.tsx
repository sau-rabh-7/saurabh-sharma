import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassSurface from "@/components/ui/GlassSurface";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Papers", href: "/papers" },
    { label: "Certifications", href: "/certifications" },
    // { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Set initial theme based on localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActivePage = (href: string) => {
    if (typeof window !== 'undefined') {
        return window.location.pathname === href;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={0}
        className="border-b border-border/20"
        displace={0.5}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.9}
        mixBlendMode="screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-700 to-indigo-500 animate-text">
                Saurabh Sharma
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`nav-link transition-all duration-200 ease-out ${
                      isActivePage(item.href) 
                        ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20 border border-primary/20' 
                        : 'hover:text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:border hover:border-accent/20'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  //size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="h-10 w-10 rounded-full hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
                >
                  {isMobileMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </GlassSurface>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={0}
            className="border-b border-border/20" 
          >
            <div className="px-2 pt-2 pb-3 space-y-1 w-full">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link block text-base font-medium w-full text-left transition-all duration-200 ${
                    isActivePage(item.href) 
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20 border border-primary/20' 
                      : 'hover:text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:border hover:border-accent/20'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </GlassSurface>
        </div>
      )}
    </nav>
  );
};

// It's good practice to have the ThemeToggle as a separate component.
// You can move this to "@/components/ui/ThemeToggle.tsx"
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean, onToggle: () => void }) => {
  return (
    <label className="switch">
      <input 
        type="checkbox" 
        // The 'checked' state now represents LIGHT mode, so we invert the 'isDark' boolean.
        checked={!isDark}
        onChange={onToggle}
      />
      <span className="slider">
        <div className="star star_1"></div>
        <div className="star star_2"></div>
        <div className="star star_3"></div>
        <svg viewBox="0 0 16 16" className="cloud_1 cloud">
          <path
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
            fill="#fff"
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
          ></path>
        </svg>
      </span>
    </label>
  );
};

export default Navigation;
