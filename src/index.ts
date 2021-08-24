import { PagingBlogPost, BlogPostSummary } from "./types/blogpost";
import fetch from "node-fetch";
import { URLSearchParams } from "url";
require("json.date-extensions");

async function hytaleRequest(path: string, params?: NodeJS.Dict<string | readonly string[]>) {
  const urlParams = new URLSearchParams(params);
  const responseJson = await fetch(`https://hytale.com/api/${path}?` + urlParams, {
    headers: { "User-Agent": "hytale-api/1.0 (+https://github.com/HytaleNews/hytale-api)" },
  }).then((res) => res.text());
  return JSON.parseWithDate(responseJson);
}

/**
 * Fetches all the blogposts but with less information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param amount the amount of blogposts you want to fetch (From new to old)
 */
export async function getBlogPosts(limit = 0): Promise<BlogPostSummary[]> {
  const blogPosts: BlogPostSummary[] = await hytaleRequest("blog/post/published", { limit: limit.toString() });
  return blogPosts;
}

/**
 * Fetches all the blogposts but with minimal information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param year the year of the archive list
 * @param month the month of the archive list
 */
export async function getArchivedBlogPosts(year: number, month: number): Promise<BlogPostSummary[]> {
  const BlogPosts: BlogPostSummary[] = await hytaleRequest(`blog/post/archive/${year}/${month}`);
  return BlogPosts;
}

/**
 * Fetches the specific blogpost
 * @param slug The slug of the blog
 */
export async function getBlogPost(slug: string): Promise<PagingBlogPost> {
  const BlogPost: PagingBlogPost = await hytaleRequest(`blog/post/slug/${slug}`);
  return BlogPost;
}
