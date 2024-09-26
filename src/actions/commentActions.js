import * as CommentApi from '../api/CommentRequest';

// Add a comment action
export const addComment = (postId, userId, text) => async (dispatch) => {
    try {
        const { data } = await CommentApi.addComment(postId, userId, text);
        dispatch({ type: "ADD_COMMENT_SUCCESS", data });
    } catch (error) {
        dispatch({ type: "ADD_COMMENT_FAIL", error });
    }
};

// Update a comment action
export const updateComment = (postId, commentId, text) => async (dispatch) => {
    try {
        const { data } = await CommentApi.updateComment(postId, commentId, text);
        dispatch({ type: "UPDATE_COMMENT_SUCCESS", data });
    } catch (error) {
        dispatch({ type: "UPDATE_COMMENT_FAIL", error });
    }
};

// Delete a comment action
export const deleteComment = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await CommentApi.deleteComment(postId, commentId);
        dispatch({ type: "DELETE_COMMENT_SUCCESS", data });
    } catch (error) {
        dispatch({ type: "DELETE_COMMENT_FAIL", error });
    }
};
