import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetBook } from "types";
import { API_GET_BOOKS } from "api/end-points";
import { CharacterList, Separator } from "components";

const BookPageWrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 73px;
    margin-bottom: 16px;
  }

  p {
    color: black;
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 32px;
  }
`;

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: book,
    loading,
    error,
  } = useFetch<GetBook>(`${API_GET_BOOKS}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!book) return <p>No datas</p>;

  const formatedReleaseDate = new Date(book.released).toLocaleDateString();

  return (
    <BookPageWrapper>
      <h2>Book title: {book.name}</h2>
      <p>
        Released on {formatedReleaseDate}
        {" - "}
        <span>{book.numberOfPages} pages</span>
      </p>
      <Separator />
      <h3>Character involved in this book :</h3>
      <CharacterList characters={book.characters} />
    </BookPageWrapper>
  );
};

export default BookPage;
