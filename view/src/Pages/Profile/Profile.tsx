import React, { useEffect, useReducer, useState } from "react";
import Event from "../../Components/Event/Event";
import "./profile.css";
import defautlProfile from "../../Images/default-image.png";
import { useDispatch, useSelector } from "react-redux";
import { SIUser } from "../../features/auth-slice";
import { AppDispatch, RootState } from "../../store";
import {  useParams } from "react-router-dom";
import { getProfile, TProfile } from "../../features/profile-slice";

function Profile() {
  const URL_API = "http://localhost:3000"
  const dispatch = useDispatch<AppDispatch>()
  const defaultUser = useSelector<RootState>(state=>state.User.User) as SIUser
  const [user,setUser] = useState(defaultUser)
  const profile = useSelector<RootState>(state => state.Profile.profile) as TProfile
  const { userId } = useParams()
  const [isUser, setIsUser] = useState<Boolean>(true)
 
  const getUserDetails = async ()=>{
      
      const res = await fetch(`${URL_API}/api/user/userInfo/${userId}`)
      const data = await res.json()
      if (data.user){
        const _user = data.user as SIUser
        setUser(_user)
      }else{
        setIsUser(false)
      }

      }

  useEffect(()=>{
    if(user._id !== defaultUser?._id){
      getUserDetails().catch(console.error)
    }
    if(user){
      dispatch(getProfile(user.profile))
    }
  } ,[])


  return (
    <div className='profile'>
      {isUser ? <>
      <div className='profile-info'>
        <img src={defautlProfile} alt='profile' />
        <h1>{profile.fullName}</h1>
        <h2>{profile.bio}</h2>
        <div className='es-infos'>
          <h3>{user.events?.length} Events</h3>
          <h3>{user.submittions?.length} Submittions</h3>
        </div>
        <>{user._id === defaultUser._id && <button>Edit</button>}</>
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
