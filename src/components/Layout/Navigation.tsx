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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <GlassSurface
        width="auto"
        height={56}
        borderRadius={28}
        className="border border-border/30 shadow-lg shadow-black/10"
        displace={0.5}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.9}
        mixBlendMode="screen"
      >
        <div className="px-6 sm:px-8 w-full max-w-4xl">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link transition-all duration-200 ease-out px-4 py-2 rounded-full text-sm font-medium ${
                    isActivePage(item.href) 
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20 border border-primary/20' 
                      : 'hover:text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:border hover:border-accent/20'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex md:hidden items-center space-x-1">
              {navItems.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link transition-all duration-200 ease-out px-3 py-2 rounded-full text-xs font-medium ${
                    isActivePage(item.href) 
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20 border border-primary/20' 
                      : 'hover:text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:border hover:border-accent/20'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="h-8 w-8 rounded-full hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 p-0"
                >
                  {isMobileMenuOpen ? <X className="scale-[1.2]" /> : <Menu className="scale-[1.2]" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </GlassSurface>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={16}
          className="border border-border/30 shadow-lg shadow-black/10"
          displace={0.5}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.9}
          mixBlendMode="screen"
        >
          <div className={`p-3 space-y-1 w-full min-w-[200px] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            {navItems.slice(3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`nav-link block text-sm font-medium w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
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
    </nav>
  );
};

// Theme Toggle Component
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean, onToggle: () => void }) => {
  return (
    <label className="switch">
      <input 
        type="checkbox" 
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