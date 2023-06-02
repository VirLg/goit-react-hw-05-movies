import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { RenderContext } from '../../pages/HomePage';
import { RenderContext } from '../../pages/Movies';
const ItemCard = () => {
  const { filmList } = useContext(RenderContext);
  const { movieId } = useContext(RenderContext);

  const visibleFilm = filmList.filter(({ original_title = 'null' }) =>
    original_title.toLowerCase().includes(movieId.toLowerCase())
  );

  return (
    <ul>
      {visibleFilm.map(({ original_title = 'null', id, title }) => {
        return (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemCard;
