import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../helper/Context'
import CommentPage from './CommentPage'
import { CommentStyled } from './Comments.styled'

type Props = {}

const Comments = (props: any) => {

   const [post, setPost] = useState<any>({});
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [comments, setComments] = useState<any>(post.comments)

  const { user } = useContext(Context);
  

  //Using useParams is better than using useLocation and saying split("/") just to get the id from the URL, useParams() does the exact same thing but more straightforward
  const location = useParams();
  //OR USE THIS, WE CALL postId straightUp
  // const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + location.postId);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setTags(res.data.tags);
    };
    getPost();
  }, [location.postId]);

  const handleComment = async() => {
    const commentData = {
      username: user.username,
      photo: user.photo,
      comments,
      postId: post._id
    }
    await axios.put(`/posts/comments`, commentData).catch((err) => console.log(err))
    setComments([...comments, commentData])
  }
  // console.log(post.comments[0]?.comments);

  // console.log(post?.comments.map((posts:any) => (
  //       console.log(posts.comments)
  //     )));
    

    
  return (
    <CommentStyled>
      <div className='Comment' >
        <div className='commentsContainer' >
           <div className="singlePostContainer">
        <Navbar />
        <div className="singlePostContainer">
          <div className="singlePostTags">
            {tags}{" "}
            <ul>
              <li> {new Date(post?.createdAt).toDateString()} </li>{" "}
            </ul>
          </div>
          <div className="iconFlexContainer">
            <div className="singlePostIconFlex">
            </div>
          </div>
          <div className="singlePostInfo">
            <div className="Author">
              <div className="authorImg"> </div>
              <div className="authorsInfo">
                <Link to={`/get-post/${post.username}`}>
                  <b>{post?.username} </b>
                </Link>
                <p>{post?.profession} </p>
              </div>
            </div>

            <div
              className="singlePostImg"
              style={{ backgroundImage: `url(${post.photo})` }}
            ></div>
          </div>
        </div>
          </div>
          {post?.comments?.map((comment: any, index:any) => (
            <div key={index} >
              <CommentPage comment={comment} />
            </div>
      ))}
          <div className='comment' >
              <textarea typeof='text' onChange={(e:any) => setComments(e.target.value)} className='commentInput' placeholder='Add a comment' />
              </div>
                    <button onClick={handleComment} className='submitComment' type='submit' >Comment </button>
        </div>
        </div>
      </CommentStyled>
  )
}

export default Comments