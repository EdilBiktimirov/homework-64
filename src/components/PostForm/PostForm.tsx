import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import {PostType} from "../../types";

interface Props {
  existingPost?: PostType;
}

const PostForm: React.FC<Props> = ({existingPost}) => {
  const {id} = useParams();
  const navigate = useNavigate();

  const initialState = existingPost ? {
    ...existingPost
  } : {
    title: '',
    text: '',
    date: '',
    id: '',
  }

  const [post, setPost] = useState<PostType>(initialState);

  const onElementChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    const nowDate = new Date().toLocaleDateString();
    const nowTime = new Date().toLocaleTimeString();
    const currentDate = nowDate + ' ' + nowTime;

    setPost((prev) => ({
      ...prev,
      [name]: value,
      date: currentDate,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) {
      try {
        await axiosApi.post('/posts.json', post);
      } finally {
        navigate('/');
      }
    } else {
      try {
        await axiosApi.put('/posts/' + id + '.json', post);
      } finally {
        navigate('/');
      }
    }
  };

  return (
    <div>
      <p className="fw-bold fs-4 mt-2">{existingPost ? 'Edit post:' : 'Add new post:'}</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="textInput" className="form-label">Title:</label>
        <input
          className="form-control mb-2"
          id="textInput"
          name="title"
          type="text"
          value={post.title}
          onChange={onElementChange}/>
        <label htmlFor="textArea" className="form-label">Text:</label>
        <textarea
          className="form-control mb-2"
          id="textArea"
          name="text"
          value={post.text}
          onChange={onElementChange}/>
        <button
          className="btn btn-success w-50 mx-auto mt-2"
          type="submit">{existingPost ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PostForm;