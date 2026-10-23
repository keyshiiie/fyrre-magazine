import { mockPosts } from "@/lib/mock-data/posts"; // Импортируем данные
import Hero from '@/components/sections/Hero';
import RecentPosts from '@/components/sections/RecentPosts';
import PodcastSection from '@/components/sections/PodcastSection';
import AuthorsSection from '@/components/sections/AuthorsSection';


export default function Home() {
  // Берем самый первый пост как главный (Hero)
  const heroPost = mockPosts[0]; 

  return (
    <div className="flex flex-col w-full">
      <Hero post={heroPost} />
      <RecentPosts />
      <PodcastSection />
      <AuthorsSection />
    </div>
  );
}