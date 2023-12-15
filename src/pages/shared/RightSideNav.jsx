import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
const RightSideNav = () => {
  
  
  return (
    <div
      className="sticky-div my-8"
>
      <div>
        <h1 className="mb-4 text-xl font-bold">Login With</h1>
        <button className=" hover:bg-blue-500 py-1 rounded-md hover:text-white transition-colors flex items-center justify-center gap-2 w-full border border-black text-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button className=" hover:bg-green-700 py-1 rounded-md hover:text-white transition-colors flex items-center justify-center gap-2  w-full mt-1 border border-black text-green-700">
          <FaGithub /> Login with Github
        </button>
      </div>

      <div className="my-8">
        <h1 className="mb-4 text-xl font-bold">Find Us On</h1>
        <div className="border-2 rounded-md border-gray-200">
          <a
            className="flex items-center gap-2 p-4 border-b-2 border-gray-200"
            target="/blank"
            href="https://www.facebook.com/ZisanPlays"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            className="flex items-center gap-2 p-4 border-b-2 border-gray-200"
            href=""
          >
            <FaXTwitter /> Twitter
          </a>
          <a className="flex items-center gap-2 p-4" href="">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="my-8 bg-zinc-100 flex flex-col p-2 rounded-sm items-center">
        <h1 className="mb-4 text-xl font-bold w-full ">Q Zone</h1>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>

      <div className="text-white bg-black px-5 py-16 space-y-5 text-center">
        <h1 className="text-3xl font-bold">Create an Amazing Newspaper</h1>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn rounded-none my-5 bg-red-500 font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
