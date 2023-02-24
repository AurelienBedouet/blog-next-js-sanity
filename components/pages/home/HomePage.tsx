import Banner from "../../global/Banner";
import BlogList from "./BlogList";
import SliderHomePage from "./SliderHomePage";

const HomePage = ({ posts }: { posts: Post[] }) => {
  const lastSixPosts = posts.slice(0, 6);
  return (
    <div>
      <Banner isHome={true} />

      <SliderHomePage posts={lastSixPosts} />

      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
