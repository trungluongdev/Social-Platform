import * as PostsApi from '../api/PostRequest';

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: 'RETREIVING_START' });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: 'RETREIVING_SUCCESS', data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'RETREIVING_FAIL' });
  }
};

export const deletePost = (id, userId) => async (dispatch) => {
  try {
    await PostsApi.deletePost(id, userId);
    dispatch({ type: 'DELETE_SUCCESS', payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const addNewComment = (postId, userId, text) => async (dispatch) => {
  try {
    const { data } = await PostsApi.addPostComment(postId, { userId, text });
    dispatch({ type: 'COMMENT_POST_SUCCESS', payload: postId, data });
  } catch (error) {
    console.log(error);
  }
};
