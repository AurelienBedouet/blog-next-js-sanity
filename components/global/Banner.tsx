import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Props = {
  isHome: boolean;
};

const Banner = ({ isHome }: Props) => {
  return (
    <div className={`${isHome ? "py-12" : "py-8"} bg-gradient-1`}>
      <div className="layout">
        {isHome ? (
          <>
            <h1 className="mb-2">
              Napcat <span className="text-gradient-1">Blog</span>
            </h1>
            <p>
              Stay up to date with the latest stories and commentary brought to
              you by Napcat, connecting social media with brokers and automate
              trades based on news.
            </p>
          </>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-4 text-2xl font-semibold"
          >
            <MdOutlineKeyboardArrowLeft size={20} /> Napcat Blog
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
