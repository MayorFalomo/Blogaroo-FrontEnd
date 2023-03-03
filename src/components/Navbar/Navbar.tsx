import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNav } from "./Navbar.styled";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext, Context } from "../../helper/Context";
type Props = {};

const Navbar = (props: any) => {
  const { user, dispatch } = useContext(Context);

  const { setSearchPost } = useContext(AppContext);

  // console.log(posts);

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <StyledNav>
      <div className="NavContainer">
        <nav>
          <span>
            <RxHamburgerMenu />{" "}
          </span>
          <h1>Blogaroo </h1>
          <ul>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              <li>Home </li>
            </NavLink>
            <NavLink
              to="/write"
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
              })}
            >
              <li>Write </li>
            </NavLink>
            <li>All Users </li>
            <li>About </li>
            <Link to="/login">
              <li onClick={handleLogOut}>Log Out </li>
            </Link>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                onChange={(e) => setSearchPost(e.target.value)}
                type="text"
                placeholder="Search..."
              />
              <button type="submit" className="search">
                {" "}
                <CiSearch style={{ fontSize: 25 }} />
              </button>
            </div>
            <Link to="/settings">
              <div
                className="profileImg"
                style={{
                  backgroundImage: `url(${user.profilePic})`,
                  backgroundColor: "black",
                }}
              ></div>
            </Link>
          </form>
        </nav>
        <div className="bgLight">
          <img src="./bgLight.svg" alt="img" />{" "}
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
