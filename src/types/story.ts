export interface StoryContent {
  type: string;
  text: string;
  author?: string;
}

export interface RelatedStory {
  title: string;
  slug: string;
}

export interface Story {
  title: string;
  author: string;
  date: string;
  comments: number;
  readTime?: string;
  category?: string;
  content: StoryContent[];
  relatedStories?: RelatedStory[];
}

// Mock data
export const stories: Record<string, Story> = {
  'future-of-technology': {
    title: 'The Future of Technology',
    author: 'Alex Thompson',
    date: '2025-04-14',
    comments: 156,
    content: [
      {
        type: 'paragraph',
        text: 'Artificial Intelligence is revolutionizing every aspect of our lives. From how we work to how we live, AI is making processes more efficient and creating new possibilities we never thought possible.'
      },
      {
        type: 'paragraph',
        text: 'As we move forward, the integration of AI in our daily lives will only deepen, bringing both exciting opportunities and important challenges we need to address.'
      },
      {
        type: 'quote',
        text: 'The future is already here – it\'s just not evenly distributed.',
        author: 'William Gibson'
      },
      {
        type: 'paragraph',
        text: 'The next decade will see unprecedented advances in quantum computing, biotechnology, and renewable energy. These developments will reshape industries and create new paradigms for how we live and work.'
      }
    ]
  },
  'web-development-2025': {
    title: 'Web Development Trends 2025',
    author: 'Sarah Chen',
    date: '2025-04-13',
    comments: 89,
    content: [
      {
        type: 'paragraph',
        text: 'The landscape of web development continues to evolve at a rapid pace. New frameworks and tools are emerging to address the growing complexity of modern web applications.'
      },
      {
        type: 'quote',
        text: 'Simplicity is the ultimate sophistication.',
        author: 'Leonardo da Vinci'
      },
      {
        type: 'paragraph',
        text: 'AI-driven development tools, WebAssembly, and edge computing are becoming mainstream, enabling developers to build faster and more sophisticated applications.'
      }
    ]
  },
  'nba-playoffs': {
    title: '2025 NBA Playoffs: Historic Showdowns and Game-Changing Moments',
    author: 'Michael Jordan',
    date: '2025-04-16',
    comments: 324,
    readTime: '8 min',
    category: 'Sports',
    content: [
      {
        type: 'paragraph',
        text: 'The 2025 NBA Playoffs have delivered some of the most thrilling basketball moments in recent history. With emerging stars and seasoned veterans clashing on the court, every game has been a masterclass in athletic excellence.'
      },
      {
        type: 'quote',
        text: 'This might be the most competitive playoffs series we\'ve seen in the last decade.',
        author: 'LeBron James'
      },
      {
        type: 'paragraph',
        text: 'The Eastern Conference finals have particularly stood out, featuring unprecedented scoring records and last-second victories that have kept fans on the edge of their seats.'
      },
      {
        type: 'paragraph',
        text: 'As we head into the final stages of the playoffs, the level of play continues to elevate, promising more unforgettable moments in basketball history.'
      }
    ],
    relatedStories: [
      { title: 'Rising Stars of the NBA', slug: 'rising-stars' },
      { title: 'Evolution of Basketball Strategy', slug: 'basketball-strategy' },
      { title: 'Legacy of Championships', slug: 'championship-legacy' }
    ]
  }
};
