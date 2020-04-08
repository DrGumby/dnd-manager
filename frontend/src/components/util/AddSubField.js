import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
export default function AddSubField(props) {
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
