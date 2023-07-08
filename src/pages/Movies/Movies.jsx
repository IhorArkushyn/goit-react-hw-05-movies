import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieByQuery } from 'helpers/api';
import { MdSearch } from 'react-icons/md';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMovieisList] = useState([]);
  const [searchText, setInputText] = useState('');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    setInputText(query);
    // console.log(query);

    async function fetch() {
      try {
        const { results } = await getMovieByQuery(query);
        // console.log(results);
        setMovieisList(results);

        if (results.length === 0) {
          toast('Sorry, but nothing found');

          return;
        }
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   // eslint-disable-next-line react-hooks/exhaustive-deps
      //   query = '';
      // }
    }
    fetch();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    // let form = event.target;
    let searchQuery = event.target.elements.movies.value;
    setSearchParams({ query: searchQuery });
    // searchQuery = '';
    // console.log(form);
  };

  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="movies"
          onChange={handleInputChange}
          value={searchText}
          placeholder="search movie"
        />
        <button type="submit">
          <MdSearch />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            // hideProgressBar={false}
            // newestOnTop={false}
            closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
          />
        </button>
      </form>
      <ul>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Movies;
