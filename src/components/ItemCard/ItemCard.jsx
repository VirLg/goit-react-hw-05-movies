import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RenderContext } from '../../pages/HomePage';

const ItemCard = ({ arr }) => {
  // console.log(props);
  // const { filmList = [] } = useContext(RenderContext);

  // const { movieId } = useContext(RenderContext);

  // const visibleFilm = filmList.filter(({ original_title = 'null' }) =>
  //   original_title.toLowerCase().includes('' && movieId.toLowerCase())
  // );

  return (
    <ul>
      {arr &&
        arr.map(({ original_title = 'null', id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ItemCard;
