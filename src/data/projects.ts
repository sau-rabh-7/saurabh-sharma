export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: "Completed" | "In Progress" | "Planning";
  year: string;
  team: string;
  featured: boolean;
  codeExamples: {
    title: string;
    language: string;
    code: string;
  }[];
  additionalImages: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with modern UI, secure payments, and admin dashboard.",
    longDescription: `This full-stack e-commerce platform represents a complete solution for online retail businesses. Built with React and Node.js, it features a modern, responsive design that works seamlessly across all devices.

The platform includes comprehensive user management with secure authentication, a dynamic product catalog with advanced filtering and search capabilities, a robust shopping cart system, and secure payment processing through Stripe integration.

On the administrative side, the platform offers a powerful dashboard for inventory management, order tracking, sales analytics, and customer relationship management. The system is designed to scale with growing businesses and handle high traffic loads efficiently.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS", "Express", "Redis"],
    githubUrl: "https://github.com/username/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
    status: "Completed",
    year: "2024",
    team: "Solo Project",
    featured: true,
    codeExamples: [
      {
        title: "User Authentication Middleware",
        language: "javascript",
        code: `const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};`
      },
      {
        title: "React Product Component",
        language: "typescript",
        code: `interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="product-card">
      <img src={product.image} alt={product.name} />
      <CardContent>
        <h3>{product.name}</h3>
        <p>$\{product.price}</p>
        <Button onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        alt: "Mobile responsive design"
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        alt: "Admin dashboard"
      }
    ]
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description: "Real-time chat application with AI-powered features and sentiment analysis.",
    longDescription: `A modern chat application featuring real-time messaging, AI-powered chatbots, sentiment analysis, file sharing, and group chat functionality. Built with React, Express.js, Socket.io, and integrated with OpenAI API.

The application uses advanced natural language processing to understand user intents and provide contextual responses. It includes features like conversation memory, sentiment analysis for better user experience, and seamless integration with various third-party services.

The backend is designed with scalability in mind, using Redis for session management and PostgreSQL for persistent data storage. The real-time features are powered by WebSocket connections for instant messaging.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop"
    ],
    techStack: ["React", "Express.js", "Socket.io", "OpenAI API", "PostgreSQL", "Redis", "TypeScript"],
    githubUrl: "https://github.com/username/ai-chatbot",
    demoUrl: "https://chatbot-demo.com",
    status: "In Progress",
    year: "2024",
    team: "2 Developers",
    featured: true,
    codeExamples: [
      {
        title: "OpenAI Integration",
        language: "typescript",
        code: `import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateResponse = async (message: string, context: string[]) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...context.map(msg => ({ role: "user" as const, content: msg })),
        { role: "user", content: message }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return "Sorry, I'm having trouble processing your request.";
  }
};`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
        alt: "Chat interface design"
      }
    ]
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description: "Collaborative task management with real-time updates and analytics.",
    longDescription: `A comprehensive project management tool with kanban boards, real-time collaboration, time tracking, analytics dashboard, and team management features. Perfect for agile development teams.

The system provides intuitive drag-and-drop interfaces for task management, real-time notifications for team updates, and detailed analytics for project tracking. Built with modern technologies to ensure smooth performance and reliability.

Features include advanced filtering and sorting options, customizable workflows, integration with popular development tools, and comprehensive reporting capabilities for project managers and stakeholders.`,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/username/task-manager",
    demoUrl: "https://taskmanager-demo.com",
    status: "Completed",
    year: "2023",
    team: "3 Developers",
    featured: true,
    codeExamples: [
      {
        title: "Task Board Component",
        language: "typescript",
        code: `interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  assignee: string;
  priority: 'low' | 'medium' | 'high';
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="flex gap-4">
      {['todo', 'in-progress', 'done'].map(status => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter(t => t.status === status)}
          onTaskMove={moveTask}
        />
      ))}
    </div>
  );
};`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
        alt: "Analytics dashboard"
      }
    ]
  },
  {
    id: "weather-app",
    title: "Weather Analytics Dashboard",
    description: "Data visualization dashboard for weather patterns and climate analysis.",
    longDescription: `Interactive dashboard for weather data analysis with real-time updates, historical data visualization, predictive analytics, and customizable reports. Built with modern data visualization libraries.

