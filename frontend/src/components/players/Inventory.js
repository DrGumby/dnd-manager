import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert, Card, Table, Collapse, Button } from "react-bootstrap";
import AddItem from "../items/AddItem";
import { deleteItem } from "../../actions/players";
import TRow from "../util/TRow";
export class Inventory extends Component {
    static propTypes = {
        selectedPlayer: PropTypes.object,
        deleteItem: PropTypes.func.isRequired,
    };

    render() {
        if (!this.props.selectedPlayer) {
            return (
                <Alert variant="info">
                    Cannot display inventory, select a player first
                </Alert>
            );
        } else {
            const items = this.props.selectedPlayer.items;
            return (
                <Card>
                    <Card.Header>Inventory</Card.Header>
                    <Card.Body>
                        <AddItem />
                        <Table responsive hover striped>
                            <tbody>
                                {items.map((item) => (
                                    <TRow
                                        key={item.id}
                                        item={item}
                                        onDeleteItem={this.props.deleteItem.bind(
                                            this,
                                            item.id
                                        )}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    selectedPlayer: state.players.selectedPlayer,
});

export default connect(mapStateToProps, { deleteItem })(Inventory);
