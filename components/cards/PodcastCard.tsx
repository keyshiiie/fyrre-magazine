import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight } from 'lucide-react';
import { Podcast } from '@/lib/mock-data/types';

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <Link 
      href={`/podcasts/${podcast.slug}`} 
      className="group flex flex-col p-4 md:p-6 border border-black -mt-px -ml-px hover:bg-gray-50 transition-colors w-full sm:w-1/2 lg:w-1/3"
    >
      <div className="relative w-full aspect-square mb-4 md:mb-6 overflow-hidden">
        <Image 
          src={podcast.coverImage} 
          alt={podcast.title} 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
          <div className="flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-black uppercase tracking-tight drop-shadow-md">Fyrre</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest drop-shadow-md mt-1">Podcast</span>
          </div>
          
          <div className="flex justify-between items-end">
            <span className="text-base md:text-lg font-bold drop-shadow-md uppercase">
              {podcast.episodeNumber}
            </span>
            <ArrowDownRight size={40} strokeWidth={1} className="drop-shadow-md" />
          </div>
        </div>
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-6 group-hover:opacity-70 transition-opacity">
          {podcast.title}
        </h3>
        
        <div className="mt-auto flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-medium tracking-wider">
          <span><span className="font-bold">Date</span> {podcast.date}</span>
          <span><span className="font-bold">Duration</span> {podcast.duration}</span>
        </div>
      </div>
    </Link>
  );
}