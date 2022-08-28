import { createEvent, createStore } from "effector";
import { Player } from "../lib";

const initialPlayers: Player[] = [
  { nickname: "Молына" },
  { nickname: "Мухожук" },
  { nickname: "Nikoeno" },
];

export const $players = createStore<Player[]>(initialPlayers);
export const addPlayer = createEvent<Player>();

$players.on(addPlayer, (players, newPlayer) => [...players, newPlayer]);
