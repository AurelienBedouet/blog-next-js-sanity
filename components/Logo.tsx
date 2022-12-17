import Image from "next/image";

type Props = {};

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-4">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="/avatar1.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
