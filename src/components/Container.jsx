import List from "./List";
import PropTypes from "prop-types";

export default function Container({ title, musics, setFavorites }) {
  return (
    <section className={title.split(" ")[0].toLowerCase()}>
      <h2>{title}</h2>
      <div className="musics">
        {musics.map((music, index) => (
          <List key={index} song={music} setFavorites={setFavorites} />
        ))}
      </div>
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  musics: PropTypes.array,
  setFavorites: PropTypes.func,
};
