import { useEffect } from "react";
import { useFetchLazy } from "hooks";
import { GetBooks } from "types";
import { API_GET_BOOKS } from "api/end-points";
import { Pagination } from "components";

const HomePage = () => {
  const { error, loading, data, navigationLinks, fetchData } =
    useFetchLazy<GetBooks>();

  useEffect(() => {
    fetchData(`${API_GET_BOOKS}?page=1&pageSize=10`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No datas</p>;

  console.log(navigationLinks);

  return (
    <div>
      HomePage
      <ol>
        {data.map((book, index) => (
          <p key={index}>{book.name}</p>
        ))}
      </ol>
      {navigationLinks && (
        <Pagination navigationLinks={navigationLinks} fetchData={fetchData} />
      )}
    </div>
  );
};

export default HomePage;
