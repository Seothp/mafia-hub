import { Player } from "../lib";

type Props = {
  player: Player;
};

export const PlayerCard = ({ player }: Props) => {
  return <div>nickname: {player.nickname}</div>;
};
