import Link from "next/link";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          target="_blank"
          className="text-yellow-500 flex items-center"
        >
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
