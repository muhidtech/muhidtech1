
export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image?: string;
  featured?: boolean;
  author?: string;
  readTime?: string;
  tags?: string[];
  content: string;
  videoUrl?: string;
}

export const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Design in 2025',
    summary: 'Explore the trends shaping UI/UX this year and how we at MuhidTech are preparing for them.',
    category: 'Design',
    date: 'May 20, 2025',
    slug: 'future-of-web-design-2025',
    image: '/images/blog-4.jpg',
    featured: true,
    author: 'MuhidTech Team',
    readTime: '5 min read',
    tags: ['UI/UX', 'Trends', '2025'],
    content: `
Web design is evolving rapidly. In 2025, we expect to see more immersive and interactive designs.

At MuhidTech, we focus on blending usability with cutting-edge visuals...

## New Trends

- AI-driven design automation
- Micro-interactions that delight users
- Dark mode as default

Stay tuned as we explore these trends and apply them in our projects.
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Optimizing SEO in Modern Web Apps',
    summary: 'Our favorite tools and best practices for getting your site to rank higher.',
    category: 'SEO',
    date: 'May 18, 2025',
    slug: 'seo-modern-web',
    image: '/images/blog-5.jpg',
    featured: false,
    author: 'Samir Muhid',
    readTime: '4 min read',
    tags: ['SEO', 'Web Performance'],
    content: `
SEO is more important than ever in 2025. Modern web apps must balance performance and SEO.

We use tools like Lighthouse, Google Search Console, and advanced meta tags...

## Best Practices

1. Server-side rendering
2. Proper meta tags and OpenGraph
3. Fast loading times
    `,
  },
  {
    id: 3,
    title: 'Building Modern UI with Tailwind & Framer Motion',
    summary: 'Discover how we create performant and beautiful interfaces using Tailwind CSS and Framer Motion.',
    category: 'UI/UX',
    date: 'May 20, 2025',
    slug: 'building-modern-ui',
    image: '/images/blog-1.jpg',
    featured: true,
    author: 'MuhidTech Devs',
    readTime: '6 min read',
    tags: ['Tailwind', 'Framer Motion'],
    content: `
Creating smooth and responsive user interfaces is our passion.

By combining Tailwind CSS with Framer Motion, we achieve fast, attractive animations without sacrificing performance.

### Key Highlights

- Utility-first styling with Tailwind
- Easy-to-use animation hooks in Framer Motion
- Mobile-first and accessible design

Try it out in your next project!
    `,
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    id: 4,
    title: 'SEO Strategies That Work in 2025',
    summary: 'A breakdown of the latest SEO practices that drive growth and organic traffic.',
    category: 'SEO',
    date: 'May 15, 2025',
    slug: 'seo-strategies-2025',
    image: '/images/blog-2.jpg',
    featured: false,
    author: 'Amina Noor',
    readTime: '7 min read',
    tags: ['SEO', 'Strategy', 'Content Marketing'],
    content: `
SEO is always evolving. Staying ahead means understanding both technical and content strategies.

## Our Approach

- Focus on user intent and quality content
- Optimize site speed and Core Web Vitals
- Build backlinks ethically and strategically

Implement these tactics to improve your organic traffic.
    `,
  },
  {
    id: 5,
    title: 'How We Optimize Performance in Next.js',
    summary: 'Learn how we push for top Core Web Vitals scores on every MuhidTech project.',
    category: 'Web Dev',
    date: 'May 10, 2025',
    slug: 'nextjs-performance',
    image: '/images/blog-3.jpg',
    featured: true,
    author: 'Ali Yusuf',
    readTime: '5 min read',
    tags: ['Next.js', 'Performance', 'Optimization'],
    content: `
Performance is critical. Next.js offers many built-in features to help us optimize.

### Techniques We Use

- Static generation (SSG) and incremental static regeneration (ISR)
- Image optimization with next/image
- Code splitting and lazy loading components

Our clients enjoy blazing fast websites as a result.
    `,
    videoUrl: 'https://www.youtube.com/embed/0yW7w8F2TVA',
  },
  {
    id: 6,
    title: 'AI Tools Transforming Web Development',
    summary: 'A look at AI-powered tools that are revolutionizing how we build websites.',
    category: 'AI',
    date: 'May 8, 2025',
    slug: 'ai-tools-web-dev',
    image: '/images/blog-6.jpg',
    featured: false,
    author: 'MuhidTech AI Team',
    readTime: '6 min read',
    tags: ['AI', 'Automation', 'Web Dev'],
    content: `
Artificial Intelligence is rapidly transforming the web development landscape.

From automated code generation to smarter testing and debugging, AI tools save time and reduce errors.

## Top AI Tools We Use

- GitHub Copilot for code suggestions
- Automated accessibility testing
- AI-based image generation for design assets

Embracing AI helps us deliver faster and smarter solutions.
    `,
  },
];
