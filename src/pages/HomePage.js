import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import movieApi from "../services/MovieApi";
import styles from "./HomePages.module.css";

class HomePage extends Component {
  state = {
    getTrendind: [],
  };

  componentDidMount() {
    movieApi
      .fetchGetTrending()
      .then((res) => this.setState({ getTrendind: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.state.getTrendind.map(({ id, title, poster_path }) => (
            <li className={styles.item} key={id}>
              <NavLink
                className={styles.link}
                to={{
                  pathname: `${this.props.match.url}movies/${id}`,
                  //   prevPosition: location.pathname,
                  state: this.props.location,
                }}
              >
                <img
                  className={styles.img}
                  src={
                    poster_path &&
                    `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={title}
                ></img>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
