import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetBook } from "types";
import { API_GET_BOOKS } from "api/end-points";
import { CharacterList } from "components";

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
    <div>
      <h2>{book.name}</h2>
      <br />
      <br />
      <p>
        {formatedReleaseDate} - {book.numberOfPages} pages
      </p>{" "}
      <CharacterList characters={book.characters} />
    </div>
  );
};

export default BookPage;
