export interface PostType {
  title: string;
  text: string;
  date: string;
  id: string;
}

export interface PostsType {
  [id: string]: PostType;
}