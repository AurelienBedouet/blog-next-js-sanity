import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div>
        <Image
          src={urlFor(value).url()}
          alt="Blog Post Image"
          width={720}
          height={405}
          className="rounded-lg aspect-video max-w-[720px] mx-auto my-8"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-5 list-decimal space-y-3">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl lg:text-6xl font-black my-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl lg:text-3xl font-semibold my-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl lg:text-3xl font-semibold my-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl lg:text-2xl font-semibold my-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-lg lg:text-xl font-semibold my-4">{children}</h5>
    ),
    normal: ({ children }: any) => (
      <p className="text-base font-normal py-1">{children}</p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-violet-300 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-violet-300 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
