import { FaGithub } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-indigo-600 underline underline-offset-4 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  return (
    <div className=" sticky top-0 z-50  flex items-center justify-between bg-white navbar shadow-sm p-2">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <ul className="md:flex hidden gap-6 font-bold">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/apps" className={navLinkStyles}>
            Apps
          </NavLink>
        </li>

        <li>
          <NavLink to="/installation" className={navLinkStyles}>
            Installation
          </NavLink>
        </li>
      </ul>
      <a href="https://github.com/munzurul-dev" target="_blank">
        <button className="md:flex hidden items-center gap-2 btn border-0 bg-linear-to-r from-indigo-500 to-violet-600 text-white">
          <FaGithub className="h-5 w-5" />
          <span className="font-bold">Contribute</span>
        </button>{" "}
      </a>
      <span className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="md:hidden bg-blue-100 rounded-2xl w-10 h-10 p-2 cursor-pointer"></IoClose>
        ) : (
          <IoMenu className="md:hidden bg-blue-100 rounded-2xl w-10 h-10 p-1 cursor-pointer"></IoMenu>
        )}
      </span>

      <div
        className={`md:hidden absolute top-5 -right-42  bg-blue-100 rounded-2xl p-4   ${open && "right-2 top-18"} duration-1000 overflow-hidden ${!open && "hidden"}`}
      >
        <ul className="font-bold space-y-2">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/apps" className={navLinkStyles}>
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink to="/installation" className={navLinkStyles}>
              Installation
            </NavLink>
          </li>
        </ul>

        <a href="https://github.com/munzurul-dev" target="_blank">
          <button className=" mt-2 btn border-0 bg-linear-to-r from-indigo-500 to-violet-600 text-white">
            <FaGithub className="h-5 w-5" />
            <span className="font-bold">Contribute</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
