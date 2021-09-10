import { HeaderLink } from "types";

type PaginationProps = {
  navigationLinks: HeaderLink;
  fetchData: (url: string) => Promise<void>;
};

const Pagination: React.FC<PaginationProps> = ({
  navigationLinks,
  fetchData,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default Pagination;
