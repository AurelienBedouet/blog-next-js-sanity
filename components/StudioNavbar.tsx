import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          target="_blank"
          className="text-yellow-500 flex items-center"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 text-yellow-500 mr-2" />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
