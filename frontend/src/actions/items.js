import axios from 'axios';

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => dispatch => {
    axios.get("/items/")
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const deleteItem = id => dispatch => {
    axios.delete(`/items/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addItem = item => dispatch => {
    axios.post("/items/", item)
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};