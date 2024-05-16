import axios from "axios";

import { charactersURL } from "../constants/apiUrl";

export async function getCharacters() {
  const response = await axios.get(charactersURL);
  return response.data.results;
}
