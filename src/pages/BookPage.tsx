import { useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Book Page</div>;
};

export default BookPage;
