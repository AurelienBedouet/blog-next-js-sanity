import Image from "next/image";
import React from "react";
import urlFor from "../../../lib/urlFor";
import ClientSideRoute from "../../shared/ClientSideRoute";

const Aside = ({ post }: { post: Post }) => {
  return (
    // Related Posts
    <div className="w-full flex flex-col lg: gap-4">
      <h2 className="lg:text-xl xl:text-2xl">Related Posts</h2>
      {post.related?.map(({ _id, title, slug, mainImage }) => (
        <ClientSideRoute route={`/post/${slug.current}`} key={_id}>
          <div className="flex flex-col gap-8 lg:gap-4 p-5 cursor-pointer rounded-lg transition ease-in duration-400 hover:bg-indigo-100">
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              width={720}
              height={405}
              className="rounded-lg aspect-video max-h-[360px]"
            />
            <h5 className="lg:text-base xl:text-lg">{title}</h5>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
};

export default Aside;
