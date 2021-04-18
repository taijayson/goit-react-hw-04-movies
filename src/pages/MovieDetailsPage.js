import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import movieApi from "../services/MovieApi";
import styles from "./MovieDetailsPage.module.css";

const Credits = lazy(() => import("../components/Credits/Credits"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: null,
    overview: null,
    genres: [],
    release_data: null,
    poster_path: null,
  };

  componentDidMount() {
    movieApi
      .fetchGetMovieDetails(this.props.match.params.movieId)
      .then((res) => {
        this.setState({ ...res });
      });
  }

  goBack = () => {
    const { history, location } = this.props;
    history.push(location.state);
    // console.log(location);
  };

  render() {
    const { genres, overview, poster_path, title } = this.state;
    // const { location } = this.props;
    return (
      <>
        <div className={styles.buttonwrap}>
          <button
            className={styles.backbutton}
            type="button"
            onClick={this.goBack}
          >
            Back
          </button>
        </div>
        <section className={styles.section}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={title}
            />
            <div className={styles.cardtext}>
              <p className={styles.title}>{title}</p>
              <p className={styles.overwiew}>{overview}</p>
              <div className={styles.genresWrap}>
                {genres.map((genre) => (
                  <p className={styles.genres} key={genre.id}>
                    {genre.name}
                  </p>
                ))}
              </div>
              <ul className={styles.aboutList}>
                <li className={styles.aboutItem}>
                  <NavLink
                    className={styles.aboutLink}
                    to={{
                      pathname: `${this.props.match.url}/credits`,
                      state: this.props.location.state,
                    }}
                  >
                    Credits
                  </NavLink>
                </li>
                <li className={styles.aboutItem}>
                  <NavLink
                    className={styles.aboutLink}
                    to={{
                      pathname: `${this.props.match.url}/reviews`,
                      state: this.props.location.state,
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Suspense>
            <Switch>
              <Route
                path={`${this.props.match.url}/credits`}
                render={(props) => (
                  <Credits {...props} id={this.props.match.params.movieId} />
                )}
              />
              <Route
                path={`${this.props.match.url}/reviews`}
                render={(props) => (
                  <Reviews {...props} id={this.props.match.params.movieId} />
                )}
              />
            </Switch>
          </Suspense>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
