import React, { Component } from "react";
import PropTypes from "prop-types";
import movieApi from "../../services/MovieApi";
import styles from "./Credits.module.css";

class Credits extends Component {
  state = {
    credits: [],
  };

  componentDidMount() {
    movieApi
      .fetchGetMovieCredits(this.props.id)
      .then((res) => this.setState({ credits: res }))
      .catch((err) => console.log(err));
  }

  render() {
    const { credits } = this.state;

    return (
      <>
        <ul className={styles.creditsList}>
          {credits.map((credit) => (
            <li className={styles.creditsItem} key={credit.id}>
              <div className={styles.creditsWrap}>
                <img
                  className={styles.creditsImg}
                  src={
                    credit.profile_path &&
                    `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                  }
                  alt={credit.name}
                />
              </div>
              {credit.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Credits.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Credits;
