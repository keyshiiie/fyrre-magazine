export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string; // Из макета: Artist, Photograph, Columnist
  city: string; // Из макета: Berlin, Stockholm и т.д.
  avatar: string; // Путь к картинке
  bio?: string; // Добавил для детальной страницы автора
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Полный текст для детальной страницы
  coverImage: string;
  author: Author;
  date: string;
  readTime: string;
  category: string; // Из макета: ART, SCULPTURES, STREET ART
}

export interface Podcast {
  id: string;
  slug: string;
  title: string;
  episodeNumber: string;
  duration: string;
  date: string;
  coverImage: string;
  description: string; // Для детальной страницы
}

export interface MagazineIssue {
  id: string;
  title: string;
  type: string;
  issueNumber: string;
  coverImage: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
}