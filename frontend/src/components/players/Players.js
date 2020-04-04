import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button, Card } from 'react-bootstrap';
import { getPlayers, deletePlayer, getSinglePlayer } from "../../actions/players";

export class Players extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
    getPlayers: PropTypes.func.isRequired,
    deletePlayer: PropTypes.func.isRequired,
    getSinglePlayer: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <Fragment>
        <Card>
            <Card.Header as="h4">Players</Card.Header>
            <Card.Body>
            <Table striped responsive>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th />
                <th />
                </tr>
            </thead>
            <tbody>
                {this.props.players.map(player => (
                    <tr key={player.id}>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>
                    <Button variant="danger"
                        onClick={this.props.deletePlayer.bind(this, player.id)}
                        >
                        {" "}
                        Delete
                    </Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={this.props.getSinglePlayer.bind(this, player)}
                      >
                        Select
                      </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.players,
  selectedPlayer: state.players.selectedPlayer
});

export default connect(
  mapStateToProps,
  { getPlayers, deletePlayer, getSinglePlayer }
)(Players);