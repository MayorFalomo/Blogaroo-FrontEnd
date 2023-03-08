import React from 'react'
import { NavLink } from 'react-router-dom';
import { AllUsersStyled } from './Allusers.styled';

type Props = {}

const Users = (props: any) => {

    
    return (
      <AllUsersStyled>
      <div className='UserContainer' >
          <div className="userImg" style={{ backgroundImage: `url(${props.user.profilePic})`}} > </div>
          <NavLink to={`/get-post/${props.user.username}`} ><h1> {props.user?.username}</h1></NavLink>
          <p> {props.user?.profession} </p>
            </div>
            </AllUsersStyled>
  )
}

export default Users