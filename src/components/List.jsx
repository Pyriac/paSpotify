import { useState } from "react";
import PropTypes from "prop-types";

export default function List({ song, setFavorites }) {
  const { name, artist, time, imgSrc, isFavorite } = song;
  const [favorite, setFavorite] = useState(isFavorite);

  function handleClick() {
    // ... Set favorites
    setFavorites((oldFavorites) => {
      // Créer une copie du tableau
      // Créer un nouveau tableau : [  ]
      // ...oldFavorites
      const newFavorites = [...oldFavorites];
      // resultat [ "Expresso", "Bonjour" ]
      // Trouver l'index de l'élément de notre chanson
      const index = newFavorites.findIndex(
        (favorite) => favorite.name === name
      );

      if (index === -1) {
        // Si il est pas dans le tableau
        newFavorites.push(song);
      } else {
        // Si il est dans le tableau (il a une position)
        newFavorites.splice(index, 1);
      }

      return newFavorites;
    });
    setFavorite(!favorite);
  }

  return (
    <div className="music">
      <img src={imgSrc} alt={artist} />
      <main>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </main>
      <p className="time">{time}</p>
      <button onClick={handleClick}>{favorite ? "💚" : "🖤"}</button>
    </div>
  );
}
List.propTypes = {
  setFavorites: PropTypes.func,
  song: PropTypes.shape({
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    artist: PropTypes.string,
    time: PropTypes.string,
    isFavorite: PropTypes.bool,
  }),
};

// const objectY ={
//     clé1: valeur1,
//     clé2: valeur2,
//     cléX: valeurX
// }
// const [favorite, setFavorite] = useState(false);

// console.log(favorite); // false;

// setFavorite(true);

// console.log(favorite); // true;
