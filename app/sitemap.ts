import { MetadataRoute } from "next";
import { reader } from "./reader";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await reader.collections.posts.all();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    ...posts.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}`,
      //   lastModified: new Date(post.updatedAt)
    })),
  ];
}
