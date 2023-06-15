const BASE_URL = 'api.themoviedb.org/3';
const API_KEY = 'd0d7894e72847cf4bdccbd92204adc61';
const fetchCard = async props => {
  const data = await fetch(
    `https://${BASE_URL}/${props}?api_key=${API_KEY}&language=en-US`
  );
  const arr = await data.json();

  // .catch(error => setError(error.message));
  //   'https:api.themoviedb.org/3/movie/movie_id/reviews?api_key=d0d7894e72847cf4bdccbd92204adc61&language=en-US&page=1'
  // );
  return arr;
};

export const fetchSearchCard = async props => {
  const data = await fetch(
    `https://${BASE_URL}/search/movie?query=${props}&api_key=${API_KEY}&include_adult=false&page=1`
  );
  return data;
};

export default fetchCard;
