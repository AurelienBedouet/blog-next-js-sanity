import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="h-20 w-full bg-white/80 shadow-sm z-30 fixed top-0 left-0 backdrop-blur-md flex items-center">
      <div className="layout flex items-center justify-between">
        <Link href="/">
          <p className="text-2xl lg:text-3xl font-black">Napcat</p>
        </Link>
        <ul className="flex gap-3">
          <li>
            <a href="https://twitter.com/napcat_io" target="_blank">
              <BsTwitter size={28} />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/y8ZgpeWjUS" target="_blank">
              <FaDiscord size={28} />
            </a>
          </li>
          <li>
            <a href="https://napcat.medium.com/" target="_blank">
              <AiOutlineMedium size={28} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
