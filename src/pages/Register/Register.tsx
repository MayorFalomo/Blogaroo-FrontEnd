import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../helper/Context";
import { RegisterStyled } from "./Register.styled";

type Props = {};

const Register = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(false);
  const { dispatch } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("/auth/register", {
        username,
        email,
        profession,
        password,
      })
      .then(async () => {
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", {
            username,
            password,
          });
          localStorage.setItem("BlogarooUser", JSON.stringify(res.data));
          console.log(res.data);

          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          res.data && window.location.replace("/");
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegisterStyled>
      <div className="registerContainer">
        <div className="subContainer">
          <div className="registerCon">
            <h1 className="register">Register </h1>
            <form onSubmit={handleSubmit}>
              <label>Username </label>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="registerName"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email </label>
              <input
                type="email"
                placeholder="Enter Your Username"
                className="registerName"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label>Profession </label>
              <input
                type="text"
                placeholder="Optional: E.g Student"
                className="registerProfession"
                required
                onChange={(e) => setProfession(e.target.value)}
              ></input>
              <label>Password </label>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="registerPassword"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="registerBtn" type="submit">
                Register{" "}
              </button>
              <Link to="/login">
                <button className="loginBtn">Login </button>{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default Register;
