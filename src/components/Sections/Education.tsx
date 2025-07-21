import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  logo: string;
  description: string;
  achievements: string[];
  relevantCourses: string[];
}

const Education = () => {
  const educations: Education[] = [
    {
      id: "masters-cs",
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2018-09",
      endDate: "2020-06",
      gpa: "3.8",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
      description: "Specialized in Machine Learning and Distributed Systems with a focus on scalable web applications and AI-driven solutions.",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Teaching Assistant for Data Structures and Algorithms",
        "Published 2 research papers in conference proceedings",
        "Winner of Annual Hackathon - Best AI Solution"
      ],
      relevantCourses: [
        "Machine Learning",
        "Distributed Systems",
        "Database Systems",
        "Computer Networks",
        "Software Engineering",
        "Algorithms Design"
      ]
    },
    {
      id: "bachelors-cs",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2014-09",
      endDate: "2018-05",
      gpa: "3.7",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      description: "Comprehensive computer science education with strong foundation in programming, mathematics, and software development principles.",
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Student Association",
        "Recipient of Academic Excellence Scholarship",
        "Completed Senior Capstone Project on Blockchain Technology"
      ],
      relevantCourses: [
        "Data Structures",
        "Algorithms",
        "Computer Architecture",
        "Operating Systems",
        "Web Development",
        "Mobile App Development"
      ]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const EducationCard = ({ education }: { education: Education }) => (
    <Card className="group transition-spring hover:shadow-elegant hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <img
              src={education.logo}
              alt={`${education.institution} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg group-hover:text-primary transition-smooth mb-1">
              {education.degree}
            </CardTitle>
            <p className="text-primary font-semibold mb-2">{education.institution}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(education.startDate)} - {formatDate(education.endDate)}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {education.location}
              </div>
              {education.gpa && (
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  GPA: {education.gpa}
                </div>
              )}
            </div>
          </div>
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          {education.description}
        </p>

        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {education.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course) => (
              <Badge key={course} variant="secondary" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise and problem-solving approach.
          </p>
        </div>

        <div className="space-y-8">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;