import React, { Component } from "react";
import { Collapse, Button } from "react-bootstrap";
import AddSubField from "./AddSubField";

export default function TRow(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <tr
                onClick={() => setOpen(!open)}
                aria-controls="collapse-row"
                aria-expanded={open}
            >
                <td>{props.item.name}</td>
                <td>
                    <AddSubField
                        onSubmit={props.onSubmit}
                        onChange={props.onChange}
                        value={props.value}
                        sub={props.sub}
                        add={props.add}
                        player={props.item.count}
                    />
                </td>
                <td>
                    <Button variant="warning" onClick={props.onDeleteItem}>
                        Delete
                    </Button>
                </td>
            </tr>
            <Collapse in={open}>
                <tr id="collapse-row">
                    <td colSpan="2">{props.item.description}</td>
                </tr>
            </Collapse>
        </>
    );
}
