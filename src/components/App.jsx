import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>Gallery</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
