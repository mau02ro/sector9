import React from "react";
// tamplate
import Layout from "./components/templates/Layout";
//  router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Catalogue from "./pages/Catalogue";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";

// Styles
import "./styles/global.css";
import "./styles/colors.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Categories */}
            <Route exact path="/categories/:category" component={Categories} />
            <Route
              exact
              path="/catalogue/:product/:category"
              component={Catalogue}
            />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
