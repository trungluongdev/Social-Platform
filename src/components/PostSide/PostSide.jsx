import React from 'react'
import "./PostSide.css"
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
import ProfileCard from '../ProfileCard/ProfileCard'

function PostSide() {
  return (
    <div className="PostSide">
      <ProfileCard/>
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide