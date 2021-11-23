// Filter array of movies/shows (used in Home)
export function filterData(data: any, isMovies: boolean = true): any {
  const originalArray: any = data.data.results;
  let filteredArray: any = [];

  originalArray.forEach((item: any) => {
    let itemObject: any;
    if (isMovies) {
      itemObject = {
        id: item.id,
        title: item.title,
        year: translateDate(item.release_date),
      };
    } else {
      itemObject = {
        id: item.id,
        name: item.name,
        year: translateDate(item.first_air_date),
      };
    }

    // Add item to filtered array
    filteredArray.push(itemObject);
  });

  return filteredArray;
}

function translateDate(date: string): string {
  const year = date.split("-")[0];
  return year;
}
