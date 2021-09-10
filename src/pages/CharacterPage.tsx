import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetCharacter } from "types";
import { API_GET_CHARACTERS } from "api/end-points";

const CharacterPageWrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 73px;
    margin-bottom: 16px;
  }
`;

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

  return (
    <CharacterPageWrapper>
      <h2>
        {character.titles?.[0]} {character.name || "Unknown name"}
      </h2>
      {character.aliases.map((alias, index) => (
        <p key={index}>{alias}</p>
      ))}
    </CharacterPageWrapper>
  );
};

export default CharacterPage;
