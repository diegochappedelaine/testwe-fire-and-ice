import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return <div>Character Page</div>;
};

export default CharacterPage;
