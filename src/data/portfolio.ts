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
    description: 'Helps the travel agency miss fewer leads by auto-replying to inquiries, qualifying them, and nudging the team to follow up instead of forgetting.',
    tags: ['Automation', 'AI Agents', 'Chatbots', 'WhatsApp API'],
    link: '#project-janai-tours',
  },
  {
    id: 'campus-os',
    title: 'Student Productivity & Personal Systems (CampusOS)',
    description: 'Gives students a simple daily setup so they actually use their tools—less chaos across apps, more \'I know what I’m doing today\'.',
    tags: ['Student Productivity', 'Notion', 'Workflow'],
    link: '#project-student-os',
  },
  {
    id: 'travel-rag',
    title: 'Travel Agency Workflow Automation',
    description: 'Makes travel agency tasks run almost automatically by auto-fetching info, filling in details, and handling routine messages in the background.',
    tags: ['RAG Pipeline', 'Automation', 'Background Tasks'],
    link: '#project-travel-rag',
  },
];

export type ProjectCategory = 'All' | 'Web App' | 'AI & Automation' | 'Campus Tools' | 'Design';
export const PROJECT_FILTERS: ProjectCategory[] = ['All', 'Web App', 'AI & Automation', 'Campus Tools', 'Design'];

export const PROJECTS = [
  {
    id: 'janai-tours', icon: '🤖',
    title: 'Janai Tours & Travels — Chatbot & Follow-up Workflow', client: 'Janai Tours & Travels',
    category: 'AI & Automation' as const,
    tags: ['AI Chatbot', 'n8n', 'WhatsApp API'],
    description: 'WhatsApp bot + reminder system so leads don’t die in the inbox.',
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
    title: 'Student Productivity & Personal Systems (CampusOS)', client: 'Personal Project',
    category: 'Campus Tools' as const,
    tags: ['Notion', 'Todoist', 'Integrations'],
    description: 'Student workflow layer that cuts app chaos and makes it clear what to do today instead of juggling five tools.',
    links: [],
  },
  {
    id: 'travel-rag', icon: '⚙️',
    title: 'Travel Agency Workflow Automation (RAG pipeline, etc.)', client: 'Travel Agency',
    category: 'AI & Automation' as const,
    tags: ['RAG Pipeline', 'Workflow Automation'],
    description: 'Itinerary + info handled automatically so staff stop copy-pasting.',
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
  "I’m a student and builder from <strong>Chhatrapati Sambhajinagar, India</strong>. Most of my time goes into making sure a flow actually works in the real world: I test automation paths, chatbot conversations, and tiny edge cases obsessively before shipping so people can just use the system without thinking about it."
];
