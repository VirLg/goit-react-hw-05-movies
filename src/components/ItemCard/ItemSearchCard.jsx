import { Link } from 'react-router-dom';

const ItemSearchCard = ({ arr }) => {
  return (
    <ul>
      {arr &&
        arr.map(({ original_title = 'null', id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ItemSearchCard;
