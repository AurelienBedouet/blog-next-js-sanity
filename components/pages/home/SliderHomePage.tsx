"use client";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import ClientSideRoute from "../../shared/ClientSideRoute";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";

const indicators = () => <div className="indicator"></div>;

const SliderHomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="slide-container layout my-16">
      <Slide indicators={indicators} canSwipe={true} arrows={false}>
        {posts.map(({ _id, publishedAt, title, slug, mainImage }) => (
          <div key={_id} className="relative">
            <ClientSideRoute route={`/post/${slug.current}`} key={_id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Image */}
                <div className="w-full lg:col-span-6 xl:col-span-5">
                  <Image
                    src={urlFor(mainImage).url()}
                    alt={title}
                    width={720}
                    height={405}
                    className="w-full object-cover rounded-lg aspect-video lg:min-h-[260px]"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:col-span-6 xl:col-span-7 flex flex-col gap-8">
                  <h2>{title}</h2>
                  <span className="text-gray-700 font-medium">
                    {new Date(publishedAt)
                      .toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\. /g, "-")
                      .replace(".", "")}
                  </span>
                </div>
              </div>
            </ClientSideRoute>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderHomePage;
