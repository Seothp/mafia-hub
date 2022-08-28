import { useStore } from "effector-react";

import { $players } from "../model";
import { AddPlayerButton } from "./AddPlayerButton";
import { PlayerCard } from "./PlayerCard";

export const PlayersList = () => {
  const players = useStore($players);

  if (!players?.length) {
    return null;
  }

  return (
    <div>
      <AddPlayerButton />
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>
            <PlayerCard player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
};
