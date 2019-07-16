import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_ERROR,
  SET_DISHONORS,
  SET_DISHONORS_SUCCESS,
  SET_DISHONORS_ERROR
} from "./constants";
import {
  Player,
  FetchPlayersAction,
  FetchPlayersSuccessAction,
  FetchPlayersErrorAction,
  SetDishonorsAction,
  SetDishonorsSuccessAction,
  SetDishonorsErrorAction
} from "./types";

export function fetchPlayers(): FetchPlayersAction {
  return {
    type: FETCH_PLAYERS
  };
}

export function fetchPlayersSuccess(
  players: Player[]
): FetchPlayersSuccessAction {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players
  };
}

export function fetchPlayersError(errors: string[]): FetchPlayersErrorAction {
  return {
    type: FETCH_PLAYERS_ERROR,
    payload: errors
  };
}

export function setDishonors(
  player_id: string,
  dishonors: number
): SetDishonorsAction {
  return {
    type: SET_DISHONORS,
    payload: {
      player_id,
      dishonors
    }
  };
}

export function setDishonorsSuccess(player: Player): SetDishonorsSuccessAction {
  return {
    type: SET_DISHONORS_SUCCESS,
    payload: player
  };
}

export function setDishonorsError(errors: string[]): SetDishonorsErrorAction {
  return {
    type: SET_DISHONORS_ERROR,
    payload: errors
  };
}
