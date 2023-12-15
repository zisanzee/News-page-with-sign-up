import { useContext } from "react";
import Navbar from "./shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)

  const handleRegister = (e)=>{
      e.preventDefault()
      const name = e.target.name.value
      const photo = e.target.photoURL.value
      const email = e.target.email.value
      const pass = e.target.password.value
      const terms = e.target.terms.checked
      createUser(email, pass)
      .then((result)=>{
        navigate('/')
      }).catch(e => console.log(e.code))
      
  }
  return (
    <div className="">
      <Navbar />

      <div className="card rounded-none mx-auto max-w-md shadow-2xl bg-base-100">
        <h1 className="p-4 text-center border-b-2 w-fit mx-24 my-6  text-2xl font-semibold">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your Photo URl"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="flex  items-center gap-2">
            <input
              name="terms"
              type="checkbox"
              className="w-4 h-4"
              id="terms"
            />
            <label htmlFor="terms">
              {" "}
              Accept <strong>Terms & Conditions</strong>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-800 text-white">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
