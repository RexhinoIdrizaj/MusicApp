export const getYearsList = (minYear = 1975) => {
  let maxYear = new Date().getFullYear();
  const yearList = [];
  while (maxYear >= minYear) {
    yearList.push(maxYear.toString());
    maxYear--;
  }
  return yearList;
};

export const addRemoveGenre = (selectedGenresId: number[], genreId: number) => {
  const currentGenresId = [...selectedGenresId];
  const genreExists = currentGenresId.find((el) => el === genreId);
  const newGenres = genreExists
    ? currentGenresId.filter((el) => el !== genreId)
    : [...selectedGenresId, genreId];
  return newGenres;
};
