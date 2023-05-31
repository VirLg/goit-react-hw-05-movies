import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage';
const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
export default App;
