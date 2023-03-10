import { useContext, useEffect} from "react";
import { AppContext } from "../../helper/Context";
import Post from "../../Post/Post";
import Leftlight from "../leftlight/Leftlight";
import { PostsStyled } from "./Posts.styled";
import AOS from "aos";
import "aos/dist/aos.css";


type Props = {};

const Posts = (props: any) => {
  const { searchPost, handleScroll, completed, loading } = useContext(AppContext);

useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <PostsStyled>
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
          <div className="Posts" onScroll={handleScroll} >
       
            {props.posts
              ?.filter((postings: any) => {
                if (searchPost == "") {
                  return postings;
                } else if (
                  postings.tags.toLowerCase().includes(searchPost.toLowerCase()) ||
                  postings.title.toLowerCase().includes(searchPost.toLowerCase())
                ) {
                  return postings;
                }
              })
              .reverse()
              .map((post: any, index: any) => (
                <div className="postsMap" key={index}  data-aos="fade-up">
                  <Post post={post} />
                </div>
              ))}
            <Leftlight />
           
          </div>
        </>
      )}
    </PostsStyled>
  );
};

export default Posts;
