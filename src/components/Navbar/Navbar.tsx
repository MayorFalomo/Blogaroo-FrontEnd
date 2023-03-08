import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNav } from "./Navbar.styled";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext, Context } from "../../helper/Context";
import { FaTimes } from "react-icons/fa";
type Props = {};

const Navbar = (props: any) => {
  const { user, dispatch } = useContext(Context);

  const { setSearchPost } = useContext(AppContext);
  const [hamburger, setHamburger] = useState(false)

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setHamburger(!false);
    
  }
  const handleRemove = () => {
    setHamburger(false);
  }

  return (
    <StyledNav>
      <div className="NavContainer">
        <nav>
          <div className="navHeader" > 
            <div className="logo" >B</div>
            <h1>Blogaroo </h1>
            </div>
          <div className={ hamburger ? "hamburgerMode" : "subNavContainer" } >
          <ul className={hamburger ? "burger" : ""} >
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
            <NavLink to={`/allusers`} ><li>All Users </li></NavLink>
            <NavLink to={`/get-post/${user.username}`}
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
              })}><li>About </li></NavLink>
            <Link to="/login">
              <li onClick={handleLogOut}>Log Out </li>
            </Link>
          </ul>
          <form onSubmit={handleSubmit} className={hamburger ? "hamburger-form" : ""} >
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
          </div>
          <div>
          {
            hamburger ?
           <span onClick={handleRemove} >
            <FaTimes />{" "}
            </span>
            :
             <span onClick={handleClick} >
            <RxHamburgerMenu />{" "}
          </span>
            }
            </div>
        </nav>
        <div className="bgLight">
          <img src="../bgLight.svg" alt="img" />{" "}
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
