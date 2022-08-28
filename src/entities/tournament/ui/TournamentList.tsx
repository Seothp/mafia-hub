import { useStore } from "effector-react";

import { $tournaments } from "../model";
import { AddTournamentButton } from "./AddTournamentButton";
import { TournamentCard } from "./TournamentCard";

export const TournamentsList = () => {
  const tournaments = useStore($tournaments);

  if (!tournaments?.length) {
    return null;
  }

  return (
    <div>
      <AddTournamentButton />
      <ul>
        {tournaments.map((tournament, idx) => (
          <li key={idx}>
            <TournamentCard tournament={tournament} />
          </li>
        ))}
      </ul>
    </div>
  );
};
