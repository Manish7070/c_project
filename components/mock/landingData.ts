import { 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Heart, 
  Award, 
  Video, 
  FileText, 
  Link, 
  CheckCircle,
  Trophy,
  GraduationCap,
  FolderOpen
} from "lucide-react";

export const stats = [
  { icon: FileText, value: "10,000+", label: "Resources", color: "bg-accent-blue" },
  { icon: BookOpen, value: "500+", label: "Subjects", color: "bg-accent-green" },
  { icon: Users, value: "5,000+", label: "Student Contributors", color: "bg-accent-purple" },
  { icon: GraduationCap, value: "50+", label: "Universities", color: "bg-accent-yellow" },
];

export const features = [
  {
    icon: FolderOpen,
    title: "Structured by Syllabus",
    description: "University → Course → Semester → Subject → Unit → Topic",
    color: "bg-accent-blue/20",
    iconColor: "text-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "Trusted Resources",
    description: "Resources are reviewed and approved before they become part of the library.",
    color: "bg-accent-green/20",
    iconColor: "text-emerald-600"
  },
  {
    icon: Users,
    title: "Student Powered",
    description: "Students contribute resources, help peers, and grow their reputation.",
    color: "bg-accent-purple/20",
    iconColor: "text-purple-600"
  },
  {
    icon: Heart,
    title: "Helpful Community",
    description: "Mark resources as helpful and bookmark what actually works for you.",
    color: "bg-accent-red/20",
    iconColor: "text-red-600"
  },
  {
    icon: Trophy,
    title: "Earn Recognition",
    description: "Earn reputation and badges for meaningful contributions.",
    color: "bg-accent-yellow/20",
    iconColor: "text-amber-600"
  }
];

export const subjects = [
  { name: "Data Structures", units: 4, resources: 120, color: "bg-blue-50" },
  { name: "Operating Systems", units: 5, resources: 96, color: "bg-green-50" },
  { name: "Database Systems", units: 4, resources: 85, color: "bg-purple-50" },
  { name: "Computer Networks", units: 5, resources: 76, color: "bg-orange-50" },
  { name: "Software Engineering", units: 5, resources: 64, color: "bg-yellow-50" },
];

export const contributors = [
  { id: 1, name: "Aman Verma", username: "@amanv", points: 2450, badge: "Elite Contributor", avatar: "AV" },
  { id: 2, name: "Sneha Patel", username: "@sneha_p", points: 2120, badge: "Master Researcher", avatar: "SP" },
  { id: 3, name: "Rohit Kumar", username: "@rohitk", points: 1890, badge: "Expert Scholar", avatar: "RK" },
  { id: 4, name: "Priya Singh", username: "@priyas", points: 1650, badge: "Helpful Peer", avatar: "PS" },
  { id: 5, name: "Karan Joshi", username: "@karanj", points: 1430, badge: "Rising Star", avatar: "KJ" },
];

export const testimonials = [
  {
    text: "StudySync saved me so much time. I found exactly the DBMS resources I needed without searching through hundreds of random links.",
    author: "Neha Sharma",
    major: "Computer Science",
    avatar: "NS"
  },
  {
    text: "The syllabus-based structure makes it incredibly easy to find the right resources for every topic.",
    author: "Rohan Mehta",
    major: "Information Technology",
    avatar: "RM"
  },
  {
    text: "Contributing resources feels meaningful because I can actually see that other students are using them.",
    author: "Ananya Gupta",
    major: "Electronics Engineering",
    avatar: "AG"
  }
];

export const badges = [
  {
    title: "First Contribution",
    description: "Submit your first approved resource.",
    icon: Trophy,
    color: "text-amber-500"
  },
  {
    title: "Helpful Senior",
    description: "25+ students found your resources helpful.",
    icon: Heart,
    color: "text-red-500"
  },
  {
    title: "Top Contributor",
    description: "15+ approved resources.",
    icon: Award,
    color: "text-purple-500"
  },
  {
    title: "Subject Expert",
    description: "5+ approved resources in one subject.",
    icon: ShieldCheck,
    color: "text-emerald-500"
  }
];
