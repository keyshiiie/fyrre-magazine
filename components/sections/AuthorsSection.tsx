import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockAuthors } from '@/lib/mock-data/authors';
import AuthorCard from '@/components/ui/AuthorCard';

export default function AuthorsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-380 mx-auto border-t pt-12 border-black mt-12">
        
        {/* Заголовок секции */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
            Authors
          </h2>
          <Link 
            href="/authors" 
            className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            All Authors <ArrowRight size={16} />
          </Link>
        </div>

        {/* Сетка карточек (2 колонки на десктопе и планшете) */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {mockAuthors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>

        {/* Ссылка для мобильных */}
        <div className="mt-8 sm:hidden">
          <Link 
            href="/authors" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            All Authors <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}