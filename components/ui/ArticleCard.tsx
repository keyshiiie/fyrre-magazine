import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/mock-data/types';

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col sm:flex-row gap-6 py-8 border-b border-black last:border-0 group first:pt-0">
      {/* Картинка */}
      <div className="relative w-full sm:w-55 h-55 shrink-0 overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill 
          className="object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      
      {/* Контент */}
      <div className="flex flex-col justify-between grow">
        <div>
          <Link href={`/posts/${post.slug}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 hover:opacity-70 transition-opacity">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        
        {/* Метаданные */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-[10px] md:text-xs text-black tracking-wider">
            {/* Text */}
            <span>
                <span className="font-extrabold">Text:</span> <span className="font-normal">{post.author.name}</span>
            </span>
            
            {/* Date */}
            <span>
                <span className="font-extrabold">Date:</span> <span className="font-normal">{post.date}</span>
            </span>
            
            {/* Read */}
            <span>
                <span className="font-extrabold">Read:</span> <span className="font-normal">{post.readTime}</span>
            </span>
            
            {/* Бейдж категории */}
            <span className="ml-auto border border-black rounded-full px-3 py-1 font-normal">
                {post.category}
            </span>
            </div>
      </div>
    </article>
  );
}