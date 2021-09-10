import { useState } from "react";
import { getLastParamFromUrl } from "utils";
import { CharacterCard } from "components";

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
      <div>
        <button
          disabled={characterPaginationIndex.start === 0}
          onClick={previousPage}
        >
          {`<`}
        </button>
        <button
          disabled={characters.length < characterPaginationIndex.end}
          onClick={nextPage}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default CharactersList;
