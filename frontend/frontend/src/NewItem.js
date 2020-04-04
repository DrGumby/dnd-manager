import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export class NewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            count: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    } 

    handleSubmit(event) {
        this.props.onNewItem(this.state);
        this.props.onHide();
    }

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name"placeholder="Item name" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" placeholder="Item description" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="count">
                        <Form.Label>Count</Form.Label>
                        <Form.Control type="number" name="count" laceholder="Item count" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}