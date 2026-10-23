import { Podcast } from './types';

export const mockPodcasts: Podcast[] = [
  {
    id: 'pod1',
    slug: 'problem-of-todays-cultural-development',
    title: "The Problem of today's cultural development",
    episodeNumber: 'EP 05',
    duration: '20 Min',
    date: '16.06.2022',
    coverImage: '/images/podcasts/ep05.jpg',
    description: 'In this episode, we sit down with leading cultural critics to discuss the shifting paradigms of modern art and its impact on society.'
  },
  {
    id: 'pod2',
    slug: 'hidden-messages-of-jack-nielson',
    title: 'The hidden messages of Jack Nielson',
    episodeNumber: 'EP 04',
    duration: '50 Min',
    date: '16.06.2022',
    coverImage: '/images/podcasts/ep04.jpg',
    description: 'We dive deep into the archives of the enigmatic artist Jack Nielson to uncover the symbolism hidden in his most famous works.'
  },
  {
    id: 'pod3',
    slug: 'behind-the-scenes-of-street-art-culture',
    title: 'Behind the scenes of the street art culture',
    episodeNumber: 'EP 03',
    duration: '45 Min',
    date: '16.06.2022',
    coverImage: '/images/podcasts/ep03.jpg',
    description: 'A raw conversation with underground street artists about the risks, rewards, and realities of creating art in public spaces.'
  }
];