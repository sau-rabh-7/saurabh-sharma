import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/username",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/username",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-full hover:bg-muted"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;