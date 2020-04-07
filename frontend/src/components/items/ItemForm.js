import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/players";
import { Form, Button } from "react-bootstrap";

export class ItemForm extends Component {
    state = {
        name: "",
        description: "",
        count: 0,
    };

    static propTypes = {
        addItem: PropTypes.func.isRequired,
        selectedPlayer: PropTypes.object.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, description, count } = this.state;
        const player = this.props.selectedPlayer.id;
        const item = { name, description, count, player };
        this.props.addItem(item);
        this.setState({
            name: "",
            description: "",
            count: 0,
        });
    };

    render() {
        const { name, description, count } = this.state;
        return (
            <>
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
                        <Form.Control
                            type="textarea"
                            placeholder="Enter description"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="number"
                            placeholder="Enter item count"
                            name="count"
                            onChange={this.onChange}
                            value={count}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedPlayer: state.players.selectedPlayer,
});

export default connect(mapStateToProps, { addItem })(ItemForm);
