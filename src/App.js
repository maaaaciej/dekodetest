import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import NotFound from "./pages/NotFound/notfound.component";
import PostContainer from "./pages/PostContainer/postcontainer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/teft/circles/purple-circles" component={PostContainer} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
