const { REACT_APP_API_ROUTE } = process.env;

// Public
export const PAGES = {
  HOME: "/",
  DETAIL: "/detail",
};

// API
export const API = {
  MAIN: REACT_APP_API_ROUTE,
  IMAGES: "https://image.tmdb.org/t/p/original",
  GENRES: "genres",
  SIMILAR: "similar",
  CREDITS: "credits",
  KEYWORDS: "keywords",
  REVIEWS: "reviews",
};

// Outside pages
export const OUTSIDE = {
  REPOSITORY: "https://github.com/Ricard-Garcia/moviedb-coding-challenge",
};
