import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { MainPage } from "./pages/MainPage";
import { PlayersPage } from "./pages/PlayersPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "players",
    element: <PlayersPage />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, element, index }) => (
            <Route index={index} path={path} element={element} key={path} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
