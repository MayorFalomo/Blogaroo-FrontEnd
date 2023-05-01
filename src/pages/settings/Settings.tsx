import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { HiUserGroup } from "react-icons/hi";
import { SettingsStyle } from "./Settings.styled";
import { Context } from "../../helper/Context";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {};

const Settings = (props: any) => {
  const [uploadSuccessful, setUploadSuccessful] = useState<boolean>(false);
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const { user, dispatch } = useContext(Context);

  const uploadImage = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    await axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setProfilePic(res.data.url))
      .catch((err) => console.log(err));
    setUploadSuccessful(true)
     setTimeout(() => {
        setUploadSuccessful(false);
      }, 3000);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: username.length === 0 ? user.username : username,
      email: email.length === 0 ? user.email : email,
      password: password.length === 0 ? user.password : password, 
      profilePic: profilePic.length === 0 ? user.profilePic : profilePic,
    };
    try {
      const res = await axios.put("https://blogaroo-backend.vercel.app/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
      setFailed(true)
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };


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
                <div className="settingsUpdate">
                  <div className="file">
                    <div
                      className="profileImage"
                      style={{ backgroundImage: `url(${user.profilePic})` }}
                    ></div>
                    {uploadSuccessful ? <p>Upload successful {<AiOutlineCheck fontSize='40px' color="green"/>} </p> : <label className="fileInput" htmlFor="fileInput">
                      Upload Image :
                      <HiUserGroup className="hiUser" />
                    </label>}
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
                {failed && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: 20,
                    }}
                  >
                    This name has already been taken...{" "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </SettingsStyle>
  );
};

export default Settings;
