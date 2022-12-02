import React, {useCallback, useEffect, useState} from 'react';
import {PostType} from "../../types";
import {Link, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  onBtnClick: (id: string) => void;
}

const Post: React.FC<Props> = ({onBtnClick}) => {
  const {id} = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  const fetchPost =  useCallback ( async (id: string) => {
    try {
      const response = await axiosApi<PostType>('/posts/' + id + '.json');
      response.data.id = id;
      setPost(response.data)

    } catch(e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchPost(id).catch(console.error);
    }
  }, [fetchPost, id]);

  return (post &&
      <div className="card shadow my-3 p-2">
          <p>Created on: {post.date}</p>
          <p className="fw-bold">{post.title}</p>
          <p>{post.text}</p>
          <button
              className="btn btn-danger w-50 mx-auto mb-2"
              onClick={() => onBtnClick(id!)}>Delete</button>
          <Link
              className="btn btn-info w-50 mx-auto"
              to={'/posts/' + post.id + '/edit'}>Edit</Link>
      </div>
  )
};

export default Post;