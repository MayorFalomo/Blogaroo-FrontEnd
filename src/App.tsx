import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AppContext, Context } from "./helper/Context";
import GlobalStyle from "./GlobalStyles";
import Homepage from "./pages/homepage/Homepage";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import Write from "./pages/homepage/write/Write";
import SinglePost from "./components/singlePost/SinglePost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Settings from "./pages/settings/Settings";
import UserProfile from "./pages/userProfile/userprofiles/UserProfile";
import Comments from "./pages/comments/Comments";

function App() {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState<any>([]);
  const [searchPost, setSearchPost] = useState<string>("");

  const { search } = useLocation();

  // console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      // console.log(res.data);
    };
    fetchPosts();
  }, [search]);

  // console.log(posts);
  // console.log(user);

  return (
    <AppContext.Provider value={{ posts, searchPost, setSearchPost }}>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/comments/:postId" element={<Comments posts={posts} />}/>
          <Route
            path="/get-post/:username"
            element={<UserProfile posts={posts} />}
          />
          <Route path="/post/:postId" element={<SinglePost posts={posts} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
