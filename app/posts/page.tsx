import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockPosts } from '@/lib/mock-data/posts';
import PostGridCard from '@/components/cards/PostGridCard';

export default function PostsPage() {
  // Для визуала продублируем посты, чтобы заполнить сетку (в реальности тут будет пагинация)
  const allPosts = [...mockPosts, ...mockPosts, ...mockPosts].slice(0, 15); 

  const categories = ['ALL', 'ART', 'STREET ART', 'SCULPTURES'];

  return (
    <div className="w-full pb-20">
      
      {/* Огромный заголовок страницы */}
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8 pt-12 md: pb-16">
        <h1 className="w-full text-[15vw] lg:text-[200px] font-black leading-[0.8] tracking-tighter uppercase text-black text-center">
          Magazine
        </h1>
      </div>

      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Панель фильтров */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button 
                key={cat}
                className={`border border-black rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider transition-colors ${
                  index === 0 ? 'bg-black text-white' : 'hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка карточек (3 колонки на десктопе) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, index) => (
            // Используем index в key, так как посты дублируются для визуала
            <PostGridCard key={`${post.id}-${index}`} post={post} />
          ))}
        </div>

        {/* Кнопка Next (Пагинация) */}
        <div className="mt-16 flex justify-end">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
            Next <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}