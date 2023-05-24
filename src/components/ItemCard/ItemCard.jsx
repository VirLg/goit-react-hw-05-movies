import { useContext } from 'react';
import { RenderContext } from 'components/App';

const ItemCard = () => {
  const result = useContext(RenderContext);
  console.log(result);
  return (
    <ul>
      {result &&
        result.map(({ original_title, id }) => (
          <li key={id}>
            <p>{original_title}</p>
          </li>
        ))}
    </ul>
  );
};

export default ItemCard;
