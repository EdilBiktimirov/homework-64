import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import AddPost from "../../components/AddPost/AddPost";
import Home from "../../components/Home/Home";
import axiosApi from "../../axiosApi";
import type {PostType} from "../../types";
import type {PostsType} from "../../types";
// import Posts from "../../components/Post/Posts";
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";


const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();


  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get<PostsType>('/posts.json');

      setPosts([]);

      if (response.data !== null) {
        const postsArray = Object.keys(response.data).map((elem) => {
          const post = response.data[elem];
          post.id = elem;
          return post;
        });

        setPosts(postsArray);
      }
    } finally {

      setLoading(false);
    }
  }, []);


  useEffect(() => {

    fetchPosts().catch(console.error);
  }, [fetchPosts, location]);

  const removePost = async (id: string) => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigate('/');
  }

  let home = <Home posts={posts}/>

  if (loading) {
    home = <Spinner/>
  }


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={(
          home
        )}/>
        <Route path="/new-post" element={(
          <AddPost/>
        )}/>
        <Route path="/posts/:id" element={(
          <Post onBtnClick={removePost}/>
        )}/>
        <Route path="/posts/:id/edit" element={(
          <AddPost/>
        )}/>
        <Route path="*" element={(
          <h1>Not found</h1>
        )}/>
      </Routes>
    </div>
  );
};

export default Blog;