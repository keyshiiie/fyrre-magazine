import Image from 'next/image';
import { Post } from '@/lib/mock-data/types';

export default function Hero({ post }: { post: Post }) {
  return (
    <section className="w-full pt-8 md:pt-12 pb-10 md:pb-13">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8">
        
        <h1 className="w-full text-[18vw] lg:text-[220px] font-extrabold leading-[0.8] tracking-tighter uppercase text-black mb-6 text-center">
          Art & Life
        </h1>

        <div className="w-full bg-black text-white overflow-hidden px-5 py-2 mb-10 md:mb-18 flex whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-6 text-[10px] md:text-xs tracking-wider font-light">
            <span className="font-semibold uppercase">News Ticker +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8 md:mb-12 items-start">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-[1.1] uppercase tracking-tight text-black">
              {/* Используем заголовок из моковых данных */}
              {post.title}
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col pb-2 pt-2">
            <p className="text-black text-sm md:text-base leading-relaxed mb-6 md:mb-8 lg:max-w-180">
              {/* Используем краткое описание из моковых данных */}
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-8 text-[10px] md:text-sm text-black font-medium">
              {/* Подставляем имя автора, дату и время чтения */}
              <span>Text: {post.author.name}</span>
              <span>Date: {post.date}</span>
              <span>Duration: {post.readTime}</span>
              
              {/* Категория в бейдже */}
              <span className="sm:ml-auto border border-gray-400 rounded-full px-4 py-1.5 uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-video lg:aspect-[2.4/1] overflow-hidden">
          <Image 
            src={post.coverImage} // Картинка из моковых данных
            alt={post.title}
            fill
            priority
            className="object-cover object-top hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}