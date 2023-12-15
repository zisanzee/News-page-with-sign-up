import { BsBookmark, BsShare } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const publishedDate = news?.author?.published_date?.split(" ")[0];
  const shortDetails = news.details?.slice(0, 202);
  const review = news?.rating?.number;

  return (
    <div className="rounded-lg border my-4 overflow-hidden">
      <div className="flex justify-between items-center p-5 bg-blue-50">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src={news?.author?.img}
            alt=""
          />
          <div>
            <h1 className="font-semibold">{news?.author?.name}</h1>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-lg text-gray-500 items-center">
          <BsBookmark />
          <BsShare />
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl my-6 font-bold my-1">{news.title}</h2>
        <img className="w-full my-5" src={news.image_url} alt="" />
        <p className=" mt-3 ">
          {shortDetails}...{" "}
          <span className="text-red-600 font-bold cursor-pointer">
            <Link to={`/details/${news._id}`}>Read more</Link>
          </span>
        </p>
        <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {[...Array(Math.ceil(review))].map((e, i) => (
            <FaStar className="text-orange-600" key={i} />
          ))}
          <p>{review}</p>
        </div>

        <div className="flex items-center gap-2"><FaEye/> <p>{news.total_view} </p></div>
      </div>
      </div>

    </div>
  );
};

export default News;
