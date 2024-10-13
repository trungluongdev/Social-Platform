import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './profileSide.css';
import FollowerCard from '../FollowersCard/FollowersCard';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard location='homePage' />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
