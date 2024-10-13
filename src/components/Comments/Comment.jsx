import React, { useState } from 'react';
import './Comment.css';
import { useDispatch } from 'react-redux';
import { updateComment, deleteComment } from '../../api/CommentRequest';

import { addNewComment } from '../../actions/postAction';

function CommentSection({ comments, setComments, user, postId }) {
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');
  const dispatch = useDispatch();

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(addNewComment(postId, user._id, newComment));
      setNewComment('');
    }
  };

  const handleUpdateComment = () => {
    dispatch(updateComment(postId, editCommentId, editedCommentText));
    setEditCommentId(null);
    setEditedCommentText('');
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(postId, id));
  };

  return (
    <div className='comment-section'>
      <div className='comment-input'>
        <input
          className='comment-inputt'
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a comment...'
        />
        <button className='button' onClick={handleAddComment}>
          Comment
        </button>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className='comment'>
          {editCommentId === comment.id ? (
            <>
              <textarea
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
              />
              <button className='button' onClick={handleUpdateComment}>
                Update
              </button>
            </>
          ) : (
            <>
              <p>{comment.text}</p>
              <div className='comment-actions'>
                <button
                  className='button'
                  onClick={() => handleUpdateComment(comment.id)}
                >
                  Edit
                </button>
                <button
                  className='button'
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
