import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Banner from "../../../../components/global/Banner";
import Article from "../../../../components/pages/post/Article";
import Aside from "../../../../components/pages/post/Aside";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]
  {
    slug
  }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map(slug => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
  *[_type=="post" && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->,
  "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..2] {
     title,
     slug,
     _id,
     mainImage
   }
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div>
      <Banner isHome={false} />

      <div className="layout py-16 flex flex-col gap-8 lg:flex-row">
        <Article post={post} />
        <Aside post={post} />
      </div>
    </div>
  );
};

export default Post;
