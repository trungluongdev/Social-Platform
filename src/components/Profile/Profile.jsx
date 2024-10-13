import React from 'react';
import './Profile.css';
import ProfileLeft from '../ProfileLeft/ProfileLeft';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../ProfileCard/ProfileCard';
import RightSide from '../RightSide/RightSide';

function Profile() {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='Profile-center'>
        <ProfileCard location='profilePage' />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default Profile;
