import React from 'react'
import { ListGroup, Collapse } from 'react-bootstrap';
import ItemForm from './ItemForm';

export default function AddItem() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <ListGroup>
                <ListGroup.Item
                    active
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-row"
                    aria-expanded={open}
                >
                    Add a new item
                </ListGroup.Item>
                <Collapse in={open}>
                    <ListGroup.Item
                        id="collapse-row"
                    >
                        <ItemForm />
                    </ListGroup.Item>
                </Collapse>
            </ListGroup>
        </>
    )
}
