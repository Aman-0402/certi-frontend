export type CertCategory =
  | 'Programming'
  | 'Data Science'
  | 'Artificial Intelligence'
  | 'Web Development'
  | 'Cloud Computing'
  | 'Cybersecurity'
  | 'DevOps'
  | 'Business & Analytics'

export type CertLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional'

export type CertIcon =
  | 'java'
  | 'data'
  | 'ai'
  | 'web'
  | 'cloud'
  | 'security'
  | 'devops'
  | 'business'

export type Certification = {
  slug: string
  title: string
  category: CertCategory
  level: CertLevel
  description: string
  questions: number
  minutes: number
  price: number
  /**
   * Only true when this certification is actually configured with a
   * certificate template on the backend. Exams without a configured
   * template can still run — they just don't issue a credential.
   */
  certificateIncluded: boolean
  icon: CertIcon
  color: string
  featured?: boolean
}

export const CATEGORIES: { label: CertCategory; icon: CertIcon }[] = [
  { label: 'Programming', icon: 'java' },
  { label: 'Artificial Intelligence', icon: 'ai' },
  { label: 'Data Science', icon: 'data' },
  { label: 'Web Development', icon: 'web' },
  { label: 'Cloud Computing', icon: 'cloud' },
  { label: 'Cybersecurity', icon: 'security' },
  { label: 'DevOps', icon: 'devops' },
  { label: 'Business & Analytics', icon: 'business' },
]

export const CERTIFICATIONS: Certification[] = [
  {
    slug: 'java-programming-professional',
    title: 'Java Programming Professional',
    category: 'Programming',
    level: 'Intermediate',
    description: 'Validate your understanding of Java programming, object-oriented concepts, and core development fundamentals.',
    questions: 60,
    minutes: 90,
    price: 999,
    certificateIncluded: true,
    icon: 'java',
    color: '#e11d48',
  },
  {
    slug: 'data-science-professional',
    title: 'Data Science Professional',
    category: 'Data Science',
    level: 'Advanced',
    description: 'Demonstrate your knowledge of data analysis, statistics, data processing, and practical data science concepts.',
    questions: 50,
    minutes: 75,
    price: 1499,
    certificateIncluded: true,
    icon: 'data',
    color: '#2255ff',
    featured: true,
  },
  {
    slug: 'artificial-intelligence-professional',
    title: 'Artificial Intelligence Professional',
    category: 'Artificial Intelligence',
    level: 'Advanced',
    description: 'Prove your grasp of machine learning fundamentals, neural networks, and applied AI problem-solving.',
    questions: 60,
    minutes: 90,
    price: 1799,
    certificateIncluded: true,
    icon: 'ai',
    color: '#14b8a6',
  },
  {
    slug: 'web-development-professional',
    title: 'Web Development Professional',
    category: 'Web Development',
    level: 'Intermediate',
    description: 'Assess your skills across HTML, CSS, JavaScript, and modern front-end development practices.',
    questions: 60,
    minutes: 90,
    price: 999,
    certificateIncluded: true,
    icon: 'web',
    color: '#f97316',
  },
  {
    slug: 'cloud-computing-professional',
    title: 'Cloud Computing Professional',
    category: 'Cloud Computing',
    level: 'Advanced',
    description: 'Validate your understanding of cloud infrastructure, deployment models, and core service architecture.',
    questions: 50,
    minutes: 75,
    price: 1299,
    certificateIncluded: true,
    icon: 'cloud',
    color: '#2255ff',
  },
  {
    slug: 'cybersecurity-professional',
    title: 'Cybersecurity Professional',
    category: 'Cybersecurity',
    level: 'Professional',
    description: 'Demonstrate your knowledge of threat detection, network security, and defensive security practices.',
    questions: 60,
    minutes: 90,
    price: 1299,
    certificateIncluded: true,
    icon: 'security',
    color: '#16a34a',
  },
  {
    slug: 'devops-foundations',
    title: 'DevOps Foundations',
    category: 'DevOps',
    level: 'Beginner',
    description: 'Cover CI/CD fundamentals, containerization basics, and core DevOps culture and practices.',
    questions: 40,
    minutes: 60,
    price: 799,
    certificateIncluded: false,
    icon: 'devops',
    color: '#7c3aed',
  },
  {
    slug: 'python-programming-associate',
    title: 'Python Programming Associate',
    category: 'Programming',
    level: 'Beginner',
    description: 'Test your foundational Python skills including syntax, data structures, and basic scripting.',
    questions: 45,
    minutes: 60,
    price: 699,
    certificateIncluded: true,
    icon: 'java',
    color: '#e11d48',
  },
  {
    slug: 'business-analytics-professional',
    title: 'Business Analytics Professional',
    category: 'Business & Analytics',
    level: 'Intermediate',
    description: 'Validate your ability to interpret business data, build reports, and drive data-informed decisions.',
    questions: 50,
    minutes: 75,
    price: 1099,
    certificateIncluded: true,
    icon: 'business',
    color: '#0891b2',
  },
  {
    slug: 'react-frontend-professional',
    title: 'React Frontend Professional',
    category: 'Web Development',
    level: 'Advanced',
    description: 'Assess advanced React patterns, state management, and component architecture skills.',
    questions: 55,
    minutes: 90,
    price: 1199,
    certificateIncluded: true,
    icon: 'web',
    color: '#f97316',
  },
  {
    slug: 'machine-learning-associate',
    title: 'Machine Learning Associate',
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    description: 'Cover core ML concepts including supervised learning, model evaluation, and feature engineering.',
    questions: 50,
    minutes: 75,
    price: 1399,
    certificateIncluded: false,
    icon: 'ai',
    color: '#14b8a6',
  },
  {
    slug: 'network-security-associate',
    title: 'Network Security Associate',
    category: 'Cybersecurity',
    level: 'Beginner',
    description: 'Cover foundational network security concepts, common attack vectors, and mitigation basics.',
    questions: 40,
    minutes: 60,
    price: 899,
    certificateIncluded: true,
    icon: 'security',
    color: '#16a34a',
  },
]
