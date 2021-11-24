// Utils
import {
  MovieObject,
  ShowObject,
  CastObject,
  DetailedMovie,
  DetailedShow,
} from "./types";

// Routes
import { API, ASSETS } from "../constants/routes";

// Filter movies array
export function filterMoviesArray(
  data: any,
  areSimilar: boolean = false
): MovieObject[] | ShowObject[] {
  // Iterate differently if array of movies/shows or of reviews
  const originalMoviesArray: any = areSimilar
    ? data.results
    : data.data.results;
  let filteredMoviesArray: any = [];

  originalMoviesArray.forEach((item: any) => {
    let itemObject: any;

    // Global
    itemObject = {
      id: item.id,
      image: `${API.IMAGES}${item.backdrop_path}`,
      vote: item.vote_average,
    };

    // Movies
    if (item.title) {
      itemObject = {
        ...itemObject,
        title: item.title,
        year: translateDate(item.release_date),
      };
    }
    // Shows
    else {
      itemObject = {
        ...itemObject,
        name: item.name,
        year: translateDate(item.first_air_date),
      };
    }

    if (item.backdrop_path !== null) {
      filteredMoviesArray.push(itemObject);
    }
  });

  return filteredMoviesArray;
}

// Filter cast array
export function filterCastArray(data: any): CastObject[] {
  const originalCastArray: any = data.cast;
  let filteredCastArray: CastObject[] = [];

  originalCastArray.slice(0, 9).forEach((cast: any) => {
    let castObject: any;
    // Create actor/actress object
    castObject = {
      character: cast.character,
      name: cast.name,
      image: `${API.IMAGES}${cast.profile_path}`,
    };

    // Add backdrop image if needed
    if (cast.profile_path === null) {
      castObject.image = ASSETS.CAST_BACKDROP;
    }

    filteredCastArray.push(castObject);
  });

  return filteredCastArray;
}

// Filter movie/show
export function filterItem(data: any): DetailedMovie | DetailedShow {
  let originalItem: any = data.data;
  let filteredItem: any;

  // Global
  filteredItem = {
    genres: getArrayNames(originalItem.genres),
    cast: filterCastArray(originalItem.credits),
    vote: originalItem.vote_average,
    image: `${API.IMAGES}${originalItem.backdrop_path}`,
    overview: originalItem.overview,
    similar: filterMoviesArray(originalItem.similar, true),
  };

  // Movie
  if (originalItem.title) {
    filteredItem = {
      ...filteredItem,
      title: originalItem.title,
      year: translateDate(originalItem.release_date),
    };
  }
  // Show
  else {
    filteredItem = {
      ...filteredItem,
      name: originalItem.name,
      year: translateDate(originalItem.first_air_date),
    };
  }

  // filteredItem = originalItem;
  return filteredItem;
}

// Get year from date
function translateDate(date: string): string {
  const year: string = date.split("-")[0];
  return year;
}

// Get names from array
function getArrayNames(array: any) {
  let arrayNames: string[] = [];

  array.forEach((item: any) => {
    arrayNames.push(item.name);
  });

  return arrayNames;
}
