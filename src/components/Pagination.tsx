import styled from "styled-components";
import { HeaderLink } from "types";
import { PaginationButton } from "components";

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
      <PaginationButton
        disabled={!navigationLinks.first}
        onClick={() => fetchData(navigationLinks.first.url)}
      >
        {"<<"}
      </PaginationButton>

      <PaginationButton
        disabled={!navigationLinks.prev}
        onClick={() => fetchData(navigationLinks.prev!.url)}
      >
        {"<"}
      </PaginationButton>

      <PaginationButton
        disabled={!navigationLinks.next}
        onClick={() => fetchData(navigationLinks.next!.url)}
      >
        {">"}
      </PaginationButton>

      <PaginationButton
        disabled={!navigationLinks.last}
        onClick={() => fetchData(navigationLinks.last.url)}
      >
        {">>"}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
