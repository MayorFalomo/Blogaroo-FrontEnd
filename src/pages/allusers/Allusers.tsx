import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Leftlight from '../../components/leftlight/Leftlight'
import Navbar from '../../components/Navbar/Navbar'
import { AllUsersStyled } from './Allusers.styled'
import Users from './Users'
import AOS from "aos";
import "aos/dist/aos.css";


type Props = {}

const Allusers = (props: any) => {

  const [allUsers, setAllUsers] = useState([])
   const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios.get("https://blogaroo-backend.vercel.app/api/users").then((res) => setAllUsers(res.data)).then((err) => console.log(err))
    setCompleted(true)
  },[])  
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
         
            <div className="allUsersMap" data-aos="fade-up" >
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