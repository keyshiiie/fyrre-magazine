import { mockPosts } from '@/lib/mock-data/posts';
import ArticleCard from '@/components/ui/ArticleCard';
import Sidebar from './Sidebar';

export default function RecentPosts() {
  // Берем первые 6 постов
  const recentPosts = mockPosts.slice(0, 6);

  return (
    <section className="w-full">
      <div className="max-w-380 mx-auto md:flex lg:flex-row justify-between">
        
        {/* Левая колонка: Список статей (2/3) */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="flex flex-col w-full">
            {recentPosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Ссылка на все статьи */}
          <div className="mt-10">
            <a href="/posts" className="text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              All Articles <span>→</span>
            </a>
          </div>
        </div>

        {/* Правая колонка: Сайдбар (1/3) */}
        <Sidebar />
        
      </div>
    </section>
  );
}