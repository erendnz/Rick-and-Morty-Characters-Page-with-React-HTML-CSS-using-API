import React from "react";
import CharacterItem from "../../components/Item";

const CharactersLayout = ({ characters }) => {
  return (
    <section className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} data={character} />
      ))}
    </section>
  );
};

export default CharactersLayout;



