import React from "react";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../../reader";
import { markdocConfig } from "../../../keystatic.config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await reader.collections.posts.read(slug);
  return {
    title: post?.title,
    description: post?.description,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imgUrl // This will overwrite the default opengraph-image.png in root
    //     }
    //   ]
    // }
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  const { node } = await post.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div>
      <h1>{post.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
