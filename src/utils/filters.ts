// Utils
import { MovieObject, ShowObject } from "./types";

// Routes
import { API } from "../constants/routes";

// Filter array
export function filterArray(data: any): MovieObject[] | ShowObject[] {
  const originalArray: any = data.data.results;
  let filteredArray: any = [];

  originalArray.forEach((item: any) => {
    let itemObject: MovieObject | ShowObject;
    // Array of movies
    if (item.title) {
      itemObject = {
        id: item.id,
        title: item.title,
        image: `${API.IMAGES}${item.backdrop_path}`,
        year: translateDate(item.release_date),
      };
    }
    // Array of shows
    else {
      itemObject = {
        id: item.id,
        name: item.name,
        image: `${API.IMAGES} ${item.backdrop_path}`,
        year: "2021",
      };
      // console.log(item.first_air_date);
    }

    filteredArray.push(itemObject);
  });

  return filteredArray;
}

// Filter movie/show
export function filterItem(data: any): MovieObject | ShowObject {
  let filteredItem: MovieObject | ShowObject;

  filteredItem = data.data;
  return filteredItem;
}

// Get year from date
function translateDate(date: string): string {
  const year: string = date.split("-")[0];
  return year;
}
