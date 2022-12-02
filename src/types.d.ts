export interface PostType {
  title: string;
  text: string;
  date: string;
  id: string;
}

export interface PostsType {
  [id: string]: PostType;
}

export interface InfoText {
  text: string;
  id: string;
}

export interface ApiText {
  [id: string]: InfoText;
}