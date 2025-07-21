import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = {
    email: "hello@johndoe.dev",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    status: "Open to Work",
    availableFor: ["Full-time positions", "Freelance projects", "Consulting", "Speaking engagements"]
  };

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/username",
      username: "@username"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/username",
      username: "in/username"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/username",
      username: "@username"
    }
  ];

  const preferredRoles = [
    "Senior Full Stack Developer",
    "Lead Frontend Developer",
    "Technical Lead",
    "Solutions Architect"
  ];

  const workingHours = {
    timezone: "PST (UTC-8)",
    availability: "Mon-Fri, 9 AM - 6 PM",
    responseTime: "Usually within 24 hours"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gradient mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section className="glass-strong p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="freelance-project">Freelance Project</option>
                    <option value="consulting">Consulting</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full hover-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </section>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <section className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-smooth">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-smooth">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{contactInfo.location}</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.timezone}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Availability Status */}
              <section className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Availability
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {contactInfo.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Available for:</h4>
                    <ul className="space-y-1">
                      {contactInfo.availableFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">{workingHours.availability}</p>
                    <p className="text-sm text-muted-foreground">{workingHours.timezone}</p>
                    <p className="text-xs text-muted-foreground mt-1">{workingHours.responseTime}</p>
                  </div>
                </div>
              </section>

              {/* Preferred Roles */}
              <section className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Interested Roles</h3>
                <div className="space-y-2">
                  {preferredRoles.map((role) => (
                    <div key={role} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Social Links */}
              <section className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Connect</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth hover-lift group"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-smooth">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.platform}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Quick Actions */}
          <section className="mt-16 text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h3>
            <p className="text-muted-foreground mb-6">
              Need something specific? Here are some quick ways to get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button variant="outline" size="lg" asChild className="flex-1">
                <a href={`mailto:${contactInfo.email}?subject=Job Opportunity`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Job Inquiry
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="flex-1">
                <a href={`mailto:${contactInfo.email}?subject=Freelance Project`}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Project Inquiry
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild className="flex-1">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;