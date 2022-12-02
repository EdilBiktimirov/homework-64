import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  id: string;
  date: string;
  title: string;
}

const PostCard: React.FC<Props> = ({id, date, title}) => {

  return (
    <div className="card shadow-sm my-2 p-2">
      <p>Created on: {date}</p>
      <p>{title}</p>
      <Link
        className="btn btn-warning w-25 mx-auto"
        to={"posts/" + id}>Read more</Link>
    </div>
  );
};

export default PostCard;