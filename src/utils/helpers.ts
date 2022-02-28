export const getYearsList = () => {
  let maxYear = new Date().getFullYear();
  const minYear = 1975;
  const yearList = [];
  while (maxYear >= minYear) {
    yearList.push(maxYear.toString());
    maxYear--;
  }
  return yearList;
};
