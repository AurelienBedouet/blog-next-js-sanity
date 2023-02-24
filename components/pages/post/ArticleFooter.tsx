import { RiArrowRightSLine } from "react-icons/ri";

const ArticleFooter = () => {
  return (
    <footer className="bg-gradient-1 p-5 rounded-lg">
      <h5>Thank you all for reading!</h5>
      <p className="italic mb-4">
        <span className="font-semibold">Napcat.io</span>🐈‍ is a trading and
        automation bot that helps users turn the noise from social media and
        news into informed buy and sell decisions.
      </p>
      <ul>
        <li>
          <a
            href="https://napcat.io/"
            className="flex items-center gap-4 transition ease-in duration-200 hover:opacity-70"
            target="_blank"
            rel="noreferrer"
          >
            <RiArrowRightSLine size={20} />
            Website
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/napcat_io"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 transition ease-in duration-200 hover:opacity-70"
          >
            <RiArrowRightSLine size={20} />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/jARRkC4Kk5"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 transition ease-in duration-200 hover:opacity-70"
          >
            <RiArrowRightSLine size={20} />
            Join us on Discord
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default ArticleFooter;
