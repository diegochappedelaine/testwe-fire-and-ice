import { useParams } from "react-router-dom";
import { useFetch } from "hooks";
import { GetBook } from "types";
import { API_GET_BOOK } from "api/end-points";

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: book,
    loading,
    error,
  } = useFetch<GetBook>(`${API_GET_BOOK}/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!book) return <p>No datas</p>;

  console.log(book);

  return <div>{book.name}</div>;
};

export default BookPage;
