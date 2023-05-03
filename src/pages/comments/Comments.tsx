import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../helper/Context'
import CommentPage from './CommentPage'
import { CommentStyled } from './Comments.styled'

type Props = {}

const Comments = (props: any) => {

    const { user } = useContext(Context);

   const [post, setPost] = useState<any>({});
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [comments, setComments] = useState<any>(post.comments)
  const [commentAdded, setCommentAdded] = useState<any>(false)
  

  //Using useParams is better than using useLocation and saying split("/") just to get the id from the URL, useParams() does the exact same thing but more straightforward
  const location = useParams();
  //OR USE THIS, WE CALL postId straightUp
  // const { postId } = useParams();

  // console.log(post.comments, "This is post.comments");
  
//UseEffect to get the post we're commenting on
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://blogaroo-backend.vercel.app/api/posts/" + location.postId);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setTags(res.data.tags);
    };
    getPost();
  }, [location.postId]);

  //Function to handle post commenting, 
  const handleComment = async () => {
    const commentData = {
      username: user.username,
      photo: user.photo,
      comments,
      postId: post._id
    }
    await axios.put(`https://blogaroo-backend.vercel.app/api/posts/comments`, commentData).catch((err) => console.log(err))
    setComments("")
    //SetPost to the previous post and inside that previous post object enter the comment array
    //take the post.comments and enter the commentdata you sent
    setPost({
      ...post, 
      comments: [
        ...post?.comments, commentData
      ]
    })
    setCommentAdded(true)

    setTimeout(() => {
      setCommentAdded(false)
    }, 6000)
  }
  
    console.log(comments);
    

    
  return (
    <CommentStyled>
      <div className='Comment' >
        <div className='commentsContainer' >
           <div className="singlePostContainer">
        <Navbar />
        <div className="singlePostContainer">
          <div className="singlePostTags">
            <span className='tags' >{tags}</span>
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
              <div className="authorImg" style={{backgroundImage: `url(${user.profilePic})`}}> </div>
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
            <h1  className='commentsHeading' >Comments </h1>
          </div>
          <div className='seeCommentsMap' >
          {post?.comments?.map((comment: any, index:any) => (
            <div key={index} className='mapContainer' >
              <CommentPage comment={comment} />
            </div>
          ))}
            </div>
          <div className='comment' >
              <textarea typeof='text' onChange={(e:any) => setComments(e.target.value)} value={comments} className='commentInput' placeholder='Add a comment' />
              </div>
          {comments?.length > 0 ?  <button onClick={handleComment} className='submitComment' disabled={comments?.length < 1 } type='submit' >Comment </button> : <button  className='disabledBtn' disabled={true}>Comments </button>}
          {commentAdded ? <p className='commentSuccess' >"Your comment has been added"</p> : ""}
        </div>
        </div>
      </CommentStyled>
  )
}

export default Comments