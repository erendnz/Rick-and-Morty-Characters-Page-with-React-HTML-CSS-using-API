import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  return id;
};

export default Character;
