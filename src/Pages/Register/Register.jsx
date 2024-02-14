import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const {creatUser} = useContext(AuthContext); 
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);
        // creat user
        creatUser(email,password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.log(error);
        })
    }
    return (
        <div>
            <div>
            <Navber></Navber>
            <div className="hero mt-8">
  <div className="w-full md:w-2/4">
    <div className="bg-base-100 shadow-lg p-12 rounded-lg">
    <h2 className="text-3xl font-bold text-center">Register your account</h2>
    <hr className="my-6"/>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
          <div className="mt-3">
            <p>Already have an account Please<Link to="/login" className="text-blue-400"> Login</Link></p>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gray-700 text-white">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
           

            
        </div>
        </div>
    );
};

export default Register;