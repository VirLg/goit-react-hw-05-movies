import { Link } from 'react-router-dom';

const ItemCard = ({ arr }) => {
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
