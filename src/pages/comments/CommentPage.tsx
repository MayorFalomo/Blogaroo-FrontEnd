import React from 'react'
import { CommentStyled } from './Comments.styled';

type Props = {}

const CommentPage = (props: any) => {
 
    
  return (
    <CommentStyled>
      <div className='commentsPageContainer'>
      <p> {props?.comment?.username}:</p>
      <div className='mainComment' >
          <div className='comments' > {props?.comment?.comments} </div>
        </div>
        </div>
      </CommentStyled>
  )
}

export default CommentPage