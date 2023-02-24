"use client";

import { usePreview } from "../../../lib/sanity.preview";
import HomePage from "./HomePage";

type Props = {
  query: string;
};

const PreviewHomePage = ({ query }: Props) => {
  const posts = usePreview(null, query);
  return <HomePage posts={posts} />;
};

export default PreviewHomePage;
