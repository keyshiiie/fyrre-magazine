import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full pt-12 pb-13">
      <div className="max-w-380 mx-auto">
        
        {/* 1. Огромный заголовок */}
        <h1 className="w-full text-[18vw] lg:text-[220px] font-extrabold leading-[0.8] tracking-tighter uppercase text-black mb-6 text-center">
          Art & Life
        </h1>

        {/* 2. Бегущая строка (News Ticker) */}
        {/* Для работы анимации нужно будет добавить keyframes в tailwind.config.ts */}
        <div className="w-full bg-black text-white overflow-hidden px-5 py-2 mb-18 flex whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-6 text-[10px] md:text-xs tracking-wider font-light">
            <span className="font-semibold uppercase">News Ticker +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          </div>
        </div>

        {/* 3. Основная сетка (Заголовок слева, текст справа) */}
        <div className="flex justify-between gap-12 lg: mb-12 items-start">
          
          {/* Левый блок (Заголовок) */}
          <div className="">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-[1.1] uppercase tracking-tight text-black">
              Don't close <br /> your eyes
            </h2>
          </div>

          {/* Правый блок (Описание и метаданные) */}
          <div className="flex flex-col pb-2 pt-2">
            <p className="text-black text-sm md:text-base leading-relaxed mb-8 max-w-180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm text-black font-medium">
              <span>Text: Jakob Gronberg</span>
              <span>Date: 16 March 2022</span>
              <span>Duration: 1 Min</span>
              
              {/* Бейдж справа */}
              <span className="ml-auto border border-gray-400 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider">
                Label
              </span>
            </div>
          </div>
        </div>

        {/* 4. Большая картинка */}
        <div className="relative w-full aspect-video md:aspect-video lg:aspect-[2.4/1] overflow-hidden">
          <Image 
            src="/images/hero-image.jpg"
            alt="Don't close your eyes artwork"
            fill
            priority // Важно для LCP (Largest Contentful Paint)
            className="object-cover object-top hover:grayscale-0 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}