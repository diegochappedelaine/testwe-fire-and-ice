import styled from "styled-components";
import { useEffect } from "react";
import { useFetchLazy } from "hooks";
import { GetBooks } from "types";
import { API_GET_BOOKS } from "api/end-points";
import { Pagination, BookCard } from "components";

const BooksContainer = styled.ol`
  li {
    margin-top: 16px;
  }
`;

const HomePage = () => {
  const {
    error,
    loading,
    data: books,
    navigationLinks,
    fetchData,
  } = useFetchLazy<GetBooks>();

  useEffect(() => {
    fetchData(`${API_GET_BOOKS}?page=1&pageSize=10`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!books) return <p>No datas</p>;

  return (
    <div>
      <h1>Game of Thrones</h1>
      <BooksContainer>
        {books.map((book, index) => (
          <li key={index}>
            <BookCard book={book} />
          </li>
        ))}
      </BooksContainer>
      {navigationLinks && (
        <Pagination navigationLinks={navigationLinks} fetchData={fetchData} />
      )}
    </div>
  );
};

export default HomePage;
