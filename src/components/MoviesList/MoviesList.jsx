import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import mainRoutes from "../../routes/mainRoutes";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, location }) => {
  //   console.log(movies);
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li className={styles.item} key={movie.id}>
          <NavLink
            className={styles.link}
            to={{
              pathname: `${mainRoutes.movies}/${movie.id}`,
              state: location,
            }}
          >
            <img
              className={styles.img}
              src={
                movie.poster_path &&
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              alt={movie.title}
            ></img>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default withRouter(MoviesList);
