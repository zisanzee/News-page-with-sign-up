import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import News from "./News";


const NewsCategoryBased = () => {
  const {id} = useParams()
  const  [allNews, setAllNews] = useState([])
  // const  [display, setDisplay] = useState([])

  useEffect(()=>{
    fetch('/news.json')
    .then(res => res.json())
    .then(data => setAllNews(data))
  },[])

  return (
    <div className="lg:col-span-2">
      {
        id == 0 ?allNews.map((item, i) => <News news={item} key={i}/>) : allNews.filter((item) => item.category_id == id).map((item, i) => <News news={item} key={i}/>) 
      }
      
    </div>
  );
};

export default NewsCategoryBased;