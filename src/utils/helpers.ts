export const getYearsList = () => {
  let maxYear = new Date().getFullYear();
  let minYear = 1975;
  let yearList = [];
  while (maxYear >= minYear) {
    yearList.push(maxYear.toString());
    maxYear--;
  }
  return yearList;
};
