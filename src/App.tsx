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
import Allusers from "./pages/allusers/Allusers";
import Preload from "./components/preload/Preload";

function App() {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState<any>([]);
  const [searchPost, setSearchPost] = useState<string>("");

  const { search } = useLocation();

   const [loaded, setLoaded] = useState(false);
  const [completedPredload, setCompletedPreload] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [skip, setSkip] = useState(10)
  const [generalPosts, setGeneralPosts] = useState<any>()
  // console.log(search);

  useEffect(() => {
    setTimeout(() => {
      setCompletedPreload(true);
    }, 6000);
  }, []);

  useEffect(() => {
    const fetchPosts = async (params:any) => {
      const res = await axios.get(`/posts/?page=1&limit=${params}` + search);
      setPosts(res.data);
      setCompleted(true)
    };
    fetchPosts(skip);
  }, [search]);

  const handleScroll = (e: any) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(generalPosts?.length + 5);
    }
  }

  return (
    <AppContext.Provider value={{ posts, searchPost, setSearchPost, handleScroll, completed, loading }}>
      {!completedPredload ? (
        <div className="contain">
          {!loaded ? (
            <div className="loader">
              <Preload />
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <div className="App">
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/write" element={<Write />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/allusers" element={<Allusers />} />
              <Route path="/comments/:postId" element={<Comments posts={posts} />} />
              <Route
                path="/get-post/:username"
                element={<UserProfile posts={posts} />}
              />
              <Route path="/post/:postId" element={<SinglePost posts={posts} />} />
            </Routes>
          </div>
        </>
      )}
    </AppContext.Provider>
  );
}

export default App;
