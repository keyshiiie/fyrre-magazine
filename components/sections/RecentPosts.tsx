import { mockPosts } from '@/lib/mock-data/posts';
import ArticleCard from '@/components/ui/ArticleCard';
import Sidebar from './Sidebar';

export default function RecentPosts() {
  const recentPosts = mockPosts.slice(0, 6);

  return (
    <section className="w-full">
      {/* Заменил контейнер */}
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
        
        <div className="w-full lg:w-2/3 flex flex-col lg:pr-12">
          <div className="flex flex-col w-full">
            {recentPosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-10">
            <a href="/posts" className="text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
              All Articles <span>→</span>
            </a>
          </div>
        </div>

        <Sidebar />
        
      </div>
    </section>
  );
}