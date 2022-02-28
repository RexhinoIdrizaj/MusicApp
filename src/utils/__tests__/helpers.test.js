import { getYearsList, addRemoveGenre } from '../helpers';

describe('Utils helpers', () => {
  it('Get list of years', () => {
    const currentYear = new Date().getFullYear() + 1;
    const minYear = 2015;
    const value = currentYear - minYear;

    const result = getYearsList(minYear);

    expect(result.length).toBe(value);
    expect(result).toContain('2017');
    expect(result).toContain('2015');
  });

  it('should add genre', () => {
    const genreIds = [1, 2, 3];
    const genreIdToAdd = 4;

    const newGenres = addRemoveGenre(genreIds, genreIdToAdd);
    const expected = [1, 2, 3, 4];

    expect(newGenres.length).toBe(4);
    expect(newGenres).toEqual(expected);
    expect(newGenres).toContain(4);
  });
});
