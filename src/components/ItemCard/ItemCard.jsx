import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RenderContext } from '../../pages/Movies';

const ItemCard = () => {
  const result = useContext(RenderContext);

  return (
    <ul>
      {result &&
        result.map(({ original_title, id, title }) => {
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
