import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockAuthors } from '@/lib/mock-data/authors';
import AuthorCard from '@/components/cards/AuthorCard';

export default function AuthorsSection() {
  return (
    <section className="w-full py-12 md:py-16">
      {/* Внешний контейнер */}
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Внутренний контейнер с границей */}
        <div className="w-full border-t border-black pt-8 md:pt-12">
          
          <div className="flex justify-between items-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight">Authors</h2>
            <Link href="/authors" className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              All Authors <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {mockAuthors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/authors" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              All Authors <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}