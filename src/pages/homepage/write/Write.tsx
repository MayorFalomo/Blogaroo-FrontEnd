import React, { useContext, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { WriteStyled } from "./Write.styled";
import { Context } from "../../../helper/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  const { user } = useContext(Context);

  const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setPhoto(res.data.url))
      .catch((err) => console.log(err));
    // console.log(files, "This is files");
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    //newPost is the object created when we create a new post, we defined what username is user.username, So when we create a new post this new object is created containing the users username and the profession
    const newPost = {
      username: user.username,
      title,
      desc,
      tags,
      photo,
    };

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(photo);

  return (
    <WriteStyled>
      <div>
        <Navbar />
        <div className="WriteContainer">
          <form onSubmit={handelSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <AiOutlinePlus className="writeIcon" />{" "}
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => {
                  uploadImage(e.target.files);
                }}
              />
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="writeText">
              <textarea
                placeholder="Write Your Story..."
                typeof="text"
                className="textInput"
                required
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
              <input
                type="text"
                className="category"
                placeholder="Category e.g Fashion"
                onChange={(e) => setTags(e.target.value)}
              />
              <button
                type="submit"
                // onClick={uploadImage}
                className="writeSubmitBtn"
              >
                Publish{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </WriteStyled>
  );
};

export default Write;