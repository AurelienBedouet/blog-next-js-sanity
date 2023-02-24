import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import ClientSideRoute from "../../shared/ClientSideRoute";

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
      {posts.map(
        ({ slug, _id, mainImage, author, title, body, publishedAt }) => (
          <ClientSideRoute route={`/post/${slug.current}`} key={_id}>
            <div className="flex flex-col gap-6 p-5 cursor-pointer rounded-lg transition ease-in duration-400 hover:bg-indigo-100">
              {/* Image */}
              <div>
                <Image
                  src={urlFor(mainImage).url()}
                  width={400}
                  height={300}
                  alt={author.name}
                  className="object-cover rounded-lg aspect-video min-h-[200px]"
                />
              </div>

              {/* Text */}
              <div>
                <h6 className="font-bold mb-2">{title}</h6>
                <p className="text-sm text-gray-500 leading-5 mb-3">
                  {`${body[0].children[0].text.slice(0, 150)}${
                    body[0].children[0].text.length > 149 ? "..." : ""
                  }`}
                </p>
                <span className="text-sm text-gray-700 font-medium">
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
        )
      )}
    </div>
  );
};

export default BlogList;
