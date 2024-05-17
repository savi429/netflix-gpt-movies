import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../assets/Netflix_Logo_PMS.png";
import { removeUser } from "../redux/userSlice";
import { SUPPORTED_LANGUAGES, USER_LOGO } from "./../utils/constants";
import { changeLanguage } from "../redux/configSlice";
import { RootState } from "../redux/store";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langKey = useSelector((store: RootState) => store.reducer.config.lang);
  const [isOpen, setIsOpen] = useState(false);
  const handleUserDropDown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsOpen(false);
      }
    };
    const hadleClickOutSide = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", hadleClickOutSide);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", hadleClickOutSide);
    };
  }, []);
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="z-10 p-6 bg-gradient-to-b from-black absolute text-white overflow-hidden w-full">
      <nav className="flex justify-between ">
        <ul className="flex gap-4 items-center">
          <li>
            <img src={logo} width="150" height="150" alt="logo" className="" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/newpopular">New & Popular</Link>
          </li>
        </ul>
        <ul className="flex gap-5 items-center">
          <li
          // onMouseEnter={handleMouseLeave}
          >
            <Link to="/search" className="flex">
              <IoSearch size="1.5rem" />
              &nbsp; Search
            </Link>
          </li>
          <li>
            <div className="relative ">
              <select
                onChange={handleLanguageChange}
                className="p-2 bg-gray m-2 bg-gray-500 text-white"
              >
                {SUPPORTED_LANGUAGES.map((lang, index) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    selected={lang.identifier === langKey ? true : false}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li>
            <div className="relative">
              <div className=" flex items-center" onClick={handleUserDropDown}>
                <img
                  src={USER_LOGO}
                  alt="user"
                  width="40"
                  height="40"
                  className="rounded-md"
                />
                <span>
                  <MdOutlineArrowDropDown
                    className={`transition transform ease-in-out duration-300 ${
                      isOpen ? "rotate-180" : ""
                    } w-6 h-6 `}
                  />
                </span>{" "}
              </div>
              {isOpen && (
                <div className="fixed right-5 mt-2 z-50 flex items-center justify-center">
                  <div
                    ref={dropdownRef}
                    className="bg-black text-white px-5 te border border-gray-300 rounded shadow-md"
                  >
                    <ul className="text-md font-medium leading-8 mt-4">
                      <li className="hover:text-green-500">settings</li>
                      <li className="hover:text-bold">Profile</li>

                      <li
                        onClick={logout}
                        className="border-t-4 hover:text-bold"
                      >
                        Sign out of Netflix
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
