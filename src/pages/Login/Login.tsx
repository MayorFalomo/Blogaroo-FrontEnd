import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../helper/Context";
import { LoginStyled } from "./Login.styles";

type Props = {};

const Login = (props: any) => {
  const userRef = useRef<any>();
  const passwordRef = useRef<any>();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("https://blogaroo-backend.vercel.app/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("BlogarooUser", JSON.stringify(res.data));
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(userRef);

  return (
    <LoginStyled>
      <div className="loginContainer">
        <div className="subContainer">
          <div className="shadowCon">
            <div className="loginTitle">Login </div>
            <form onSubmit={handleSubmit}>
              <label>Username </label>
              <input
                type="text"
                ref={userRef}
                className="loginInput"
                placeholder="Enter Your Username"
                required
              />
              <label>Password </label>
              <input
                type="text"
                ref={passwordRef}
                className="loginInput"
                placeholder="Enter Your Password"
                required
              />
              <button className="loginBtn" disabled={isFetching}>
                Login{" "}
              </button>
              <Link to="/register">
                <button className="loginRegisterBtn">Register </button>{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
