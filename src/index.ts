import { PagingBlogPost, BlogPostSummary } from "./types/blogpost";
import fetch from "node-fetch";
import { URLSearchParams } from "url";

/**
 * Fetches all the blogposts but with less information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param amount the amount of blogposts you want to fetch (From new to old)
 */
export async function getBlogPosts(limit = 0): Promise<BlogPostSummary[]> {
  const params = new URLSearchParams({ limit: limit.toString() });
  const BlogPosts: BlogPostSummary[] = await fetch(`https://hytale.com/api/blog/post/published?` + params).then((res) =>
    res.json()
  );

  return BlogPosts;
}

/**
 * Fetches all the blogposts but with minimal information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param year the year of the archive list
 * @param month the month of the archive list
 */
export async function getArchivedBlogPosts(year: number, month: number): Promise<BlogPostSummary[]> {
  const BlogPosts: BlogPostSummary[] = await fetch(
    `https://hytale.com/api/blog/post/archive/${year}/${month}`
  ).then((res) => res.json());

  return BlogPosts;
}

/**
 * Fetches the specific blogpost
 * @param slug The slug of the blog
 */
export async function getBlogPost(slug: string): Promise<PagingBlogPost> {
  const BlogPost: PagingBlogPost = await fetch(`https://hytale.com/api/blog/post/slug/${slug}`).then((res) =>
    res.json()
  );

  return BlogPost;
}
