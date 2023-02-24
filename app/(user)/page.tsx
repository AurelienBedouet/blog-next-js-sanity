import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "../../components/preview/PreviewSuspense";
import PreviewHomePage from "../../components/pages/home/PreviewHomePage";
import HomePage from "../../components/pages/home/HomePage";

const query = groq`
*[_type=="post"] {
  ...,
  author->,
  categories[]->
} | order(publishedAt desc)
`;

export const revalidate = 60;

const IndexRoute = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-purple-500">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewHomePage query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <HomePage posts={posts} />;
};

export default IndexRoute;
