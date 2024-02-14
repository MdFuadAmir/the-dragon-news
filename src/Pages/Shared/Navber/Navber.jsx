import { Link, NavLink } from "react-router-dom";
import profile from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navber = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleSignOut = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })

  }
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <Link to='/profile'>
    <div className="w-10">
          <img className="rounded-full" alt="Profile" src={profile}/>
        </div>
    </Link>
    {
      user ? <button onClick={handleSignOut} className="btn px-8 bg-slate-800 text-white">Log out</button> : <Link to='/login'><button className="btn px-8 bg-slate-800 text-white">Log in</button></Link>
    }
  </div>
</div>
    );
};

export default Navber;