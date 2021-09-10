import styled from "styled-components";
import { useEffect } from "react";
import { useFetchLazy } from "hooks";
import { GetBooks } from "types";
import { API_GET_BOOKS } from "api/end-points";
import { Pagination, BookCard, Loading } from "components";

const HomePageWrapper = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 73px;
    margin-bottom: 16px;
  }

  h3 {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
`;

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

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;
  if (!books) return <p>No datas</p>;

  return (
    <HomePageWrapper>
      <h2>Game of Thrones - books</h2>
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
    </HomePageWrapper>
  );
};

export default HomePage;
