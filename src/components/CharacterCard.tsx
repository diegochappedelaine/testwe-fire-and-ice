import styled from "styled-components";
import { useFetch } from "hooks";
import { Link } from "components";
import { GetCharacter } from "types";
import { API_GET_CHARACTERS } from "api/end-points";

const CardContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid black;
  margin-bottom: 16px;
  height: 64px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  transition: background-color 0.2s ease-out;
  border-radius: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CharacterCard: React.FC<{ id: string }> = ({ id }) => {
  const {
    data: character,
    loading,
    error,
  } = useFetch<GetCharacter>(`${API_GET_CHARACTERS}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!character) return <p>No datas</p>;

  return (
    <Link href={`/character/${id}`}>
      <CardContainer>
        <p>
          {character.titles?.[0]} {character.name}
        </p>

        <br />
        {/* {!!character.aliases.length && (
          <>
            {" ("}
            {character.aliases.map((alias, index) => (
              <p>
                {alias}
                {index < character.aliases.length - 1 && ", "}
              </p>
            ))}
            {")"}
          </>
        )} */}
      </CardContainer>
    </Link>
  );
};

export default CharacterCard;
