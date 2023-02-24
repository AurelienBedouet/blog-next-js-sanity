import { BiPaperPlane } from "react-icons/bi";

const Newsletter = () => {
  return (
    <div className="w-full relative z-0 flex">
      <span className="absolute inset-0 blur-2xl backdrop-blur-3xl -z-10 bg-gradient-newsletter-1"></span>
      <div className="p-8 rounded-[40px] z-10 flex backdrop-blur-xl flex-1 bg-gradient-newsletter-2 box-shadow-newsletter">
        <div className="w-full max-w-xl flex flex-col h-full">
          <h5 className="mb-2">Try it when available.</h5>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 rounded-2xl outline-none h-12 flex sm:px-6 bg-white"
            />
            <BiPaperPlane
              size={24}
              color={"#666"}
              className="absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
