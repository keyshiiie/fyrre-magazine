import Image from 'next/image';
import { currentMagazine, popularPosts } from '@/lib/mock-data/sidebar';
import PopularPosts from './PopularPosts';
import Newsletter from './Newsletter';
import { ArrowDownRight } from 'lucide-react'; 

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-87.5 shrink-0">
      
      {/* Print Magazine */}
      <div className="mb-12">
        <div className="flex flex-col items-start mb-8 gap-2">
          <h3 className="text-[16px] font-bold uppercase tracking-widest">Printmagazine</h3>
          <span className="text-5xl font-bold">{currentMagazine.issueNumber}</span>
        </div>
        
        <div className="relative w-full aspect-3/4 mb-4 group cursor-pointer overflow-hidden">
          {/* 1. Фоновая обложка журнала (z-0 по умолчанию) */}
          <Image 
            src={currentMagazine.coverImage} 
            alt={currentMagazine.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* 2. Контент ПОВЕРХ картинки */}
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between text-white">
            
            {/* Верхний блок: Дата и Название */}
            <div className="flex flex-col">
              <span className="text-[70px] leading-[1] font-black uppercase tracking-widest">
                {currentMagazine.title}
              </span>
              <span className="text-2xl leading-none font-bold drop-shadow-md uppercase tracking-widest">
                {currentMagazine.type}
              </span>
            </div>

            {/* Нижний блок: Автор (слева) и Стрелка (справа) */}
            <div className="flex justify-between items-end w-full">
              
              {/* Бейдж автора */}
              {currentMagazine.author && (
                <div className="flex flex-col gap-2 items-center">
                  <div className="relative w-28 h-28">
                    <Image 
                      src={currentMagazine.author.avatar} 
                      alt={currentMagazine.author.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold drop-shadow-md">
                    {currentMagazine.issueNumber}
                  </span>
                </div>
              )}

              {/* Стрелка справа */}
              <ArrowDownRight 
                size={60} 
                strokeWidth={1} 
                className="text-white drop-shadow-md -mb-2" 
              />
            </div>
          </div>
        </div>
        
        <button className="bg-black text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-gray-800 transition-colors">
          Buy
        </button>
      </div>

      {/* Most Popular */}
      <PopularPosts posts={popularPosts} />

      {/* Newsletter */}
      <Newsletter />
      
    </aside>
  );
}