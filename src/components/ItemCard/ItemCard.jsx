import { Link, useLocation } from 'react-router-dom';

const ItemCard = ({ arr }) => {
  const location = useLocation();
  console.log(arr);
  return (
    <ul>
      {arr &&
        arr.map(({ original_title = 'null', id, title, overview }) => (
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
