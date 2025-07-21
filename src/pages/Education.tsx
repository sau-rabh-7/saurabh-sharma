import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Sections/Footer";
import { Calendar, MapPin, GraduationCap, Award, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "Massachusetts Institute of Technology",
      logo: "🎓",
      degree: "Master of Science in Computer Science",
      field: "Machine Learning & AI",
      location: "Cambridge, MA",
      period: "2016 - 2018",
      gpa: "3.8/4.0",
      description: "Specialized in machine learning, artificial intelligence, and distributed systems. Conducted research in neural networks and published 2 papers in peer-reviewed conferences.",
      coursework: [
        "Advanced Algorithms & Data Structures",
        "Machine Learning & Deep Learning",
        "Distributed Systems",
        "Computer Vision",
        "Natural Language Processing",
        "Database Systems"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Graduate Research Assistant",
        "Published 2 research papers",
        "TA for Introduction to Algorithms course"
      ],
      thesis: "Optimizing Neural Network Architecture for Real-time Image Processing",
      advisor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      institution: "University of California, Berkeley",
      logo: "🐻",
      degree: "Bachelor of Science in Computer Science",
      field: "Software Engineering",
      location: "Berkeley, CA", 
      period: "2012 - 2016",
      gpa: "3.7/4.0",
      description: "Comprehensive computer science education with focus on software engineering principles, web development, and system design. Active member of multiple tech organizations.",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Operating Systems",
        "Computer Networks",
        "Web Development",
        "Database Management",
        "Computer Graphics",
        "Cybersecurity Fundamentals"
      ],
      achievements: [
        "Magna Cum Laude graduate",
        "President of ACM Student Chapter",
        "Winner of Annual Hackathon 2015",
        "Computer Science Department Scholarship recipient",
        "Peer tutor for 2 years"
      ],
      activities: [
        "ACM Programming Contest Team",
        "Web Development Club Founder",
        "Volunteer coding instructor"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022", 
      icon: "🔧"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
      icon: "⚓"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2021",
      icon: "🍃"
    }
  ];

  const skills = [
    "Full-Stack Development",
    "Machine Learning",
    "Cloud Architecture", 
    "DevOps & CI/CD",
    "System Design",
    "API Development",
    "Database Design",
    "Agile Methodology"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gradient mb-6">Education</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and continuous learning in computer science, 
              machine learning, and software engineering.
            </p>
          </div>

          {/* Education Timeline */}
          <section className="mb-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden lg:block"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className="relative flex flex-col lg:flex-row gap-8 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline marker */}
                    <div className="relative z-10 flex-shrink-0 lg:w-16">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-elegant mx-auto lg:mx-0">
                        {edu.logo}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-strong rounded-2xl p-8 hover-lift">
                      {/* Header */}
                      <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2 space-y-3">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                            <GraduationCap className="w-5 h-5" />
                            {edu.institution}
                          </div>
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 w-fit">
                            {edu.field}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 lg:text-right">
                          <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="text-primary font-semibold">
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Coursework */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Book className="w-5 h-5" />
                            Key Coursework
                          </h4>
                          <div className="space-y-2">
                            {edu.coursework.map((course, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Achievements
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-accent">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed font-medium">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Thesis (for graduate degree) */}
                      {edu.thesis && (
                        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                          <h5 className="font-semibold text-foreground mb-1">Thesis</h5>
                          <p className="text-muted-foreground text-sm mb-2">{edu.thesis}</p>
                          <p className="text-xs text-muted-foreground">Advisor: {edu.advisor}</p>
                        </div>
                      )}
                      
                      {/* Activities (for undergraduate) */}
                      {edu.activities && (
                        <div className="mt-6">
                          <h5 className="font-semibold text-foreground mb-2">Activities & Leadership</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.activities.map((activity) => (
                              <Badge key={activity} variant="secondary" className="text-xs">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications & Skills */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Professional Certifications */}
            <section className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Professional Certifications
              </h2>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth hover-lift"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Skills */}
            <section className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Core Competencies
              </h2>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth hover-lift"
                    style={{ animationDelay: `${index * 100 + 800}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Committed to continuous learning and staying current with emerging technologies 
                  and industry best practices through ongoing education and professional development.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Education;