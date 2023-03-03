import axios from "axios";
import React, { useState, useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { AppContext, Context } from "../../../helper/Context";
import { UserDetailsStyled } from "./Userdetail.styled";

type Props = {};

const Userdetails = (props: any) => {
  const { user, dispatch } = useContext(Context);
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  const [updateBioMode, setUpdateBioMode] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const getUserName = useParams();

  const handleUpdateProfession = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      profession,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setUpdateMode(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const handleUpdateBio = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      bio,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setUpdateBioMode(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <UserDetailsStyled>
      <div className="userDetailsContainer">
        <div className="bgColor">
          {" "}
          <div className="userImage"></div>
        </div>
        <div className="bioContainer">
          <h1>{props.user.username}</h1>
          <form onSubmit={handleUpdateProfession}>
            <div className="userFormBioContainer">
              <div>
                {updateMode ? (
                  <div>
                    <input
                      type="text"
                      value={profession}
                      className="bioInput"
                      onChange={(e) => setProfession(e.target.value)}
                    />
                    <button type="submit" className="updateBioBtn">
                      Update Bio
                    </button>
                  </div>
                ) : (
                  <div className="bio">
                    <p> {props.user.profession}.</p>
                    {getUserName.username === user?.username && (
                      <AiOutlineEdit
                        onClick={() => setUpdateMode(true)}
                        style={{ fontSize: 30, cursor: "pointer" }}
                      />
                    )}
                  </div>
                )}
              </div>
              <div></div>
            </div>
          </form>
          <form onSubmit={handleUpdateBio}>
            <div className="userFormBioContainer">
              <div>
                {updateBioMode ? (
                  <div>
                    <input
                      type="text"
                      value={bio}
                      className="bioInput"
                      onChange={(e) => setBio(e.target.value)}
                    />
                    <button type="submit" className="updateBioBtn">
                      Update Bio
                    </button>
                  </div>
                ) : (
                  <div className="bio">
                    <p> Bio : {props.user.bio}.</p>
                    {getUserName.username === user?.username && (
                      <AiOutlineEdit
                        onClick={() => setUpdateBioMode(true)}
                        style={{ fontSize: 30, cursor: "pointer" }}
                      />
                    )}
                  </div>
                )}
              </div>
              <div></div>
            </div>
          </form>
          <p className="email">Email : {props.user.email} </p>
          <p>
            Member since: {new Date(props.user.createdAt).toDateString()} 🎈
          </p>

          {success ? (
            <p className="bioMessage">"Your Bio has been updated!"</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </UserDetailsStyled>
  );
};

export default Userdetails;
