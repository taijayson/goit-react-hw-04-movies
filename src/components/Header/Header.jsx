import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink to={mainRoutes.homepage} className={styles.navListLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink to={mainRoutes.movies} className={styles.navListLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
