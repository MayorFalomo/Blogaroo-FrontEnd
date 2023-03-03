import { useContext } from "react";
import { AppContext } from "../../helper/Context";
import Post from "../../Post/Post";
import { PostsStyled } from "./Posts.styled";

type Props = {};

const Posts = (props: any) => {
  const { searchPost } = useContext(AppContext);

  return (
    <PostsStyled>
      <div className="Posts">
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
            <div key={index}>
              <Post post={post} />
            </div>
          ))}
        <div className="postLight">
          <img className="leftLight" src="../leftLight.svg" alt="img" />
        </div>
      </div>
    </PostsStyled>
  );
};

export default Posts;
