import React, { useEffect, useReducer, useState } from "react";
import Event from "../../Components/Event/Event";
import "./profile.css";
import defautlProfile from "../../Images/default-image.png";
import { useSelector } from "react-redux";
import { SIUser } from "../../features/auth-slice";
import { RootState } from "../../store";
import {  useParams } from "react-router-dom";

function Profile() {
  const URL_API = "http://localhost:3000"
  let User = useSelector<RootState>(state=>state.User.User) as SIUser
  const {userId} = useParams()
  const [isUser, setIsUser] = useState<Boolean>(true)
 
  const getUserDetails = async ()=>{
   
      
      const res = await fetch(`${URL_API}/api/user/userInfo/${userId}`)
      const data = await res.json()
      if (data.user){
        
        const user = data.user as SIUser
        User =  user
      }else{
        setIsUser(false)
      }

      }

  useEffect(()=>{
    if(userId !== User?._id){
      getUserDetails().catch(console.error)
    }
  } 
,[])

  return (
    <div className='profile'>
      {isUser ? <>
      <div className='profile-info'>
        <img src={defautlProfile} alt='profile' />
        <h1>FULL ANME</h1>
        <h2>Bio </h2>
        <div className='es-infos'>
          <h3>{User.events?.length} Events</h3>
          <h3>{User.submittions?.length} Submittions</h3>
        </div>
      </div>
      <div className='profile-events'>
        <h1>Events</h1>
        <div>
          <Event />
          <Event />
          <Event />
        </div>
      </div>
      <div className='profile-submition'>
        <h1>Submition Events</h1>
        <div>
          <Event />
          <Event />
          <Event />
        </div>
      </div></>
: <><h1 style={{textAlign:"center" ,color:"white", fontSize: 22}}>No user found</h1></>}
    </div>
  );
}

export default Profile;
