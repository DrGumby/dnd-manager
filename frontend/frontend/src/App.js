import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import { Header } from './Header';
import { Game } from './Game';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <div>
        <Header />
      </div>
      <Route path="/game">    
        <Game id="1" />
      </Route>
      <Route path="/players">
        <Container>
          Hello World
        </Container>
      </Route>
    </div>
    </Router>
  );
}

export default App;
