// ──────────────────────────────────────────────────────────────
// src/data/portfolio.ts
// ──────────────────────────────────────────────────────────────
// All site copy, project data, service definitions, and bio live
// here. Components import from this file — zero hardcoded strings.

export const SITE_META = {
  name:            'Sanghpal Bhakte',
  title:           'Full-Stack & AI Automation Developer',
  headline:        'I build the boring systems\nthat make everything else work.',
  subheadline:     'Student and builder from Chhatrapati Sambhajinagar, India, focused on workflow automation, AI chatbots and agents, and website development. I care more about whether a system actually works than how impressive it sounds — practical, budget-conscious, and built to be used.',
  location:        'Chhatrapati Sambhajinagar, India',
  available:       true,
  github:          'https://github.com/SanghpalBhakte',
  linkedin:        'https://www.linkedin.com/in/sanghpal-bhakte-054b91367/',
  instagram:       'https://www.instagram.com/sanghpal_1/',
};

export const STATS = [
  { value: '3+',  label: 'Products Shipped' },
  { value: '10x', label: 'Faster Workflows' },
  { value: '2nd', label: 'Year @ AI & DS'  },
];

export const SERVICES = [
  {
    id:    'web-dev',
    icon:  '⚡',
    title: 'Website Development',
    description: 'Fast, practical, and budget-conscious websites. No flashy gimmicks—just clean, accessible code that works reliably on any device.',
    stack: ['Next.js', 'React', 'TypeScript', 'Firebase'],
  },
  {
    id:    'ai-agents',
    icon:  '🤖',
    title: 'AI Chatbots & Agents',
    description: 'Support bots and agents that actually resolve queries instead of frustrating users. Built to integrate seamlessly with your existing tools.',
    stack: ['LangChain', 'OpenAI', 'n8n', 'WhatsApp API'],
  },
  {
    id:    'workflow-automation',
    icon:  '⚙️',
    title: 'Workflow Automation',
    description: 'I automate the boring, repetitive tasks that drain your team\'s time. Simple, robust pipelines that connect your apps and move data without manual effort.',
    stack: ['n8n', 'Make.com', 'Webhooks', 'APIs'],
  },
  {
    id:    'digital-infrastructure',
    icon:  '🏗️',
    title: 'Digital Infrastructure',
    description: 'Solid, no-nonsense setups for small businesses. From automated booking systems to simple CRMs, I build the foundations that help you operate smoothly.',
    stack: ['Firebase', 'Node.js', 'Notion', 'PostgreSQL'],
  },
];

export const SYSTEMS = [
  {
    id: 'janai',
    title: 'Janai Tours & Travels — Chatbot & Lead Workflow',
    description: 'A simple background pipeline that handles repetitive questions and catches missed leads via WhatsApp, ensuring no customer falls through the cracks.',
    tags: ['AI Agents', 'Chatbots', 'WhatsApp API', 'Lead Automation'],
  },
  {
    id: 'campus-os',
    title: 'Student Productivity Systems (CampusOS)',
    description: 'A quiet system connecting Notion and Todoist. It automates academic tracking so you can focus on actually studying instead of organizing tasks.',
    tags: ['Productivity', 'Notion API', 'Integrations', 'Workflow'],
  },
  {
    id: 'travel-rag',
    title: 'Travel Agency Workflow Automation',
    description: 'A practical retrieval pipeline that instantly pulls travel data to assemble itineraries, turning hours of manual research into a few seconds of work.',
    tags: ['RAG Pipeline', 'Workflow Automation', 'Data Retrieval'],
  },
];

export type ProjectCategory = 'All' | 'Web App' | 'AI & Automation' | 'Campus Tools' | 'Design';
export const PROJECT_FILTERS: ProjectCategory[] = ['All', 'Web App', 'AI & Automation', 'Campus Tools', 'Design'];

export const PROJECTS = [
  {
    id: 'janai-tours', icon: '🤖',
    title: 'Janai Tours — AI Chatbot System', client: 'Janai Tours & Travels',
    category: 'AI & Automation' as const,
    tags: ['AI Chatbot', 'n8n', 'WhatsApp API'],
    description: 'A practical WhatsApp and Telegram bot that handles customer queries and captures leads 24/7, reducing manual support workload.',
    links: [{ label: 'GitHub', href: 'https://github.com/SanghpalBhakte' }],
  },
  {
    id: 'lead-workflow', icon: '⚡',
    title: 'Lead Follow-up Automation', client: 'Internal Automation',
    category: 'AI & Automation' as const,
    tags: ['n8n', 'Notion', 'Telegram'],
    description: 'A simple, reliable background workflow that tracks cold leads and automatically sends reminders via Telegram.',
    links: [{ label: 'GitHub', href: 'https://github.com/SanghpalBhakte' }],
  },
  {
    id: 'student-os', icon: '🎓',
    title: 'Student Productivity OS', client: 'Personal Project',
    category: 'Campus Tools' as const,
    tags: ['Notion', 'Todoist', 'Integrations'],
    description: 'A no-nonsense, unified workspace syncing Notion and Todoist to manage academic tasks and projects efficiently.',
    links: [],
  },
  {
    id: 'esummit-gfx', icon: '🎨',
    title: 'E-Summit Brand & Design', client: 'College E-Summit',
    category: 'Design' as const,
    tags: ['Branding', 'Social Media', 'Photoshop'],
    description: 'Clean, budget-conscious visual identity and social media assets for a college entrepreneurship summit.',
    links: [{ label: 'Behance', href: 'https://www.behance.net/gallery/252873023/E-Summit-Social-Media-Graphic-Design-Showcase' }],
  },
];

export const SKILLS: Record<string, string[]> = {
  Frontend:           ['Next.js', 'React', 'TypeScript', 'HTML / CSS'],
  Backend:            ['Firebase', 'Node.js', 'REST APIs'],
  'AI & Automation':  ['LangChain', 'OpenAI API', 'n8n', 'Make.com', 'WhatsApp API'],
  Design:             ['Figma', 'Photoshop', 'Canva'],
};

export const BIO_PARAGRAPHS = [
  "I am a 2nd-year <strong>AI & Data Science</strong> student and builder based in <strong>Chhatrapati Sambhajinagar, India</strong>. I focus on creating systems that are practical, budget-conscious, and built to be used.",
  "I care more about whether a system actually works than how impressive it sounds. Whether I'm building a fast website, a reliable AI support bot, or orchestrating automated workflows, my goal is to eliminate manual effort and solve real problems.",
  "I am currently open to <strong>internships</strong> and freelance partnerships. If you need a builder who prioritizes usability and reliability over hype, let's connect through my social links below."
];
