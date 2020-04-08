import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePlayer } from "../../actions/players";
import {
    Alert,
    Card,
    Table,
    Button,
    InputGroup,
    FormControl,
} from "react-bootstrap";

export class PlayerDetail extends Component {
    state = {
        addHp: 0,
        subHp: 0,
        addExp: 0,
        subExp: 0,
        addMoney: 0,
        subMoney: 0,
        addAmmo: 0,
        subAmmo: 0,
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
            addHp: 0,
            subHp: 0,
            addExp: 0,
            subExp: 0,
            addMoney: 0,
            subMoney: 0,
            addAmmo: 0,
            subAmmo: 0,
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

/**
 *
 * @param {*} props Properties
 *
 * onSubmit Function callback to be called on button click
 * onChange Function callback to be called on field change
 * value Value to add or subtract
 * sub Value of left (subract) field
 * add Value of right (add) field
 * player Value to show in the centre field
 */
function AddSubField(props) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <Button
                    variant="outline-secondary"
                    onClick={props.onSubmit}
                    name={"onSub" + props.value}
                >
                    -
                </Button>
            </InputGroup.Prepend>
            <FormControl
                aria-describedby="basic-addon1"
                type="number"
                min="1"
                name={"sub" + props.value}
                onChange={props.onChange}
                value={props.sub}
            />
            <FormControl readOnly disabled placeholder={props.player} />
            <FormControl
                aria-describedby="basic-addon1"
                type="number"
                min="1"
                name={"add" + props.value}
                onChange={props.onChange}
                value={props.add}
            />
            <InputGroup.Append>
                <Button
                    variant="outline-secondary"
                    onClick={props.onSubmit}
                    name={"onAdd" + props.value}
                >
                    +
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default connect(mapStateToProps, { updatePlayer })(PlayerDetail);
