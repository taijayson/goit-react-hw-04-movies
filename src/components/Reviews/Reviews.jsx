import React, { Component } from "react";
import PropTypes from "prop-types";
import movieApi from "../../services/MovieApi";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    movieApi
      .fetchGetMovieReviews(this.props.id)
      .then((res) => this.setState({ reviews: res }))
      .catch((err) => console.log(err));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <ul className={styles.reviewsList}>
          {reviews.map((review) => (
            <li className={styles.reviewsItem} key={review.id}>
              <div className={styles.reviewsWrap}>
                <p className={styles.reviewsTitle}></p>
                <p className={styles.reviewsText}>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
