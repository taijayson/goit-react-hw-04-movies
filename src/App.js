import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import mainRoutes from "./routes/mainRoutes";
import "./App.css";

import Header from "./components/Header/Header";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

const App = () => (
  <>
    <Header />
    <Switch>
      <Suspense fallback={<h2>...loading</h2>}>
        <Route exact path={mainRoutes.homepage} component={HomePage}></Route>
        <Route exact path={mainRoutes.movies} component={MoviesPage}></Route>
        <Route
          path={mainRoutes.movieDetails}
          component={MovieDetailsPage}
        ></Route>
      </Suspense>
    </Switch>
  </>
);

export default App;
