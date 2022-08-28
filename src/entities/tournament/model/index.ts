import { createEvent, createStore } from "effector";
import { Tournament } from "../lib";

// TODO: replace to nano-id
let id = 4;
const getId = () => String(id++);

const initialTournaments: Tournament[] = [
  { name: "summer major", id: "1" },
  { name: "summer minor", id: "2" },
  { name: "mafprofi", id: "3" },
];

export const $tournaments = createStore<Tournament[]>(initialTournaments);
export const addTournament = createEvent<Omit<Tournament, "id">>();

$tournaments.on(addTournament, (tournaments, newTournament) => [
  ...tournaments,
  { ...newTournament, id: getId() },
]);
