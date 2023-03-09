import React, { useContext, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { WriteStyled } from "./Write.styled";
import { Context } from "../../../helper/Context";
import axios from "axios";
import Footer from "../../../components/footer/Footer";
import Leftlight from "../../../components/leftlight/Leftlight";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


const Write = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [sucessfullUpload, setSucesfullUpload] = useState(false);


  const { user } = useContext(Context);

  const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setPhoto(res.data.url))
      .catch((err) => console.log(err));
      setSucesfullUpload(true)
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    //newPost is the object created when we create a new post, we defined what username is user.username, So when we create a new post this new object is created containing the users username and the profession
    const newPost = {
      username: user.username,
      profession: user.profession,
      title,
      desc,
      tags,
      photo,
    };

    try {
      const res = await axios.post("https://blogaroo-backend.vercel.app/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <WriteStyled>
      <div className="writeStyle" >
        <Navbar />
            <div className="WriteContainer">
              <form onSubmit={handelSubmit}>
                <div className="writeFormGroup">
                  <Tippy content='Upload Image'>
                    <label htmlFor="fileInput">
                      <AiOutlinePlus className="writeIcon" />{" "}
                    </label>
                  </Tippy>

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
                  ></textarea><br />
                  <input
                    type="text"
                    className="category"
                    placeholder="Category e.g Fashion"
                    onChange={(e) => setTags(e.target.value)}
                  />
                    { sucessfullUpload ? <button
                      type="submit"
                      className="writeSubmitBtn"
                    >
                      Publish{" "}
                    </button> :  <button
                      type="submit"
                      disabled
                      className="writeSubmitBtn"
                    >
                      Publish{" "}
                    </button>}
                </div>
              </form>
            </div>
            <Leftlight />
            <Footer />
      </div>
    </WriteStyled>
  );
};

export default Write;
