import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Card, Table, Collapse } from 'react-bootstrap';

export class Inventory extends Component {

    static propTypes = {
        selectedPlayer: PropTypes.object
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
                        <Table responsive hover striped>
                            <tbody>
                                {items.map((item) =>
                                    <TRow
                                        key={item.id}
                                        name={item.name}
                                        count={item.count}
                                        description={item.description}
                                    />
                                )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            );
        }
    }

}

const mapStateToProps = state => ({
    selectedPlayer: state.players.selectedPlayer
});

function TRow(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
        <tr 
            onClick={() => setOpen(!open)}
            aria-controls="collapse-row"
            aria-expanded={open}
        >
            <td>
                {props.name}
            </td>
            <td>
                {props.count}
            </td>
        </tr>
        <Collapse in={open}>
            <tr id="collapse-row">
                <td colSpan="2">
                    {props.description}
                </td>
            </tr>
        </Collapse>
        </>
    )
}

export default connect(mapStateToProps)(Inventory);
