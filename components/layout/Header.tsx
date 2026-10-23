import Link from 'next/link';
import { InstagramIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/SocialIcons';

export default function Header() {
  return (
    <header className="w-full">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8 mt-8 md:mt-16">
        <div className="h-12 flex items-center justify-between border-b border-black pb-2">
          
          <Link href="/" className="text-lg md:text-2xl font-black tracking-tight uppercase hover:opacity-80 transition-opacity">
            Fyrre Magazine
          </Link>

          <div className="flex items-center md:items-end gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-6 text-sm font-normal text-black">
              <Link href="/magazine" className="hover:text-black transition-colors">Magazine</Link>
              <Link href="/authors" className="hover:text-black transition-colors">Authors</Link>
              <Link href="/podcast" className="hover:text-black transition-colors">Podcast</Link>
            </nav>

            <span className="hidden md:block text-black">—</span>

            <div className="flex items-center gap-3 md:gap-4 text-black">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity"><InstagramIcon size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity"><TwitterIcon size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity"><YoutubeIcon size={18} /></a>
              <a href="/rss" className="hover:opacity-60 transition-opacity"><SpotifyIcon size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}