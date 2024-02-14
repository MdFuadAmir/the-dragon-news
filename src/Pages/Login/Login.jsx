import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        // login
        signIn(email,password)
        .then(result =>{
          console.log(result.user);
          // navigate after login
          navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
          console.log(error);
        })
        
    }
    return (
        <div>
            <Navber></Navber>
            <div className="hero mt-8">
  <div className="w-full md:w-2/4">
    <div className="bg-base-100 shadow-lg p-12 rounded-lg">
    <h2 className="text-3xl font-bold text-center">Login your account</h2>
    <hr className="my-6"/>
      <form onSubmit={handleLogin}>
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
            <p>New to this website Please<Link to="/register" className="text-blue-400"> Register</Link></p>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gray-700 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
           

            
        </div>
    );
};

export default Login;