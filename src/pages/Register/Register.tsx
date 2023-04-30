import axios from "axios";
import React, { useState, useContext } from "react";
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { Link, } from "react-router-dom";
import { Context } from "../../helper/Context";
import { RegisterStyled } from "./Register.styled";

type Props = {};

const Register = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [hidePassword, setHidePassword] = useState<boolean>(false)

  const { dispatch } = useContext(Context);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("https://blogaroo-backend.vercel.app/api/auth/register", {
        username,
        email,
        profession,
        password,
      })
      .then(async () => {
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("https://blogaroo-backend.vercel.app/api/auth/login", {
            username,
            password,
          });
          localStorage.setItem("BlogarooUser", JSON.stringify(res.data));
          // console.log(res.data);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          res.data && window.location.replace("/");
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
         
        }
      })
      .catch((err) => console.log(err));
     setErrorMessage(true)
          setTimeout(() => {
            setErrorMessage(false)
          }, 6000)
  };

  const getRandomEmail = () => {
    if (username.length > 0) {
      setEmail(username + "@fake.com")
    } else {
      axios.get("https://random-word-api.herokuapp.com/word")
        .then((res) => setEmail(res.data[0] + "@fake.com"))
        .catch((err) => console.log(err))
    }
  }

  const getRandomName = () => {
    if (email.includes("@fake.com")) {
      setUsername(email.split("@")[0])
    } else {
      axios.get("https://random-word-api.herokuapp.com/word")
        .then((res) => setUsername(res.data[0]))
        .catch((err) => console.log(err))
    }
  }

  const getRandomPassword = () => {
    let passNum = ""
    let passChar = ""

    for (let i = 0; i < 10; i++) {
      passNum += Math.floor(Math.random() * 10)
    }
    for (let i = 0; i < 10; i++) {
      passChar += String.fromCharCode(Math.floor(Math.random() * 28) + 98)
    }

    let result = Array.from(passNum.length > passChar.length ? passNum : passChar,
      (_, i) => (passNum[i] || "") + (passChar[i] || "")).join("")
    return result;
  }
  return (
    <RegisterStyled>
      <div className="registerContainer">
        <div className="subContainer">
          <div className="registerCon">
            <h3 className="register">Register </h3>
            <form onSubmit={handleSubmit}>
              <label>Username </label>
               <div className="labelCon" >
              <input
                type="text"
                placeholder="Enter Your Username"
                className="registerName"
                  required
                  value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div onClick={getRandomName} className='generateBtn' >generate username </div>
              </div>
              <label>Email </label>
                <div className="labelCon" >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="registerName"
                  required
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
                <div onClick={getRandomEmail} className='generateBtn'>generate email </div>
                </div>
                <label>Profession </label>
              <input
                type="text"
                placeholder="Optional: E.g Student"
                className="registerProfession"
                // required
                onChange={(e) => setProfession(e.target.value)}
              ></input>
              <label>Password </label>
              <div className="labelCon" >
              <div className="hidePassword" >
              { hidePassword ? <input
                type="password"
                placeholder="Enter Password"
                className="registerPassword"
                    required
                    value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input> :
              <input
                type="text"
                placeholder="Enter Password"
                className="registerPassword"
                      required
                      value={password}
                onChange={(e) => setPassword(e.target.value)}
                  ></input>}
                  {hidePassword ? <p className="hideIcon" onClick={() => setHidePassword(false)} >{<IoEyeOutline fontSize='22' cursor='pointer' />}</p> : <p className="hideIcon" onClick={() => setHidePassword(true)} >{<BiHide fontSize='20' cursor='pointer' />} </p>}
                  {/* <div  className='generateBtn' onClick={() => setPassword(getRandomPassword())} >generate password </div> */}
                </div>
                </div>
              <button className="registerBtn" type="submit">
                Register{" "}
              </button>
              <p  className="errorMessage">{errorMessage ? "Failed to Register, please try again" : ""} </p>
              <p className="note" >{errorMessage ? "N.B: Usernames are unique so maybe that username is taken." : "" }</p>
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
