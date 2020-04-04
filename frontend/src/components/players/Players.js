import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from 'react-bootstrap';
import { getPlayers, deletePlayer } from "../../actions/players";

export class Players extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
    getPlayers: PropTypes.func.isRequired,
    deletePlayer: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <Fragment>
        <h2>Players</h2>
        <Table striped responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.players
});

export default connect(
  mapStateToProps,
  { getPlayers, deletePlayer }
)(Players);