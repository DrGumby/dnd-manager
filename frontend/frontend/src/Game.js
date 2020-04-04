import React from 'react';

import { Container, Row, Col, Alert } from 'react-bootstrap';

import { PlayerDetail } from './PlayerDetail';
import { Inventory } from './Inventory';

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: {
                name: '',
                hp: 0,
                exp: 0,
                money: 0,
                items: []
            },
            isLoaded: true,
            error: null
        };
        this.handleNewItem = this.handleNewItem.bind(this);
    }
    
    componentDidMount() {
        fetch(`http://localhost:8080/players/${this.props.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        player: result
                    });
                })
                .catch((error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    handleNewItem(data) {
        const reqData = {
            name: data.name,
            description: data.description,
            count: data.count,
            player: this.state.player.id
        };
        fetch('http://localhost:8080/items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(reqData)
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true
            });
        })
        .catch((error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }

    render () {
        if (this.state.error) {
            return (
                <Alert variant="danger">Error: {this.state.error.message}</Alert>
            )
        } else {
        return (
            <Container>
            <Row>
                <Col>
                    <PlayerDetail player={this.state.player} />
                </Col>
                <Col>
                    <Inventory player={this.state.player} onNewItem={this.handleNewItem}/>
                </Col>
            </Row>
            </Container>
        )}
    }
}