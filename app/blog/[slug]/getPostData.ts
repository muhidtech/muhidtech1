import { BlogPost } from "../data/mockPosts";


const mockPosts: BlogPost[] = [
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
  // Add more mock posts if you like
];

export async function getPostData(slug: string): Promise<BlogPost | null> {
  return mockPosts.find((post) => post.slug === slug) || null;
}
