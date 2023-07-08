import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAddition } from 'helpers/api';
import * as S from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();

  const url = 'https://image.tmdb.org/t/p/w500';
  const [cast, setCast] = useState([]);
  useEffect(() => {
    // const params = `movie/${movieId}/credits`;
    async function fetch() {
      try {
        const { cast } = await getAddition(movieId, 'credits');
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);
  return (
    <section>
      {cast.length === 0 && <p>We don`t have any cast for this movie</p>}
      <S.CastList>
        {cast.map(actor => {
          return (
            <S.Actor key={actor.id}>
              <S.Img
                src={actor.profile_path ? `${url}${actor.profile_path}` : ''}
                alt={actor.name}
                width="150"
              />
              <S.Name>{actor.name}</S.Name>
              <p>Character: {actor.character}</p>
            </S.Actor>
          );
        })}
      </S.CastList>
    </section>
  );
};

export default Cast;
