import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Card, Table } from 'react-bootstrap';

export class PlayerDetail extends Component {

    static propTypes = {
        selectedPlayer: PropTypes.object,
    };

    render() {
        if (!this.props.selectedPlayer) {
            return (
                <Alert variant="info">
                    No player selected
                </Alert>
            );
        } else {
            const player = this.props.selectedPlayer;
            return (
                <Card>
                    <Card.Header>Player details</Card.Header>
                    <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <th>HP</th>
                                    <td>{player.hp}</td>
                                </tr>
                                <tr>
                                    <th>Experience</th>
                                    <td>{player.exp}</td>
                                </tr>
                                <tr>
                                    <th>Money</th>
                                    <td>{player.money}</td>
                                </tr>
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

export default connect(mapStateToProps)(PlayerDetail);
