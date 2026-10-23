import { Post } from './types';
import { mockAuthors } from './authors';

export const mockPosts: Post[] = [
  {
    id: 'p0',
    slug: 'dont-close-your-eyes',
    title: 'Don’t close your eyes',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    coverImage: '/images/posts/faces.jpg',
    author: mockAuthors[0], // Jakob
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'ART'
  },
  {
    id: 'p1',
    slug: 'hope-dies-last',
    title: 'Hope dies last',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    coverImage: '/images/posts/hope.jpg',
    author: mockAuthors[0], // Jakob
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'ART'
  },
  {
    id: 'p2',
    slug: 'the-best-art-museums',
    title: 'The best art museums',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Museum content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: '/images/posts/museums.jpg',
    author: mockAuthors[0],
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'SCULPTURES'
  },
  {
    id: 'p3',
    slug: 'the-devil-is-in-the-details',
    title: 'The devil is in the details',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Details content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: '/images/posts/devil.jpg',
    author: mockAuthors[0],
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'ART'
  },
  {
    id: 'p4',
    slug: 'an-indestructible-hope',
    title: 'An indestructible hope',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Hope content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: '/images/posts/indestructible.jpg',
    author: mockAuthors[0],
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'ART'
  },
  {
    id: 'p5',
    slug: 'street-art-festival',
    title: 'Street art festival',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Festival content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: '/images/posts/festival.jpg',
    author: mockAuthors[0],
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'STREET ART'
  },
  {
    id: 'p6',
    slug: 'through-the-eyes-of-street-artists',
    title: 'Through the eyes of street artists',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    content: 'Street artists content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    coverImage: '/images/posts/eyes.jpg',
    author: mockAuthors[0],
    date: '16 March 2022',
    readTime: '1 Min',
    category: 'STREET ART'
  }
];