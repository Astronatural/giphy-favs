import React, { Component } from 'react';
import GifDisplay from '../GifDisplay/GifDisplay';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <div >
      <Router>
        <h1>Giphy Search!</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={GifDisplay} />
          <Route path="/favorites" component={Favorites} />
        </div>
      </Router>
    </div>
  );
}

export default App;
