import styled from "styled-components";
import { useFetch } from "hooks";
import { Link } from "components";
import { GetCharacter } from "types";
import { API_GET_CHARACTER } from "api/end-points";

const CardContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid black;
  margin-bottom: 16px;
`;

const CharacterCard: React.FC<{ id: string }> = ({ id }) => {
  const {
    data: character,
    loading,
    error,
  } = useFetch<GetCharacter>(`${API_GET_CHARACTER}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!character) return <p>No datas</p>;

  return (
    <Link href={`/character/${id}`}>
      <CardContainer>
        {character.name}
        {character.aliases.map((alias) => (
          <p>{alias}</p>
        ))}
      </CardContainer>
    </Link>
  );
};

export default CharacterCard;
