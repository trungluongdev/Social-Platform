import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/postAction'

function Posts() {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
    console.log(posts);
  }, [user._id, dispatch]);

  if (!posts) return "no posts"
  // if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  const filteredPosts = params.id ? posts.filter((post) => post.userId === params.id) : posts;
    
  return (
    <div className="Posts">
        {loading
        ? "Fetching posts...."
        : filteredPosts.map((post) => {
            return <Post data={post} key={post._id} />;
          })}
    </div>
  )
}

export default Posts