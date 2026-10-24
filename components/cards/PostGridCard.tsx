import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/mock-data/types';

export default function PostGridCard({ post }: { post: Post }) {
  return (
    <Link 
      href={`/posts/${post.slug}`} 
      className="group flex flex-col p-6 border border-black -mt-px -ml-px hover:bg-gray-50 transition-colors"
    >
      <div className="flex justify-between items-center mb-6 text-[10px] md:text-xs font-medium tracking-wider">
        <span className="text-gray-500">{post.date}</span>
        <span className="border border-black rounded-full px-3 py-1 uppercase">
          {post.category}
        </span>
      </div>

      <div className="relative w-full aspect-4/3 mb-6 overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill 
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:opacity-70 transition-opacity">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center gap-4 text-[10px] md:text-xs text-black tracking-wider">
          <span>
            <span className="font-extrabold">Text:</span> <span className="font-normal">{post.author.name}</span>
          </span>
          <span>
            <span className="font-extrabold">Duration:</span> <span className="font-normal">{post.readTime}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}