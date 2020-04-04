import React from 'react';
import { Card, Table, Modal, Button, Collapse } from 'react-bootstrap';

import { NewItem } from './NewItem';

export function Inventory(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const { player } = props;
    return (
        <>
        <Card border="primary" style={{ padding:10 }}>
            <Card.Header as="h4">Items</Card.Header>
            <Table responsive striped hover>
                <tbody>
                    {player.items.map((item) => 
                        <TRow
                            key={item.id}
                            name={item.name}
                            count={item.count}
                            description={item.description}
                        /> 
                    )} 
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                New Item
            </Button>
        </Card>

        <NewItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            onNewItem={props.onNewItem}
        />
        </>
    )
}

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
