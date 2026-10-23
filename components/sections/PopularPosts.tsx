import Link from 'next/link';
import { Post } from '@/lib/mock-data/types';

export default function PopularPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-[16px] font-bold uppercase tracking-widest mb-3">Most Popular</h3>
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <div key={post.id} className="flex gap-4 py-4 border-b border-black last:border-0 group">
            {/* Номер */}
            <span className="text-2xl font-bold text-black w-6">
              0{index + 1}
            </span>
            {/* Текст */}
            <div>
              <Link href={`/posts/${post.slug}`}>
                <h4 className="font-bold text-lg leading-tight mb-2 hover:opacity-70 transition-opacity">
                  {post.title}
                </h4>
              </Link>
              <p className="text-xs text-black">Text: {post.author.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}