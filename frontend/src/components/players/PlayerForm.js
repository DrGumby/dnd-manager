import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPlayer } from "../../actions/players";
import { Card, Button, Form } from "react-bootstrap";

export class PlayerForm extends Component {
    state = {
        name: "",
        hp: 0,
        exp: 0,
        money: 0,
        ammo: 0,
    };

    static propTypes = {
        addPlayer: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, hp, exp, money, ammo } = this.state;
        const player = { name, hp, exp, money, ammo };
        this.props.addPlayer(player);
        this.setState({
            name: "",
            hp: 0,
            exp: 0,
            money: 0,
            ammo: 0,
        });
    };

    render() {
        const { name, hp, exp, money, ammo } = this.state;
        return (
            <>
                <Card>
                    <Card.Header as="h4">Add a new player</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name="name"
                                    onChange={this.onChange}
                                    value={name}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>HP</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter HP"
                                    name="hp"
                                    onChange={this.onChange}
                                    value={hp}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Experience</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter experience"
                                    name="exp"
                                    onChange={this.onChange}
                                    value={exp}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Money</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter money"
                                    name="money"
                                    onChange={this.onChange}
                                    value={money}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ammo</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter ammo"
                                    name="ammo"
                                    onChange={this.onChange}
                                    value={ammo}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default connect(null, { addPlayer })(PlayerForm);
