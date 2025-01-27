import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Button } from "@mui/material";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="btn btn-ghost" to="/">Home</Link>
      </li>
      <li>
        <Link className="btn btn-ghost"  to="addBlog"> Add Blog</Link>
      </li>
      <li>
        <Link className="btn btn-ghost"  to="/allblogs">All Blogs</Link>
      </li>
      <li>
        <Link className="btn btn-ghost"  to="/featured">Featured</Link>
      </li>
      <li>
        <Link className="btn btn-ghost"  to="/wishlist">Wishlist</Link>
      </li>
    </>
  );

  const { logout, user } = useAuth();
 
  return (
    <div className="rounded-sm border-y-2 my-2 p-4  ">
      <div className="navbar container   mx-auto ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex  justify-center">
               
              </div>
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="lg:btn lg:btn-ghost  lg:font-bold lg:w-[100%] text-sm flex   w-[50%] lg:text-xl"
          >
        <div  >  <p className="text-cyan-700 shadow-xl p-2 flex  rounded-b-lg" > 
           AshBorn Blog's</p></div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">{links}</ul>
        </div>

        {/* avatar part  */}
        <div className="navbar-end">
          <div className="lg:block hidden"></div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src={user?.photoURL || "/images/client3.png"}
                    alt={user.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                  
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="lg:gap-2 flex ">
              <Link to="/login">
                <button  className=" btn btn-sm ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
