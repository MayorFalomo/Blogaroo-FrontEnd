import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../helper/Context";
import { LoginStyled } from "./Login.styles";
import {BiHide} from 'react-icons/bi'
import { IoEyeOutline } from "react-icons/io5";
type Props = {};

const Login = (props: any) => {
  const userRef = useRef<any>();
  const passwordRef = useRef<any>();
  const { dispatch, isFetching } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState<boolean>(false)
  const [hidePassword, setHidePassword] = useState<boolean>(false)


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("https://blogaroo-backend.vercel.app/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      localStorage.setItem("BlogarooUser", JSON.stringify(res.data));
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 6000)
    }
  };

  return (
    <LoginStyled>
      <div  style={{ backgroundImage:`url(./watch.jpg)`}} className="loginContainer">
        <div className="subContainer">
          <div className="shadowCon">
            <div className="loginTitle">Login </div>
            <form onSubmit={handleSubmit}>
              <label>Username </label>
              <div className="userInput" >
              <input
                type="text"
                ref={userRef}
                className="loginInput"
                placeholder="Enter Your Username..."
                required
                />
                </div>
              <label>Password </label>
              <div className="hidePassword" >
                {hidePassword ? <input
                  type="password"
                  ref={passwordRef}
                  className="loginInput"
                  placeholder="Enter Your Password..."
                  required
                /> :<input
                  type="text"
                  ref={passwordRef}
                  className="loginInput"
                  placeholder="Enter Your Password..."
                  required
                />}
                {hidePassword ?<p className="hideIcon" onClick={() => setHidePassword(false)} >{<IoEyeOutline fontSize='22' cursor='pointer' />}</p> : <p className="hideIcon" onClick={() => setHidePassword(true)} >{<BiHide fontSize='20' />} </p>}
                </div>
              <button className="loginBtn" disabled={isFetching}>
                Login{" "}
              </button>
              <p className="errorTxt" >{errorMessage ? "Check username and password again!" : ""} </p>
              <p className="signUp" >Don't have an account?  <Link to='/register' style={{color: "blue"}} > Sign up</Link> </p>
              {/* <Link to="/register">
                <button className="loginRegisterBtn">Register </button>{" "}
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
