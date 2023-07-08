import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const API_KEY = '2df474d1194b369ae7531f50a435506c';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg',
//   },
// };

// async function fetchTrendingMovies() {
//   const response = await axios.get('/trending/all/day?language=en-US', options);
//   console.log(response.data.results);
//   return response.data.results;
// }
// fetchTrendingMovies();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',

    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGY0NzRkMTE5NGIzNjlhZTc1MzFmNTBhNDM1NTA2YyIsInN1YiI6IjY0OTc0MzE0ZWI3OWMyMDBjNTZkNmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xcsy2n0hTAWYEvaWVUI6qzFMwM0PuPy5o3c_EsP1eMg',
    // Authorization: 'Bearer 2df474d1194b369ae7531f50a435506c',
  },
};
export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );

  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`, options);
  return data;
};

export const getAddition = async (id, params) => {
  const { data } = await axios.get(
    `movie/${id}/${params}?language=en-US`,
    options
  );
  return data;
};

// async function fetchAddition(id, param) {
//   const response = await axios.get(
//     `movie/${id}/${param}?language=en-US`,
//     options
//   );
//   return response.data;
// }

// curl --request GET \
// --url '?trending/all/day?language=en-US' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGY0NzRkMTE5NGIzNjlhZTc1MzFmNTBhNDM1NTA2YyIsInN1YiI6IjY0OTc0MzE0ZWI3OWMyMDBjNTZkNmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xcsy2n0hTAWYEvaWVUI6qzFMwM0PuPy5o3c_EsP1eMg' \
// --header 'accept: application/json'
// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiIyZGY0NzRkMTE5NGIzNjlhZTc1MzFmNTBhNDM1NTA2YyIsInN1YiI6IjY0OTc0MzE0ZWI3OWMyMDBjNTZkNmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .Xcsy2n0hTAWYEvaWVUI6qzFMwM0PuPy5o3c_EsP1eMg;

// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '35667188-6e941f88d5c46bed3c473b87c';
// const perPage = 12;

// export const getImages = async (query, page) => {
//   const response = await axios.get(
//     `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
//   );
//   return response.data;
// };

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '35667188-6e941f88d5c46bed3c473b87c';

// async function fetchPictures(query, page, perPage) {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: perPage,
//     page: page,
//   });
//   const response = await axios.get(`?${params}`);
//   return response;
// }
