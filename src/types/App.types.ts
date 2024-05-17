import { ReactNode } from "react";
export interface MovieType {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  results: Array<MovieType>;
}
export interface TrailerType {
  id: string;
  key: string;
  type: string;
}
export interface MyComponentProps {
  children: ReactNode;
}
export interface UserType {
  uid: string;
  email: string | null;
  displayName: string | null;
}
