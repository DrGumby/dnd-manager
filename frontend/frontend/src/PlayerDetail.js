import React from 'react';
import { Card, Table } from 'react-bootstrap';

export function PlayerDetail(props) {
    const { player } = props;
    return (
        <Card border="primary" style={{ padding:10 }}>
            <Card.Header as="h4">{player.name}</Card.Header>
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
        </Card>
    )
}