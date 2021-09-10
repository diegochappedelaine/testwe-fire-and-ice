import styled from "styled-components";
import { Link } from "components";
import { Book } from "types";
import { getLastParamFromUrl } from "utils";

const CardContainer = styled.div`
  padding: 16px;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  transition: background-color 0.2s ease-out;
  border-radius: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const bookId = getLastParamFromUrl(book.url);
  const formatedReleaseDate = new Date(book.released).toLocaleDateString();

  return (
    <Link href={`/book/${bookId}`}>
      <CardContainer>
        <h2>{book.name}</h2>
        <br />
        <br />
        <p>
          {formatedReleaseDate} - {book.numberOfPages} pages
        </p>
      </CardContainer>
    </Link>
  );
};

export default BookCard;
