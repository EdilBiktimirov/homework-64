import React, {useCallback, useEffect, useState} from 'react';
import PostForm from "../PostForm/PostForm";
import {PostType} from "../../types";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";

const EditPost = () => {
  const {id} = useParams();
  const [editedPost, setEditedPost] = useState<PostType | null>(null);

  const fetchPost =  useCallback(async (id: string) => {
    try {
      const response = await axiosApi.get<PostType>('/posts/' + id + '.json');
      response.data.id = id;
      setEditedPost(response.data)

    } catch(e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchPost(id).catch(console.error);
    }
  }, [fetchPost, id]);

  return (
    <div>
      {editedPost && (
        <PostForm existingPost={editedPost}/>
      )}
    </div>
  );
};

export default EditPost;