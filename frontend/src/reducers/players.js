import {
    GET_PLAYERS,
    DELETE_PLAYER,
    ADD_PLAYER,
    UPDATE_PLAYER,
    GET_SINGLE_PLAYER,
    ADD_ITEM,
    DELETE_ITEM,
} from "../actions/types.js";

const initialState = {
    players: [],
    selectedPlayer: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload,
            };
        case DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(
                    (player) => player.id !== action.payload
                ),
            };
        case ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload],
            };
        case GET_SINGLE_PLAYER:
            return {
                ...state,
                selectedPlayer: action.payload,
            };
        case UPDATE_PLAYER:
            return {
                ...state,
                selectedPlayer: action.payload,
            };
        case ADD_ITEM:
            return {
                ...state,
                selectedPlayer: {
                    ...state.selectedPlayer,
                    items: [...state.selectedPlayer.items, action.payload],
                },
            };
        case DELETE_ITEM:
            return {
                ...state,
                selectedPlayer: {
                    ...state.selectedPlayer,
                    items: state.selectedPlayer.items.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
}
