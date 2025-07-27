import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar, MessageCircle, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = {
    email: "saurabh98048@gmail.com",
    phone: "+91 9263591593",
    location: "Nepal / India",
    timezone: "GMT+5:45 / GMT+5:30",
    status: "Open to Work",
    availableFor: ["Full-time positions", "Freelance projects", "Consulting", "Speaking engagements"]
  };

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/sau-rabh-7",
      username: "@sau-rabh-7"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "www.linkedin.com/in/saurabhsharma98048",
      username: "in/saurabhsharma98048"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/saurabh98048",
      username: "@saurabh98048"
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <section className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
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
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
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
                    <h4 className="font-semibold text-foreground mb-2 text-xl">Available for:</h4>
                    <ul className="space-y-1">
                      {contactInfo.availableFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2 text-xl">Working Hours</h4>
                    <p className="text-muted-foreground">{workingHours.availability}</p>
                    <p className="text-muted-foreground">{workingHours.timezone}</p>
                    <p className="text-muted-foreground mt-1">{workingHours.responseTime}</p>
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
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Side - Contact Form */}
            <div className="glass-card p-6 rounded-xl max-h-[600px] overflow-hidden">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <Button variant="hero" className="group w-full flex items-center transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                <Send className="w-4 h-4 mr-2 text-primary transition-colors" />
                <span className="text-lg">Send Message</span>
                <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </div>
          </div>

          {/* Social Links - Horizontal */}
          <section className="mt-12 glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Connect</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth hover-lift group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-smooth">
                    {social.icon}
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground text-sm">{social.platform}</p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-16 text-center glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h3>
            <p className="text-muted-foreground mb-6">
              Need something specific? Here are some quick ways to get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-2xl mx-auto">
            <Button variant="outline" size="lg" asChild className="group sm:flex-1 h-12 px-4 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
              <a
                href={`mailto:${contactInfo.email}?subject=Job Opportunity`}
                className="flex items-center justify-center w-full"
              >
                <Mail className="w-4 h-4 mr-2 text-primary transition-colors" />
                <span>Job Inquiry</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group sm:flex-1 h-12 px-4 transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
              <a
                href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                className="flex items-center justify-center w-full"
              >
                <Mail className="w-4 h-4 mr-2 text-primary transition-colors" />
                <span>Project Inquiry</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
              <Button variant="hero" size="lg" className="group sm:flex-1 h-12 px-4 flex items-center justify-center w-full transition-all duration-300 ease-spring hover:-translate-y-1 hover:shadow-lg">
                  <Calendar className="w-4 h-4 mr-2 text-primary transition-colors" />
                  <span>Schedule Call</span>
                  <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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