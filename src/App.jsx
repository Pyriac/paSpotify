import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import { musics } from "./items/musics";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <nav>
        <h1>🎺 paSpotify</h1>
      </nav>
      <main>
        <Container
          title="Music 🎶"
          musics={musics}
          setFavorites={setFavorites}
        />
        <Container
          title="Favorites 💚"
          musics={favorites}
          setFavorites={setFavorites}
        />
      </main>
    </>
  );
}

export default App;
