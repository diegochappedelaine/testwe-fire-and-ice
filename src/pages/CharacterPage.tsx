import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetCharacter } from "types";
import { API_GET_CHARACTERS } from "api/end-points";
import { DisplayDataElement, Separator } from "components";
import { arrayToStringWithCommas } from "utils";

const CharacterPageWrapper = styled.div`
  margin-bottom: 80px;

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

  console.log(character);

  return (
    <CharacterPageWrapper>
      <h2>
        {character.titles?.[0]} {character.name || "Unknown name"}
      </h2>
      <Separator />

      <DisplayDataElement
        keyName="Aliases"
        value={
          character.aliases.length!!
            ? arrayToStringWithCommas(character.aliases)
            : ""
        }
      />
      <DisplayDataElement
        keyName="Titles"
        value={
          character.titles.length!!
            ? arrayToStringWithCommas(character.titles)
            : ""
        }
      />
      <DisplayDataElement keyName="Birth" value={character.born} />
      <DisplayDataElement keyName="Death" value={character.died} />
      <DisplayDataElement keyName="Culture" value={character.culture} />
      <Separator />
      <DisplayDataElement keyName="Father" value={character.father} />
      <DisplayDataElement keyName="Mother" value={character.mother} />
    </CharacterPageWrapper>
  );
};

export default CharacterPage;
