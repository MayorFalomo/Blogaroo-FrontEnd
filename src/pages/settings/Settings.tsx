import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HiUserGroup } from "react-icons/hi";
import { SettingsStyle } from "./Settings.styled";
import { Context } from "../../helper/Context";
import axios from "axios";
import Link from "react-router";
import Footer from "../../components/footer/Footer";

type Props = {};

const Settings = (props: any) => {
  const [file, setFile] = useState<any>();
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const { user, dispatch } = useContext(Context);

  const uploadImage = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    await axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setProfilePic(res.data.url))
      .catch((err) => console.log(err));
    // setFile(profilePic);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      profilePic,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  // console.log(profilePic, "This is profilePic");
  // console.log(file, "This is File");
  // console.log(user);

  return (
    <SettingsStyle>
      <div className="settingsContainer">
        <Navbar />
        <div className="subContainer">
          <div className="settingsWrapper">
            <div className="main">
              <div className="heading">
                <h1>Update Your Account </h1>
                <p> Delete your Account</p>
              </div>
              <h2>Profile Picture </h2>
              <form onSubmit={handleSubmit}>
                {/* <label>Profile Picture </label> */}
                <div className="settingsUpdate">
                  <div className="file">
                    <div
                      className="profileImage"
                      style={{ backgroundImage: `url(${user.profilePic})` }}
                    ></div>
                    <label htmlFor="fileInput">
                      Upload Image : <HiUserGroup className="hiUser" />
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => uploadImage(e.target.files)}
                    />
                  </div>
                  <label>Username </label>
                  <input
                    className="formInput"
                    type="text"
                    placeholder={user.username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <label>Email </label>
                  <input
                    className="formInput"
                    type="email"
                    placeholder={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Password </label>
                  <input
                    className="formInput"
                    type="password"
                    placeholder="Update Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="settingsUpdateBtn" type="submit">
                  Update{" "}
                </button>
                {success && (
                  <p
                    style={{
                      color: "green",
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: 20,
                    }}
                  >
                    Profile has been successfully updated...{" "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </SettingsStyle>
  );
};

export default Settings;
