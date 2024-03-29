import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../assets/Netflix_Logo_PMS.png";
import { removeUser } from "../redux/userSlice";
import { SUPPORTED_LANGUAGES, USER_LOGO } from "./../utils/constants";
import { changeLanguage } from "../redux/configSlice";
import { RootState } from "../redux/store";
const Navbar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.reducer.config.lang);
  const [isOpen, setIsOpen] = useState(false);
  const handleUserDropDown = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
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
    <div className="z-10 p-6 bg-gradient-to-b from-black absolute text-white w-screen">
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
          <li>
            <Link to="/mylist">My List</Link>
          </li>
          <li>
            <Link to="/byLanguage">Browse by Languages</Link>
          </li>
        </ul>
        <ul className="flex gap-5 items-center">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <div className="relative mr-10">
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
              {/* <div className="notifications absolute right-0 bg-black opacity-85 text-white cursor-pointer">
                <ul>
                  <li>Notification 1</li>
                  <li>Notification 2</li>
                </ul>
              </div> */}
            </div>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div onClick={handleUserDropDown} className="flex relative mr-5">
              <img src={USER_LOGO} alt="user" width="20" height="20" />
              <span>+</span>

              {isOpen && (
                <div
                  className=" bg-black bg-opacity-80 text-white px-5 absolute right-0 border border-white"
                  id="userMenu"
                >
                  <ul className="text-md font-medium leading-6">
                    <li>settings</li>
                    <li>Profile</li>
                    <hr />
                    <li onClick={logout}>logout</li>
                  </ul>
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
