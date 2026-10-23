import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/lib/mock-data/types';

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <Link 
      href={`/authors/${author.slug}`} 
      className="group flex items-center gap-4 md:gap-6 p-4 md:p-8 border border-black -mt-px -ml-px hover:bg-gray-50 transition-colors"
    >
      <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image 
          src={author.avatar} 
          alt={author.name} 
          fill 
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="text-lg md:text-2xl font-bold leading-tight group-hover:opacity-70 transition-opacity">
          {author.name}
        </h3>
        
        <div className="flex flex-wrap items-center gap-x-3 md:gap-4 gap-y-1 text-[10px] md:text-xs text-gray-900 tracking-wider">
          <span><span className="font-extrabold">Job:</span> <span className="font-normal">{author.role}</span></span>
          <span><span className="font-extrabold">City:</span> <span className="font-normal">{author.city}</span></span>
        </div>
      </div>
    </Link>
  );
}