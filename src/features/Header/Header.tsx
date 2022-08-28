import { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  console.log("rerender");
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li className={styles.linkItem}>
              <NavLink to="/players" className={styles.link}>
                Players
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
