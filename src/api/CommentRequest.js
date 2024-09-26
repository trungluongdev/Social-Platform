import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

// Add a comment
export const addComment = (postId, commentData) =>
    API.post(`/comments/${postId}/comment`, commentData);

// Get comments by post
export const getComments = (postId) =>
    API.get(`/comments/${postId}/comments`);

// Update a comment
export const updateComment = (postId, commentId, commentData) =>
    API.put(`/comments/${postId}/comment/${commentId}`, commentData);

// Delete a comment
export const deleteComment = (postId, commentId) =>
    API.delete(`/comments/${postId}/comment/${commentId}`);
