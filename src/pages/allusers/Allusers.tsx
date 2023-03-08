import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Leftlight from '../../components/leftlight/Leftlight'
import Navbar from '../../components/Navbar/Navbar'
import { AllUsersStyled } from './Allusers.styled'
import Users from './Users'

type Props = {}

const Allusers = (props: any) => {

  const [allUsers, setAllUsers] = useState([])
   const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios.get("/users").then((res) => setAllUsers(res.data)).then((err) => console.log(err))
    setCompleted(true)
  },[])  
  

  return (
    <AllUsersStyled>
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
          <div className='allUsersContainer' >
            <Navbar />
         
            <div className="allUsersMap" >
              {allUsers.map((user: any) => (
                <div key={user._id} className='subMapContainer' >
                  <Users user={user} />
                </div>
              ))}
            </div>
            <Leftlight />
           
          </div>
        </>
      )}
      </AllUsersStyled>
  )
}

export default Allusers