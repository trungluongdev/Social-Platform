import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/profileSide/profileSide'
function Home() {
  return (
    <div className="Home">
       <ProfileSide/>
        <div className="postSide">post</div>
        <div className="rightSide">rigthside</div>
    </div>
  )
}

export default Home