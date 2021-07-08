import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import { SearchResult } from "./components/SearchResult";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={`/home`}>
          <Home />
        </Route>
        <Route exact path={`/search/:query?`}>
          <SearchResult />
        </Route>
        <Route exact path={`/product/:id`}>
          <Product />
        </Route>
        <Route exat path={`/products`}>
          <Products/>
        </Route>
        <Route exact path="/">
          <Redirect to={`/home`} />
        </Route>
        <Route exact path="**">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
