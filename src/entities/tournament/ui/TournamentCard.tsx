import { Tournament } from "../lib";

type Props = {
  tournament: Tournament;
};

export const TournamentCard = ({ tournament }: Props) => {
  return <div>name: {tournament.name}</div>;
};
