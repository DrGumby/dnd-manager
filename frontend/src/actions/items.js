import axios from "axios";

import { GET_ITEMS, DELETE_ITEM } from "./types";

export const getItems = () => (dispatch) => {
    axios
        .get("/items/")
        .then((res) => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

