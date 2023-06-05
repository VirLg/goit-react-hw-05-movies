import { Link, useLocation } from 'react-router-dom';

const ItemCard = ({ arr }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {arr &&
        arr.map(({ original_title = 'null', id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ItemCard;
