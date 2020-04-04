import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from "./layout/Header";
import Dashboard from "./players/Dashboard";

import { Provider } from 'react-redux';
import store from '../store';
import { Container } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <>
                <Header />
                <Container>
                    <Dashboard />
                </Container>
                </>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));