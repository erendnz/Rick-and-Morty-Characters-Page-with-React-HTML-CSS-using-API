import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharactersLayout from "../../layouts/Characters";
import { getCharacters } from "../../services/character";

const CharactersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      console.log(response);
      setCharacters(response);
    });
    
    const name = searchParams.get("name");
    console.log(name);
  }, []);

  return <CharactersLayout characters={characters} />;
};

export default CharactersPage;
