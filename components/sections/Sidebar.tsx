import Image from 'next/image';
import { currentMagazine, popularPosts } from '@/lib/mock-data/sidebar';
import PopularPosts from './PopularPosts';
import Newsletter from './Newsletter';
import { ArrowDownRight } from 'lucide-react'; 

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-87.5 shrink-0">
      
      <div className="mb-12">
        <div className="flex flex-col items-start mb-6 md:mb-8 gap-2">
          <h3 className="text-[14px] md:text-[16px] font-bold uppercase tracking-widest">Printmagazine</h3>
          <span className="text-4xl md:text-5xl font-bold">{currentMagazine.issueNumber}</span>
        </div>
        
        <div className="relative w-full aspect-3/4 mb-4 group cursor-pointer overflow-hidden">
          <Image 
            src={currentMagazine.coverImage} 
            alt={currentMagazine.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 z-10 p-4 md:p-6 flex flex-col justify-between text-white">
            <div className="flex flex-col">
              {/* Размер шрифта 70px на мобильных будет огромным, уменьшаем до 40-50px */}
              <span className="text-5xl md:text-[70px] leading-[0.85] font-black uppercase tracking-widest">
                {currentMagazine.title}
              </span>
              <span className="text-xl md:text-2xl leading-none font-bold drop-shadow-md uppercase tracking-widest mt-2">
                {currentMagazine.type}
              </span>
            </div>

            <div className="flex justify-between items-end w-full">
              {currentMagazine.author && (
                <div className="flex flex-col gap-2 items-center">
                  <div className="relative w-16 h-16 md:w-28 md:h-28">
                    <Image src={currentMagazine.author.avatar} alt={currentMagazine.author.name} fill className="object-cover" />
                  </div>
                  <span className="text-base md:text-xl font-bold drop-shadow-md">{currentMagazine.issueNumber}</span>
                </div>
              )}
              <ArrowDownRight size={40} strokeWidth={1} className="text-white drop-shadow-md md:size-[60px] -mb-2" />
            </div>
          </div>
        </div>
        
        <button className="bg-black text-white text-xs font-bold uppercase tracking-wider py-3 px-8 hover:bg-gray-800 transition-colors">
          Buy
        </button>
      </div>

      <PopularPosts posts={popularPosts} />
      <Newsletter />
    </aside>
  );
}