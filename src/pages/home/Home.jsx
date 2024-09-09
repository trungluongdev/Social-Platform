import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'

function Home() {
  return (
    <div className="Home">
       <ProfileSide/>
        <PostSide/>
        <div className="rightSide">rigthside</div>
    </div>
  )
}

export default Home