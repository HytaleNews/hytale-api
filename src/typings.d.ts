import { PagingBlogPost } from './types/blogpost';
import { BlogPostSummary } from "@typesblogpost";

/**
 * Fetches all the blogposts but with less information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param amount the amount of blogposts you want to fetch (From new to old)
 */
declare function getBlogPosts(amount?: number): Promise<BlogPostSummary[]>;

/**
 * Fetches all the blogposts but with minimal information
 * @see {@link getBlogPost} to get more information about the blogpost
 * @param amount the amount of blogposts you want to fetch (From new to old)
 */
declare function getArchivedBlogPosts(year: number, month: number): Promise<BlogPostSummary[]>;

/**
 * Fetches the specific blogpost
 * @param slug The slug of the blog
 */
declare function getBlogPost(slug: string): Promise<PagingBlogPost>;