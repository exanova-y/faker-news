
export interface Story {
  id: number;
  title: string;
  url: string;
  score: number;
  time: number;
  by: string;
  descendants: number;
  kids?: number[];
}

export interface Comment {
  id: number;
  text: string;
  time: number;
  by: string;
  kids?: number[];
  parent: number;
  deleted?: boolean;
}

export interface User {
  id: string;
  karma: number;
  created: number;
  about?: string;
}
