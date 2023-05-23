import { IBlogApi } from "./IBlogApi";
import Post from "./models/post";
import CategoryInfo from "./models/categoryInfo";
import UserBlog from "./models/userBlog";
import MediaObject from "./models/mediaObject";
/**
 * 博客基类
 */
declare class BlogApi implements IBlogApi {
    deletePost(postid: string): Promise<boolean>;
    editPost(postid: string, post: Post, publish?: boolean): Promise<boolean>;
    getCategories(): Promise<CategoryInfo[]>;
    getPost(postid: string, useSlug?: boolean): Promise<Post>;
    getPreviewUrl(postid: string): Promise<string>;
    getRecentPosts(numOfPosts: number, page?: number, keyword?: string): Promise<Array<Post>>;
    getRecentPostsCount(keyword?: string): Promise<number>;
    getUsersBlogs(): Promise<Array<UserBlog>>;
    newMediaObject(mediaObject: MediaObject): Promise<MediaObject>;
    newPost(post: Post, publish?: boolean): Promise<string>;
}
export default BlogApi;
