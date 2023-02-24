import Link from "next/link";
import Newsletter from "../shared/Newsletter";

const Footer = () => {
  return (
    <footer className="pb-4 pt-8 sm:pt-14 md:pt-20">
      <div className="layout divide-y divide-gray-300">
        {/* Top Footer */}
        <div className="sm:flex flex-wrap justify-between pb-8">
          {/* Nav Footer */}
          <div className="flex-1">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-black transition ease-in duration-200 hover:opacity-70"
            >
              Napcat
            </Link>
            <nav className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-2 ">
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                How it works
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                Team
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                Feedback
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                Roadmap
              </Link>
              <Link
                href="/"
                className="font-medium transition ease-in duration-200 hover:opacity-70"
              >
                Jobs
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-[360px] flex my-12 mt-16 sm:mt-12 opacity-100 transition-all duration-700 ease-in-out">
            <Newsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-2 sm:flex-row flex-wrap sm:justify-between py-8 text-sm">
          <div className="flex gap-4">
            <Link
              href="/"
              className="transition ease-in duration-200 hover:opacity-70"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="transition ease-in duration-200 hover:opacity-70"
            >
              Terms and Conditions
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="font-semibold">Connect:</span>
            <a
              href="https://twitter.com/napcat_io"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/invite/y8ZgpeWjUS"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            <a
              href="https://www.linkedin.com/company/napcat"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://napcat.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
