import styled from "styled-components";
import { Link } from "react-router-dom";
import { Book } from "types";
import { getLastParamFromUrl } from "utils";

const ALink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const CardContainer = styled.div`
  padding: 16px;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
`;

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const bookId = getLastParamFromUrl(book.url);
  const formatedReleaseDate = new Date(book.released).toLocaleDateString();

  return (
    <ALink to={`/book/${bookId}`}>
      <CardContainer>
        {book.name} - {formatedReleaseDate}
      </CardContainer>
    </ALink>
  );
};

export default BookCard;
