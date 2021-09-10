import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetCharacter } from "types";
import { API_GET_CHARACTERS } from "api/end-points";
import { Link } from "components";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: character,
    loading,
    error,
  } = useFetch<GetCharacter>(`${API_GET_CHARACTERS}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!character) return <p>No datas</p>;

  console.log(character);

  return (
    <div>
      {character.name}
      {character.aliases.map((alias, index) => (
        <p key={index}>{alias}</p>
      ))}
      {character.books.map((book, index) => (
        <Link key={index} href={book}>
          Livres présent
        </Link>
      ))}
    </div>
  );
};

export default CharacterPage;
