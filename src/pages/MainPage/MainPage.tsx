import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <h1>Привет!</h1>
      <p>Это приложение для мафия-плееров</p>
      <p>
        Тут ты можешь добавлять игроков, создавать турниры и турнирные таблицы
      </p>
      <p>А так же создавать столы и шафлить игроков для турниров</p>
    </main>
  );
};
