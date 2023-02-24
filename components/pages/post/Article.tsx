import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import urlFor from "../../../lib/urlFor";
import { RichTextComponents } from "../../shared/RichTextComponent";
import ArticleFooter from "./ArticleFooter";

const Article = ({ post }: { post: Post }) => {
  const { mainImage, author, title, tldr, publishedAt, _updatedAt, body } =
    post;
  return (
    <article className="flex flex-col gap-8">
      {/* Title / date / Author */}
      <div className="mb-8">
        <h1 className="mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {_updatedAt ? (
            <p className="text-sm text-gray-700 font-medium">
              Updated on:{" "}
              {new Date(_updatedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          ) : (
            <p className="text-sm text-gray-700 font-medium">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          <span className="max-w-max text-sm font-semibold px-3 py-2 bg-gradient-1 rounded-lg">
            From {author.name}
          </span>
        </div>
      </div>

      {/* TLDR */}
      {tldr?.[0]?.children[0]?.text && (
        <div className="italic bg-gradient-1 rounded-lg p-5">
          <h2 className="mb-4">TL;DR</h2>
          <PortableText value={tldr} components={RichTextComponents} />
        </div>
      )}

      {/* MainImage */}
      <div>
        <Image
          src={urlFor(mainImage).url()}
          alt={title}
          width={720}
          height={405}
          className="rounded-lg aspect-video max-h-[480px]"
        />
      </div>

      {/* Body */}
      <div>
        <PortableText value={body} components={RichTextComponents} />
      </div>

      <ArticleFooter />
    </article>
  );
};

export default Article;
