import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./layout/Header";
import Dashboard from "./players/Dashboard";
import Game from "./game/Game";

import { Provider } from 'react-redux';
import store from '../store';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <>
                        <Header />
                        <Route path="/game">
                            <Container>
                                <Game />
                            </Container>
                        </Route>
                        <Route path="/players">
                            <Container>
                                <Dashboard />
                            </Container>
                        </Route>
                    </>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));