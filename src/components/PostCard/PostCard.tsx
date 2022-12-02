import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  id: string;
  date: string;
  title: string;
}

const PostCard: React.FC<Props> = ({id,date, title}) => {
  // const {id} = useParams();
  // console.log(id);

  return (
    <div>
      <p>Created on: {date}</p>
      <p>{title}</p>
      <Link to={"posts/" + id}>Read more</Link>
    </div>
  );
};

export default PostCard;