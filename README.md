# **Hytale API**

This is an TypeScript client wrapper for the Hytale API that works on the browser as well as on the NodeJS side.

> **DISCLAMER** All API endpoints disclosed here are found by my own findings and have not been made public by Hytale nor Hypixel Studios Limited. This means that those API endspoints might not be intended to be used in anyway by 3rd parties nor do I grant you permissions too. I am in no way responsible for anything that might happen to you for using this library or for anything that you might use from this library. use it at your own risk.

# Usage

```js
import { getBlogPosts, getArchivedBlogPosts, getBlogPost } from "hytale-api";

// Get all published blogpost summaries
const allBlogposts = await getBlogPosts();

// Get the 2 recent published blogpost summaries (descending order)
const twoRecentBlogPosts = await getBlogPosts(2);

// Get the blogpost about https://hytale.com/news/2018/12/simon-and-rezzus
const blogPostBySandR = await getBlogPost("simon-and-rezzus");

// Get all posts from 2020 the 3rd month
const archivedBlogposts = await getArchivedBlogPosts(2020, 3);
```
