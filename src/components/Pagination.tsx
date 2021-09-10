import styled from "styled-components";
import { HeaderLink } from "types";

const PaginationWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

type PaginationProps = {
  navigationLinks: HeaderLink;
  fetchData: (url: string) => Promise<void>;
};

const Pagination: React.FC<PaginationProps> = ({
  navigationLinks,
  fetchData,
}) => {
  return (
    <PaginationWrapper>
      <button
        disabled={!navigationLinks.first}
        onClick={() => fetchData(navigationLinks.first.url)}
      >
        {"<<"}
      </button>

      <button
        disabled={!navigationLinks.prev}
        onClick={() => fetchData(navigationLinks.prev!.url)}
      >
        {"<"}
      </button>

      <button
        disabled={!navigationLinks.next}
        onClick={() => fetchData(navigationLinks.next!.url)}
      >
        {">"}
      </button>

      <button
        disabled={!navigationLinks.last}
        onClick={() => fetchData(navigationLinks.last.url)}
      >
        {">>"}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
