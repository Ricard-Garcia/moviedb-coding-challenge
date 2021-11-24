import React from "react";

// React components
export interface OnlyChildren {
  children: React.ReactChild | React.ReactChild[];
}

export interface MovieCardProps {
  item: any;
}

export interface CastCardProps {
  cast: CastObject;
}

export interface LayoutProps extends OnlyChildren {
  docTitle: string;
}

// Redux
export interface ReduxState {
  isLight: boolean;
}

export interface ProviderProps extends OnlyChildren {
  store: any;
}

// Api
interface ItemObject {
  id: number;
  year: string;
  image: string;
  vote: string;
}

export interface MovieObject extends ItemObject {
  title: string;
}

export interface ShowObject extends ItemObject {
  name: string;
}

export interface CastObject {
  character: string;
  name: string;
  image: string;
}

export interface DetailedObject {
  genres: string[];
  cast: CastObject[];
  vote: number;
  image: string;
  overview: string;
  similar: MovieObject[] | ShowObject[];
  year: string;
}

export interface DetailedMovie extends DetailedObject {
  title: string;
}
export interface DetailedShow extends DetailedObject {
  name: string;
}
