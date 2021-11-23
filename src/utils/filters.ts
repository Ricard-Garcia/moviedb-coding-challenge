// Utils
import { MovieObject, ShowObject } from "./types";

// Routes
import { API } from "../constants/routes";

// Filter array
export function filterData(
  data: any,
  isMovies: boolean = true
): MovieObject[] | ShowObject[] {
  const originalArray: any = data.data.results;
  let filteredArray: any = [];

  originalArray.forEach((item: any) => {
    let itemObject: MovieObject | ShowObject;
    if (isMovies) {
      itemObject = {
        id: item.id,
        title: item.title,
        image: `${API.IMAGES}${item.backdrop_path}`,
        year: translateDate(item.release_date),
      };
    } else {
      itemObject = {
        id: item.id,
        name: item.name,
        image: `${API.IMAGES} ${item.backdrop_path}`,
        year: "2021",
      };
      console.log(item.first_air_date);
    }

    filteredArray.push(itemObject);
  });

  return filteredArray;
}

// Get year from date
function translateDate(date: string): string {
  const year: string = date.split("-")[0];
  return year;
}
