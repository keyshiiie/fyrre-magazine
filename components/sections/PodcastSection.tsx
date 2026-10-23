import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockPodcasts } from '@/lib/mock-data/podcasts';
import PodcastCard from '@/components/ui/PodcastCard';

export default function PodcastSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-380 mx-auto border-t pt-12 border-black">
        
        {/* Заголовок секции */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
            Podcast
          </h2>
          <Link 
            href="/podcasts" 
            className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            All Episodes <ArrowRight size={16} />
          </Link>
        </div>

        {/* Сетка карточек */}
        <div className="flex flex-wrap">
          {mockPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

        {/* Ссылка для мобильных (если скрыта в шапке) */}
        <div className="mt-8 sm:hidden">
          <Link 
            href="/podcasts" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            All Episodes <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}