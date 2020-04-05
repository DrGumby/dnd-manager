import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/items';
import { Card } from 'react-bootstrap';


export class ItemForm extends Component {

    state = {
        name: "",
        description: "",
        count: 0
    }


    static propTypes = {
        addItem: PropTypes.func.isRequired
    }



    render() {
        const { name, description, count } = this.state;
        return (
            <>
                <Card>
                    <Card.Header>Add a new item to selected player</Card.Header>
                </Card>
            </>
        )
    }
}

export default ItemForm
