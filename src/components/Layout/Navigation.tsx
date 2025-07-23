import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
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
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (href: string) => {
    return window.location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={0}
        className="border-b border-border/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
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
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-full hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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

export default Navigation;