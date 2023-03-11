import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
// import { useLocation } from "react-router-dom";
import Herosection from "../../components/Herosection/Herosection";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";
import { AppContext } from "../../helper/Context";
import { HomeStyled } from "./Home.styled";

const Homepage = () => {
  const { posts} = useContext(AppContext);

  //useLocation would usually give you a object containing search,key, pathname etc but what i need in this instance is search:""
  //If you log {search} you would get something like /?user={post.username}
  const [loading, setLoading] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

   useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 2000);
  }, []);

  return (
  <HomeStyled>
    {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loaders">
              <span className="loader"></span>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
    <div>
      <Navbar />
      <Herosection posts={posts} />
      <Posts posts={posts} />
      <Footer />
          </div>
                  </>
      )}
      </HomeStyled>
  );
};

export default Homepage;
