import { Outlet } from "react-router-dom";
import Breaking from "./Breaking";
import NewsHome from "./NewsHome/NewsHome";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Breaking/>
      <Navbar />


      <div className="grid max-w-screen-2xl mx-auto grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        <Outlet/>
          <RightSideNav />
        </div>
      </div>
    
  );
};

export default Home;
