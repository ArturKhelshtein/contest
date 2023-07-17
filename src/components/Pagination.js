import ReactPaginate from 'react-paginate';

function Pagination({
  pageCount,
  handlePaginationClick,
  pageCurrent,
  isLight,
}) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePaginationClick}
      pageRangeDisplayed={5}
      renderOnZeroPageCount={null}
      className={`pagination ${isLight ? `pagination_theme_light` : ``}`}
      previousClassName="pagination__element"
      pageClassName="pagination__element"
      breakClassName="pagination__element"
      nextClassName="pagination__element"
      previousLinkClassName="pagination__link"
      pageLinkClassName="pagination__link"
      breakLinkClassName="pagination__link"
      nextLinkClassName="pagination__link"
      activeClassName="pagination__element_selected"
      forcePage={pageCurrent}
    />
  );
}

export default Pagination;
