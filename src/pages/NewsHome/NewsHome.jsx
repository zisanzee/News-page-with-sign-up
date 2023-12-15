import { useEffect, useState } from "react";

import News from "./News";
import { useParams } from "react-router-dom";

const NewsHome = () => {

  const {id} = useParams()
  
  const  [allNews, setAllNews] = useState([])
  const  [display, setDisplay] = useState([])

  useEffect(()=>{
    fetch('news.json')
    .then(res => res.json())
    .then(data => {
      setAllNews(data);
      setDisplay(data)
      
    })
  },[])



  
  return (
    <div className=" lg:col-span-2">
    { display.map((item, i) => <News news={item} key={i}/>)}
  </div>
        
  );
};

export default NewsHome;