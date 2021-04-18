import React, { Component } from "react";
import queryString from "query-string";
import MoviesList from "../components/MoviesList/MoviesList";
import Searchbar from "../components/Searchbar/Searchbar";
import movieApi from "../services/MovieApi";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    // console.log(this.props);
    query &&
      movieApi.fetchSearchMovies(query).then((res) => {
        this.setState({ movies: res });
      });
  }

  searchMovies = (query) => {
    const { history } = this.props;
    this.setState({ query });
    movieApi.fetchSearchMovies(query).then((res) => {
      this.setState({ movies: res });
    });
    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    // console.log(this.props);
    return (
      <div className={styles.wrap}>
        <Searchbar onSubmit={this.searchMovies}></Searchbar>
        {this.state.movies.length > 0 && (
          <MoviesList movies={movies} location={location}></MoviesList>
        )}
      </div>
    );
  }
}

export default MoviesPage;
