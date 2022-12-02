import React from 'react';
import {PostType} from "../../types";
import PostCard from "../PostCard/PostCard";

interface Props {
  posts: PostType [];
}

const Home: React.FC<Props> = ({posts}) => {

  let showPost = (
    <div>
      {posts.map((element) => (
        <PostCard date={element.date} title={element.title} key={element.id} id={element.id}/>
      ))}
    </div>
  )

  if (posts.length === 0) {
    showPost = <div>No posts yet</div>
  }

  return (
    <div>
    {showPost}
    </div>
  );
};

export default Home;