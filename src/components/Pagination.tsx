interface PaginationType {
  page: number;
  totalPage: number;
  setPage: (prev: number) => void;
}

const Pagination = ({ page, totalPage, setPage }: PaginationType) => {
  return (
    <div style={{ borderTop: "2px solid red", padding: "10px" }}>
      <b>Total Page: {totalPage}</b>
      <div>
        {Array(totalPage)
          .fill(0)
          .map((_, i) => {
            return (
              <button
                style={{ padding: "6px", margin: "4px" }}
                onClick={() => setPage(i + 1)}
                key={i + 1}
                disabled={page == i + 1}>
                {i + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
