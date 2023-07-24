import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "./../../../public/vite.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#397dfd] " : "hover:text-[#397dfd]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#397dfd]" : "hover:text-[#397dfd]"
          }
          to="/collage"
        >
          Collage
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#397dfd]" : "hover:text-[#397dfd]"
          }
          to="/admition"
        >
          Admition
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#397dfd]" : "hover:text-[#397dfd]"
          }
          to="/my-Collage"
        >
          My Collage
        </NavLink>
      </li>
      {/* {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#E0B573]" : "hover:text-[#E0B573]"
                }
                to="/dashboard/welcome"
              >
                Dashboard
              </NavLink>
            </li>
          )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="pl-8">
          <img width={52} src={logo} alt="" />
        </a>
        <ul className="flex pl-10 gap-x-10">{navOption}</ul>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn bg-[#397dfd] text-[#110C04] hover:text-white hover:bg-[#397dfd]"
            to="login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
