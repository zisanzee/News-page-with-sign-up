import { Link , NavLink } from "react-router-dom";
import userPlaceholder from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-600 font-semibold underline" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-600 font-semibold underline" : ""
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-600 font-semibold underline" : ""
        }
        to={"/career"}
      >
        Career
      </NavLink>
      {
        user? '': <NavLink
        className={({ isActive }) =>
          isActive ? "text-red-600 font-semibold underline" : ""
        }
        to={"/login"}
      >
        Login
      </NavLink>
      }
    </>
  );
  return (
    <div className="navbar sticky top-0 z-10 py-2 px-4 bg-gray-100 border  max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-[#706F6F] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#706F6F] gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-8 overflow-hidden mr-4 rounded-full">
          <img
            
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL? user?.photoURL : userPlaceholder}
          />
        </div>
        {
          user? <Link
          onClick={logOut}
          className=" hover:bg-red-600 rounded-none  px-10 py-1 text-white bg-red-500"
        >
          Log out
        </Link>
        :
        <Link
          to={"/login"}
          className=" hover:bg-green-600 rounded-none  px-10 py-1 text-white bg-green-500"
        >
          Log in
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
