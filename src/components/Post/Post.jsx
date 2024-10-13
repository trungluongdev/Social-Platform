import React, { useEffect, useState } from 'react';
import './Post.css';
import { deletePost, getTimelinePosts } from '../../api/PostRequest';
import CommentSection from '../Comments/Comment';
import Comment from '../../img/comment.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';
import { UilEllipsisV, UilEdit, UilTrashAlt } from '@iconscout/react-unicons';

function Post({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  // const [likes, setLikes] = useState(data.likes.length)
  const [comments, setComments] = useState(data.comments || []);
  const [showComments, setShowComments] = useState(false);
  const isProfilePage = window.location.pathname.includes('/profile');
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);

    // liked ? setLikes((prev) => prev-1): setLikes((prev)=>prev+1)
  };
  useEffect(() => {
    setComments(data.comments);
  }, [data.comments]);

  const handleDelete = async () => {
    try {
      await deletePost(data._id, user._id);
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const toggleCommentSection = () => {
    console.log('Show comments');
    setShowComments(!showComments);
  };

  return (
    <div className='Post'>
      <div className='detail-wrapper'>
        <div className='detail'>
          <span>
            <b>{data.name}</b>
          </span>
          <span> {data.desc}</span>
        </div>

        {isProfilePage && Boolean(user._id === data.userId) && (
          <div className='action-wrapper'>
            <UilEllipsisV className='action-icon' />
            <div className='action-dropdown'>
              <div className='dropdown-item'>
                <UilEdit /> Edit post
              </div>
              <div className='dropdown-item' onClick={handleDelete}>
                <UilTrashAlt /> Delete post
              </div>
            </div>
          </div>
        )}
      </div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''}
        alt=''
      />

      <div className='postReact'>
        <img
          src={liked ? Heart : NotLike}
          alt=''
          style={{ cursor: 'pointer' }}
          onClick={handleLike}
        />
        <img
          src={Comment}
          alt=''
          style={{ cursor: 'pointer' }}
          onClick={toggleCommentSection}
        />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {data.likes.length} likes
      </span>

      {showComments && (
        <CommentSection
          comments={comments}
          setComments={setComments}
          user={user}
          postId={data._id}
        />
      )}
    </div>
  );
}

export default Post;
