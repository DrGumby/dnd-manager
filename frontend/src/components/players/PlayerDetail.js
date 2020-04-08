import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePlayer } from "../../actions/players";
import { Alert, Card, Table } from "react-bootstrap";
import AddSubField from "../util/AddSubField";

export class PlayerDetail extends Component {
    state = {
        addHp: 1,
        subHp: 1,
        addExp: 1,
        subExp: 1,
        addMoney: 1,
        subMoney: 1,
        addAmmo: 1,
        subAmmo: 1,
    };

    static propTypes = {
        selectedPlayer: PropTypes.object,
        updatePlayer: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { id, name, hp, exp, money, ammo } = this.props.selectedPlayer;
        const player = { id, name, hp, exp, money, ammo };
        switch (e.target.name) {
            case "onAddHp":
                player.hp += parseInt(this.state.addHp, 10);
                break;
            case "onSubHp":
                player.hp -= parseInt(this.state.subHp, 10);
                break;
            case "onAddExp":
                player.exp += parseInt(this.state.addExp, 10);
                break;
            case "onSubExp":
                player.exp -= parseInt(this.state.subExp, 10);
                break;
            case "onAddMoney":
                player.money += parseInt(this.state.addMoney, 10);
                break;
            case "onSubMoney":
                player.money -= parseInt(this.state.subMoney, 10);
                break;
            case "onAddAmmo":
                player.ammo += parseInt(this.state.addAmmo, 10);
                break;
            case "onSubAmmo":
                player.ammo -= parseInt(this.state.subAmmo, 10);
                break;
            default:
                break;
        }
        this.props.updatePlayer(player);
        this.setState({
            addHp: 1,
            subHp: 1,
            addExp: 1,
            subExp: 1,
            addMoney: 1,
            subMoney: 1,
            addAmmo: 1,
            subAmmo: 1,
        });
    };

    render() {
        if (!this.props.selectedPlayer) {
            return <Alert variant="info">No player selected</Alert>;
        } else {
            const player = this.props.selectedPlayer;
            const {
                addHp,
                subHp,
                addExp,
                subExp,
                addMoney,
                subMoney,
                addAmmo,
                subAmmo,
            } = this.state;
            return (
                <Card>
                    <Card.Header>Player details</Card.Header>
                    <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <th>HP</th>
                                    <td>
                                        <AddSubField
                                            onSubmit={this.onSubmit}
                                            onChange={this.onChange}
                                            value="Hp"
                                            add={addHp}
                                            sub={subHp}
                                            player={player.hp}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Experience</th>
                                    <td>
                                        <AddSubField
                                            onSubmit={this.onSubmit}
                                            onChange={this.onChange}
                                            value="Exp"
                                            add={addExp}
                                            sub={subExp}
                                            player={player.exp}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Money</th>
                                    <td>
                                        <AddSubField
                                            onSubmit={this.onSubmit}
                                            onChange={this.onChange}
                                            value="Money"
                                            add={addMoney}
                                            sub={subMoney}
                                            player={player.money}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Ammo</th>
                                    <td>
                                        <AddSubField
                                            onSubmit={this.onSubmit}
                                            onChange={this.onChange}
                                            value="Ammo"
                                            add={addAmmo}
                                            sub={subAmmo}
                                            player={player.ammo}
                                        />
                                    </td>
                                </tr>
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

export default connect(mapStateToProps, { updatePlayer })(PlayerDetail);
