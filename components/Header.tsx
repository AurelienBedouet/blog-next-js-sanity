import Link from "next/link";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/avatar1.jpg"
          width={50}
          height={50}
          alt="logo"
          className="rounded-full"
        />
        <h1>The Brand.</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/" className="text-sm md:text-base">
          Blog
        </Link>
        <Link href="/" className="text-sm md:text-base">
          Products
        </Link>
        <Link href="/" className="text-sm md:text-base">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
