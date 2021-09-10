import { useState } from "react";
import { getLastParamFromUrl } from "utils";
import { CharacterCard, PaginationButton } from "components";

type CharactersListProps = {
  characters: string[];
};

const ELEMENTS_PER_PAGE = 10;

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  const [characterPaginationIndex, setCharacterPaginationIndex] = useState({
    start: 0,
    end: ELEMENTS_PER_PAGE,
  });

  const nextPage = () =>
    setCharacterPaginationIndex({
      start: characterPaginationIndex.start + ELEMENTS_PER_PAGE,
      end: characterPaginationIndex.end + ELEMENTS_PER_PAGE,
    });

  const previousPage = () =>
    setCharacterPaginationIndex({
      start: characterPaginationIndex.start - ELEMENTS_PER_PAGE,
      end: characterPaginationIndex.end - ELEMENTS_PER_PAGE,
    });

  const slicedCharacterListForPagination = characters.slice(
    characterPaginationIndex.start,
    characterPaginationIndex.end
  );
  return (
    <div>
      <ol>
        {slicedCharacterListForPagination?.map((character, index) => {
          const characterId = getLastParamFromUrl(character);
          return <CharacterCard key={index} id={characterId} />;
        })}
      </ol>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PaginationButton
          disabled={characterPaginationIndex.start === 0}
          onClick={previousPage}
        >
          {`<`}
        </PaginationButton>
        <PaginationButton
          disabled={characters.length < characterPaginationIndex.end}
          onClick={nextPage}
        >
          {`>`}
        </PaginationButton>
      </div>
    </div>
  );
};

export default CharactersList;
