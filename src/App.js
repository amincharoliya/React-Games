import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom' 

import Header from './components/header';
import Footer from './components/footer';

import GamelListing from './components/game-listing';
import MindGame from './components/mind-game';

import './css/app.scss';

class App extends Component {
  render() {
    return (
      <>
      <div className="main">
        <Router history={hashHistory}>
          <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={GamelListing} />
            <Route path="/mind-game" component={MindGame} />
          </Switch>
          
          </div>
      </Router>
    </div>
    <Footer />
    </>
    );
  }
}

export default App;
