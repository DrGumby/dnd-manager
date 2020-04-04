import axios from 'axios';

import { GET_PLAYERS, DELETE_PLAYER } from './types';


// GET PLAYERS
export const getPlayers = () => dispatch => {
    axios
      .get("/players/")
      .then(res => {
        dispatch({
          type: GET_PLAYERS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // DELETE PLAYERS
export const deletePlayer = id => dispatch => {
    axios
      .delete(`/players/${id}/`)
      .then(res => {
        dispatch({
          type: DELETE_PLAYER,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };
  
  // ADD PLAYERS
  export const addPlayer = lead => dispatch => {
    axios
      .post("/players/", lead)
      .then(res => {
        dispatch({
          type: ADD_PLAYER,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };