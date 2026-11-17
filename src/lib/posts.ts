import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Superseded editions are still published, but kept out of the main lists
export const isOutdated = (post: Post) => post.data.tags.includes('rc17');

export function readingTime(post: Post): string {
  // TL;DR blocks repeat the full text, so they add no reading time
  const text = (post.body ?? '').replace(/<div class="tldr">[\s\S]*?<\/div>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
