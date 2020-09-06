// {
//     type: 'INCREASE_COUNT',
//     movies: []
// }

// {
//     type: 'DECREASE_COUNT'
// }

// actions types
export const ADD_MOVIES = 'ADD_MOVIES';

// action creators
export function addMovies (movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
