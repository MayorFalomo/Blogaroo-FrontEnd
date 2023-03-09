import { useContext} from "react";
import { AppContext } from "../../helper/Context";
import Post from "../../Post/Post";
import Leftlight from "../leftlight/Leftlight";
import { PostsStyled } from "./Posts.styled";

type Props = {};

const Posts = (props: any) => {
  const { searchPost, handleScroll, completed, loading } = useContext(AppContext);


  
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
                <div className="postsMap" key={index}>
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
