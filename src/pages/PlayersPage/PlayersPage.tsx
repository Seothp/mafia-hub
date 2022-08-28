import { PlayersList } from "src/entities/player";
import styles from "./PlayersPage.module.css";

export const PlayersPage = () => {
  return (
    <main className={styles.playersPage}>
      <PlayersList />
    </main>
  );
};
