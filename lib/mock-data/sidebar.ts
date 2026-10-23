import { MagazineIssue } from './types';
import { mockPosts } from './posts';

export const currentMagazine: MagazineIssue = {
  id: 'mag-1',
  title: 'FYRRE',
  type: 'Magazin',
  issueNumber: '03/2022', // Я переименовал date в issueNumber, но можешь оставить date
  coverImage: '/images/magazine-cover.jpg',
  description: 'The Spring issue is dedicated to the theme of resilience and new beginnings in the art world.',
  author: {
    name: 'Jane Cooper', // Имя автора
    avatar: '/images/magazine-author.png' // Путь к картинке
  }
};

export const popularPosts = mockPosts.slice(0, 3);