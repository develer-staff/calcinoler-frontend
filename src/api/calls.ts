import { Player } from "../modules/players/types";

const PLAYER_API_URL = process.env.REACT_APP_API_BASE_URL + "/players";

export const getPlayers = async (): Promise<Player[]> => {
  const response = await fetch(PLAYER_API_URL);
  const result = await response.json();
  if (!response.ok) {
    throw Error(result.errors);
  }

  return result.data;
};

export const getPlayer = async (id: string): Promise<Player> => {
  const response = await fetch(`${PLAYER_API_URL}/${id}/`);
  const result = await response.json();
  if (!response.ok) {
    throw Error(result.errors);
  }

  return result.data;
};

export const setDishonors = async (
  id: string,
  dishonors: number
): Promise<Player> => {
  const response = await fetch(`${PLAYER_API_URL}/${id}/`, {
    method: "PATCH",
    body: JSON.stringify({ dishonors })
  });
  const result = await response.json();
  if (!response.ok) {
    throw Error(result.errors);
  }

  return result.data;
};