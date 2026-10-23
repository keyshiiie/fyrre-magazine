import Link from 'next/link';
import { InstagramIcon, TwitterIcon, YoutubeIcon, SpotifyIcon } from '@/components/ui/SocialIcons'; // Твои иконки

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-20">
      
      {/* 1. Бегущая строка сверху (Белым по черному) */}
      <div className="w-full overflow-hidden py-3 flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 text-[10px] md:text-xs tracking-widest font-bold uppercase">
          <span>Newsletter +++</span>
          <span>Newsletter +++</span>
          <span>Newsletter +++</span>
          <span>Newsletter +++</span>
          <span>Newsletter +++</span>
          <span>Newsletter +++</span>
        </div>
      </div>

      {/* Основной контейнер */}
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8 pt-16 md:pt-24 pb-8">
        
        {/* 2. Заголовок и Форма */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20 md:mb-32">
          
          <h2 className="text-5xl md:text-7xl lg:text-[70px] font-bold uppercase leading-[0.9] tracking-tight max-w-2xl">
            Design News to<br />your Inbox
          </h2>

          <form className="flex w-full max-w-md h-12 gap-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white text-black px-4 text-sm focus:outline-none placeholder-gray-500"
            />
            <button 
              type="button" 
              className="bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-wider px-6 border-l border-gray-300 hover:bg-gray-200 transition-colors shrink-0"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* 3. Сетка ссылок и логотип */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-20">
          
          {/* Логотип (занимает 1 колонку на десктопе или 2 на мобильном) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <Link href="/" className="text-lg md:text-xl font-black uppercase tracking-tight">
              Fyrre Magazine
            </Link>
          </div>

          {/* Колонка 1 */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link href="/art" className="hover:text-white transition-colors">Art</Link>
            <Link href="/design" className="hover:text-white transition-colors">Design</Link>
            <Link href="/architecture" className="hover:text-white transition-colors">Architecture</Link>
          </div>

          {/* Колонка 2 */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link href="/magazine" className="hover:text-white transition-colors">Magazine</Link>
            <Link href="/podcast" className="hover:text-white transition-colors">Podcast</Link>
            <Link href="/authors" className="hover:text-white transition-colors">Authors</Link>
          </div>

          {/* Колонка 3 */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <Link href="/styleguide" className="hover:text-white transition-colors">Styleguide</Link>
            <Link href="/licensing" className="hover:text-white transition-colors">Licensing</Link>
            <Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link>
          </div>
        </div>

        {/* 4. Нижняя панель (Копирайт и Соцсети) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-">
          
          <p className="text-sm text-white">
            © Made by Pawel Gola - Powered by Webflow
          </p>

          <div className="flex items-center gap-5 text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <InstagramIcon size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <TwitterIcon size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <YoutubeIcon size={16} />
            </a>
            <a href="/rss" className="hover:opacity-60 transition-opacity">
              <SpotifyIcon size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}