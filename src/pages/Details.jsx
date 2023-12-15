import { Link, useParams } from "react-router-dom";
import Header from "./shared/Header";
import RightSideNav from "./shared/RightSideNav";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";


const Details = () => {
  const {id} = useParams()
  const  [allNews, setAllNews] = useState([])
  // const  [display, setDisplay] = useState([])

  useEffect(()=>{
    fetch('/news.json')
    .then(res => res.json())
    .then(data => setAllNews(data))
  },[])
  const detailNews = allNews.find(item => item._id == id)

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header/>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="col-span-3 ">
            <h1 className="text-xl font-semibold">Dragon News</h1>
            <div className="p-8 border rounded-lg space-y-6">
              <img className="w-full" src={detailNews?.image_url} alt="" />
              <h1 className="text-2xl font-bold w-3/4">{detailNews?.title}</h1>
              <p className="text-gray-500">{detailNews?.details}</p>
              <Link to={`/category/${detailNews?.category_id}`} className="flex items-center gap-2 bg-red-600 text-white w-fit px-6 py-2"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
            </div>
        </div>
        <RightSideNav/>
      </div>
    </div>
  );
};

export default Details;