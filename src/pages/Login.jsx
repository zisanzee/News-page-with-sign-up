import { Link, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const {signInUser} = useContext(AuthContext)
  const handleLogin = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value
    signInUser(email, pass)
    .then(result => {
      navigate('/')
    }).catch(e => console.log(e.code))
  }
  return (
    <div className="">
      <Navbar />
      <div className="card rounded-none mx-auto max-w-md shadow-2xl bg-base-100">
        <h1 className="p-4 text-center border-b-2 w-fit mx-24 my-6  text-2xl font-semibold">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-800 text-white">Login</button>
          </div>
          <h1 className="text-center my-2 text-gray-500">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="text-red-600  font-semibold">Register</span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
