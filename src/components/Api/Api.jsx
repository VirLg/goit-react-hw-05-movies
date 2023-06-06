const FetchCard = async props => {
  const data = await fetch(
    `https://api.themoviedb.org/3/${props}?api_key=d0d7894e72847cf4bdccbd92204adc61&language=en-US`
  );
  //   'https:api.themoviedb.org/3/movie/movie_id/reviews?api_key=d0d7894e72847cf4bdccbd92204adc61&language=en-US&page=1'
  // );
  return data;
};

export default FetchCard;
