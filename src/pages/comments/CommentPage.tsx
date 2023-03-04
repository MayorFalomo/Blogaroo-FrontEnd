import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Context } from '../../helper/Context';
import { CommentStyled } from './Comments.styled';

type Props = {}

const CommentPage = (props: any) => {
 console.log(props.comment);
 
    
    return (
      <CommentStyled>
            <div className='commentsContainer' >
          {/* <p>{props?.comment?.comments} </p> */}
        </div>
            </CommentStyled>
  )
}

export default CommentPage