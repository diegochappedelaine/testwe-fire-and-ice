import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Character Page</div>;
};

export default CharacterPage;
