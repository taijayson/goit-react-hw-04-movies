import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "3bbee9ec0dfd4460578d1cc3423bbafa";

const fetchGetTrending = async () => {
  try {
    const res = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

const fetchSearchMovies = async () => {
  try {
    const res = await axios.get(
      `${URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
    );
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

const fetchGetMovieDetails = async (movieId) => {
  try {
    const res = await axios.get(
      `${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchGetMovieCredits = async () => {
  try {
    const res = await axios.get(
      `${URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return res.data.cast;
  } catch (err) {
    console.log(err);
  }
};

const fetchGetMovieReviews = async () => {
  try {
    const res = await axios.get(
      `${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return res.data.cast;
  } catch (err) {
    console.log(err);
  }
};

const movieApi = {
  fetchGetTrending,
  fetchSearchMovies,
  fetchGetMovieDetails,
  fetchGetMovieCredits,
  fetchGetMovieReviews,
};

export default movieApi;
