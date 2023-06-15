const BASE_URL = 'api.themoviedb.org/3';
const API_KEY = 'd0d7894e72847cf4bdccbd92204adc61';
const fetchCard = async props => {
  try {
    const data = await fetch(
      `https://${BASE_URL}/${props}?api_key=${API_KEY}&language=en-US`
    );
    const arr = await data.json();
    return arr;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSearchCard = async props => {
  try {
    const data = await fetch(
      `https://${BASE_URL}/search/movie?query=${props}&api_key=${API_KEY}&include_adult=false&page=1`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchCard;