The application aggregates weather data from multiple sources to provide comprehensive climate analysis tools. It features interactive charts, maps, and graphs that help users understand weather patterns and trends.

Advanced features include machine learning-powered weather predictions, historical data comparison tools, and customizable alert systems for weather events.`,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
    ],
    techStack: ["React", "D3.js", "Python", "FastAPI", "Redis", "Chart.js"],
    githubUrl: "https://github.com/username/weather-dashboard",
    demoUrl: "https://weather-dashboard-demo.com",
    status: "Completed",
    year: "2023",
    team: "Solo Project",
    featured: false,
    codeExamples: [
      {
        title: "Weather Data Visualization",
        language: "typescript",
        code: `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeatherData {
  date: string;
  temperature: number;
  humidity: number;
  precipitation: number;
}

const WeatherChart: React.FC<{ data: WeatherData[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="temperature" 
          stroke="#8884d8" 
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="humidity" 
          stroke="#82ca9d" 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
        alt: "Weather map visualization"
      }
    ]
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    description: "Content management system for portfolios with drag-and-drop interface and dynamic content updates.",
    longDescription: `A powerful content management system designed specifically for portfolio websites. Features include a drag-and-drop page builder, dynamic content management, SEO optimization tools, and responsive design templates.

The system allows users to create and manage their portfolio content without technical knowledge, while providing developers with powerful customization options. It includes features like image optimization, content versioning, and analytics integration.

Built with modern web technologies to ensure fast loading times and excellent user experience across all devices.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    ],
    techStack: ["Vue.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Nuxt.js"],
    githubUrl: "https://github.com/username/portfolio-cms",
    status: "Completed",
    year: "2023",
    team: "Solo Project",
    featured: false,
    codeExamples: [
      {
        title: "Drag and Drop Builder",
        language: "javascript",
        code: `import { VueDraggableNext } from 'vue-draggable-next';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      components: [
        { id: 1, type: 'hero', content: 'Hero Section' },
        { id: 2, type: 'about', content: 'About Section' },
        { id: 3, type: 'projects', content: 'Projects Section' }
      ]
    };
  },
  methods: {
    onDragEnd(event) {
      console.log('Component moved:', event);
      this.saveLayout();
    },
    saveLayout() {
      // Save the current layout to backend
      this.$api.post('/layout', { components: this.components });
    }
  }
};`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        alt: "CMS interface"
      }
    ]
  },
  {
    id: "blockchain-voting",
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology for transparency and immutability.",
    longDescription: `A decentralized voting platform built on blockchain technology to ensure transparency, security, and immutability of the voting process. The system uses smart contracts to manage elections and verify voter eligibility.

The platform provides a user-friendly interface for voters while maintaining the highest security standards. It includes features like voter verification, real-time vote counting, and transparent result publishing.

Built with Ethereum smart contracts and modern web technologies to create a trustworthy and accessible voting solution for organizations and communities.`,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"
    ],
    techStack: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "Hardhat"],
    githubUrl: "https://github.com/username/blockchain-voting",
    status: "In Progress",
    year: "2024",
    team: "Solo Project",
    featured: false,
    codeExamples: [
      {
        title: "Voting Smart Contract",
        language: "solidity",
        code: `pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;
    uint public candidatesCount;

    event votedEvent(uint indexed _candidateId);

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        require(!voters[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");

        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit votedEvent(_candidateId);
    }
}`
      }
    ],
    additionalImages: [
      {
        src: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
        alt: "Blockchain interface"
      }
    ]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getAllProjects = () => projects;