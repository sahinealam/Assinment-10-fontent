import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    // console.log('user try to logout');
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
      {/* <div className=''>{user && user.email}</div> */}
      <div className="">
        <h1 className="text-green-600 font-extrabold text-2xl">PawMart</h1>
      </div>
      <div className="nav flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allservices"
          className={({ isActive }) =>
            isActive ? "text-green-500 underline" : ""
          }
        >
         Pets & Supplies
        </NavLink>
        {user && (
          <>
            <NavLink
              to="/add-services"
              className={({ isActive }) =>
                isActive ? "text-green-500 underline" : ""
              }
            >
              AddServices
            </NavLink>
            <NavLink
              to="/my-services"
              className={({ isActive }) =>
                isActive ? "text-green-500 underline" : ""
              }
            >
              My-Services
            </NavLink>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? "text-green-500 underline" : ""
              }
            >
              My Orders
            </NavLink>
            <NavLink
              to="/myprofile"
              className={({ isActive }) =>
                isActive ? "text-green-500 underline" : ""
              }
            >
              My Profile
            </NavLink>
          </>
        )}
      </div>

      <div className="flex justify-center items-center gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={
                    user.photoURL ||
                    "https://img.icons8.com/?size=64&id=115318&format=png"
                  }
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold">
                  {user.displayName || user.email}
                </span>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3">
            <div className="login-btn">
              <Link to="/login" className="btn btn-primary px-10 ">
                Login
              </Link>
            </div>
            <div className="login-btn">
              <Link to="/signup" className="btn btn-primary px-10 ">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
