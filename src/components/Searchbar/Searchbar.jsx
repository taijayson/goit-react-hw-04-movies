import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    search: "",
  };

  searchChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({
      search: value,
    });
  };

  searchSubmit = (event) => {
    event.preventDefault();

    const { search } = this.state;

    if (search.trim() === "") {
      return alert("Enter correct value");
    }

    this.props.onSubmit(search);

    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.searchSubmit}>
          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies so ez"
            value={this.state.search}
            onChange={this.searchChange}
          />
          <button type="submit" className={styles.searchFormButton}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
