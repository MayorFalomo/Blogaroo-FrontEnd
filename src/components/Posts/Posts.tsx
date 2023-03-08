import { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import Post from "../../Post/Post";
import Leftlight from "../leftlight/Leftlight";
import { PostsStyled } from "./Posts.styled";

type Props = {};

const Posts = (props: any) => {
  const { searchPost, handleScroll } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  
  return (
    <PostsStyled>
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
              {/* </>
        )} */}
      </div>

    </PostsStyled>
  );
};

export default Posts;
