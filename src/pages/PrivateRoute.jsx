import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)

  if(loading){
    return <div className=" flex items-center justify-center"><span className="loading mt-28 w-36 loading-spinner text-gray-500"></span></div>
  }

  if (user){
    return children
  }
  return (
    <Navigate to={'/login'}></Navigate>
  );
};

export default PrivateRoute;