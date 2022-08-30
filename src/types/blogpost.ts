export interface CoverImage {
  /**
   * Variants of which the image can be rezised to **/
  variants: string[];
  /**
   * The unique ID of the coverImage
   */
  _id: string;
  /**
   * The Amazon S3key of the deployment package
   */
  s3Key: string;
  /**
   * The image extension type
   * @see https://www.iana.org/assignments/media-types/media-types.xhtml#image
   */
  mimeType: string;
  /**
   * No idea. Feel free to make a pull request or send me a dm!
   */
  attached: boolean;
  /**
   * The date the image has been created
   */
  createdAt: Date;
  /**
   * The mongoose versionKey of the document
   * @see https://stackoverflow.com/a/18956020/7906244
   */
  __v: number;
  /**
   * Assuming this is a resouce ID
   * @see https://docs.aws.amazon.com/mediaconvert/latest/ug/encrypting-content.html
   */
  contentId: string;
  /**
   * The catagory the image is used at
   */
  contentType: string;
}

export type Blog = {
  /**
   * Marking the blogpost as Hot news
   * @note As of making this documentation, Hytale hasnt been activly updating this value.
   */
  featured: boolean;
  /**
   * The tags of the blogpost
   * @note As of making this documentation, Hytale hasn't used this feature once.
   */
  tags: string[];
  /**
   * The unique ID of the blogpost
   */
  _id: string;
  /**
   * The author of the blogpost
   */
  author: string;
  /**
   * The title of the blogpost
   */
  title: string;
  /**
   * The date the blog has been published to production
   */
  publishedAt: Date;

  /**
   * @returns The blogpost front image
   */
  coverImage: CoverImage;
  /**
   * The date the image has been created
   */
  createdAt: Date;
  /**
   * The slug of the blogpost, is used in the url path to locate the blogpost
   */
  slug: string;
};

/**
 * The entire blog that has the full information
 */
export interface BlogPost extends Blog {
  /**
   * The catagories the blog is been posted to
   */
  publishedTo: string[];
  /**
   * Cloudflare stream autoplay
   */
  disableCfAutoplay: boolean;
  /**
   * The entire blogpost
   * @Note May contail HTML tags
   */
  body: string;
  /**
   * The mongoose versionKey of the document
   * @see https://stackoverflow.com/a/18956020/7906244
   */
  __v: number;
}

/**
 * Fontpage blogpost that has a small teaser
 */
export interface BlogPostSummary extends Blog {
  bodyExcerpt: string;
}

/**
 * Contains a optional next and previous variable that both return {@link BlogPost} if found
 */
export interface PagingBlogPost extends BlogPost {
  previous?: BlogPost;
  next?: BlogPost;
}
