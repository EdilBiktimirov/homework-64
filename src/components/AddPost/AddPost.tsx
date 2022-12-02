import React, {useCallback, useState} from 'react';
import {PostType} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";


const AddPost = () => {

  const [post, setPost] = useState<PostType>({
    title: '',
    text: '',
    date: '',
    id: '',
  });

  const navigate = useNavigate()
  const {id} = useParams();


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
  }

  let title;

  if (!id) {
    title = <p>Add new post</p>;
  } else {
    title = <p>Edit post:</p>
  }

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
  }


  return (
    <div>
      {title}
      <form onSubmit={onFormSubmit}>
        <input name="title" value={post.title} onChange={onElementChange}/>
        <textarea name="text" value={post.text} onChange={onElementChange}/>
        <button type="submit">Save</button>
      </form>

    </div>
  );
};

export default AddPost;