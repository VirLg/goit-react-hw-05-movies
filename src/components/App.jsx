import { useState, useEffect } from 'react';
export const App = () => {
  const [filmList, setFilmList] = useState([]);
  const BASE_URL = 'https://api.themoviedb.org/3/movie/550?';
  const API_KEY = 'd0d7894e72847cf4bdccbd92204adc61';
  const ENDPOINT = 'trending/all/{time_window}';

  const getFilm = () => {
    return fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=d0d7894e72847cf4bdccbd92204adc61'
    ).then(resp => resp.json());
  };

  getFilm().then(data => {
    // setFilmList(data);
    console.log(data);
  });
  // useEffect(() => {
  //   console.log(filmList);
  // }, []);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
