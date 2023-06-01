import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RenderContext } from '../../pages/Movies';
import { useState, useEffect, useMemo } from 'react';

const ItemCard = () => {
  const { filmList } = useContext(RenderContext);
  const { movieId } = useContext(RenderContext);
  const [visible, setVisible] = useState('');

  // console.log(filmList[0].original_title.includes('a'));
  // const valueMemo = useMemo(() => {
  //   if (movieId) {
  //     filmList.filter(({ original_title }) => original_title.includes(movieId));
  //   }
  // }, [filmList, movieId]);
  const visibleFilm = filmList.filter(({ original_title = 'null' }) =>
    original_title.toLowerCase().includes(movieId.toLowerCase())
  );
  console.log(visibleFilm);
  return (
    <ul>
      {visibleFilm.map(({ original_title, id, title }) => {
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
