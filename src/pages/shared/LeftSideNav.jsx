import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])


  return (
    <div className="">
      <div className="my-8 ">
        <h1 className="mb-4 text-xl font-bold w-full ">All Category</h1>
        <div className="flex flex-col items-center">
          {
            categories.map(item =>
              
              <NavLink  to={`/category/${item.id}`} key={item.id}  className={({ isActive }) => isActive ? "pl-12 rounded-md w-full py-4 bg-slate-200 font-semibold" : "pl-12 rounded-md w-full py-4"  
            }>{item.name}</NavLink>
              
              )
          }
        </div>

      </div>

    </div>
  );
};

export default LeftSideNav;