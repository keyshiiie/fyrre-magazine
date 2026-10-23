import Link from 'next/link';
import { InstagramIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/SocialIcons';

export default function Header() {
  return (
    <header className="w-full">
      {/* Контейнер с ограничением ширины 1520px */}
      <div className="max-w-380 mt-16 mx-auto md:h-12 flex items-center justify-between border-b border-black">
        
        {/* Логотип */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-black tracking-tight uppercase hover:opacity-80 transition-opacity"
        >
          Fyrre Magazine
        </Link>

        {/* Навигация и соцсети */}
        <div className="flex items-end gap-6 md:gap-8">
          
          {/* Ссылки */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-regular text-black">
            <Link href="/magazine" className="hover:text-black transition-colors">Magazine</Link>
            <Link href="/authors" className="hover:text-black transition-colors">Authors</Link>
            <Link href="/podcast" className="hover:text-black transition-colors">Podcast</Link>
          </nav>

          {/* Декоративная черточка (как на макете) */}
          <span className="hidden md:block text-black">—</span>

          {/* Соцсети */}
          <div className="flex items-center gap-4 text-black">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <InstagramIcon size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <TwitterIcon size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
              <YoutubeIcon size={18} />
            </a>
            <a href="/rss" className="hover:opacity-60 transition-opacity">
              <SpotifyIcon size={18} />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}