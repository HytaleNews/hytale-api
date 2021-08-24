import fetch from "node-fetch";
import { getBlogPosts, getBlogPost, getArchivedBlogPosts } from "../src";

describe("Fetch blogposts", () => {
  test("Check if able to connect with the Hytale API", async (done) => {
    await fetch("https://hytale.com/")
      .then((response) => {
        expect(response.ok).toBeTruthy();
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  test("Fetching bloglist with limit of 1 blogpost", async () => {
    const blogSummary = await getBlogPosts(1);
    expect(blogSummary.length).toBeLessThanOrEqual(1);
  });

  test("Fetching a blogpost by its slug", async () => {
    const blogSummary = await getBlogPost("a-sneak-peek-at-hytale-s-user-interface");
    expect(blogSummary.slug).toEqual("a-sneak-peek-at-hytale-s-user-interface");
  });

  test("Fetching an archived blogpost", async (done) => {
    const year = 2020;
    const month = 1;
    const blogSummary = await getArchivedBlogPosts(year, month);
    expect(blogSummary[0].publishedAt.getMonth() + 1).toEqual(month);
    expect(blogSummary[0].publishedAt.getFullYear()).toEqual(year);
    done();
  });
});
