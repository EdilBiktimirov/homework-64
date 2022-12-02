import React from 'react';

const Posts = () => {
  return (
    <div>
      
    </div>
  );
};

export default Posts;


// import React from 'react';
// import {useParams} from "react-router-dom";
// import {PostType} from "../../types";
// import Post from "./Post";
//
// interface Props {
//   posts: PostType[];
//   onBtnClick: (id: string) => void;
// }
//
// const Posts: React.FC<Props> = ({posts, onBtnClick})=> {
//
//   const {id} = useParams();
//
//   const post = posts.filter(item => item.id === id)[0];
//
//   console.log(post);
//
//   return (
//     <>
//       {posts.filter(elem => elem.id === id).map(elem => (
//         <Post key={elem.id} title={elem.title} text={elem.text} date={elem.date} onBtnClick={() => onBtnClick(elem.id)}/>
//       ))}
//
//       <div>
//         <p>{post.date}</p>
//         <p>{post.title}</p>
//         <p>{post.text}</p>
//         <button>Delete</button>
//         <button>Edit</button>
//       </div>
//     </>
//   );
// };
//
// export default Posts;