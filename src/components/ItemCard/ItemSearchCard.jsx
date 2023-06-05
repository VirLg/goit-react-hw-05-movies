import { Link, useLocation } from 'react-router-dom';

const ItemSearchCard = ({ arr }) => {
  const location = useLocation();
  return (
    <ul>
      {arr &&
        arr.map(({ original_title = 'null', id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ItemSearchCard;
