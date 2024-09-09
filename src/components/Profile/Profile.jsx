import React from 'react'
import './Profile.css'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../ProfileCard/ProfileCard'

function Profile() {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
    </div>
  )
}

export default Profile