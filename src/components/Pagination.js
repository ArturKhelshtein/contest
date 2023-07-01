import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, pageCurrent, setPageCurrent, cardsPerPage }) {
	//получаем массив с перечислением от 1 до последней страницы
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

	const endOffset = pageCurrent + cardsPerPage;
	const currentItems = pageNumbers.slice(pageCurrent, endOffset);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * cardsPerPage) % pageNumbers.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setPageCurrent(newOffset);
	};

	return (
		// <ol className="main">
		// 	{currentItems &&
		// 		currentItems.map((item) => (
		// 			<li className="pagination__element">
		// 				<a className="pagination__link">{item}</a>
		// 			</li>
		// 		))}
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
				className="pagination"
				previousClassName="pagination__element"
				pageClassName="pagination__element"
				breakClassName="pagination__element"
				nextClassName="pagination__element"
				previousLinkClassName="pagination__link"
				pageLinkClassName="pagination__link"
				breakLinkClassName="pagination__link"
				nextLinkClassName="pagination__link"
				activeClassName="pagination__element_selected"
			/>
		// </ol>
	);
}
export default Pagination;

// import { Link } from 'react-router-dom';

// function Pagination({ pageCount, pageCurrent, setPageCurrent }) {
// 	//получаем массив с перечислением от 1 до последней страницы
// 	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

// 	function pagePrevious() {
// 		if (pageCurrent !== pageCount) setPageCurrent(pageCurrent + 1);
// 	}

// 	function pageNext() {
// 		if (pageCurrent !== 1) setPageCurrent(pageCurrent - 1);
// 	}

// 	return (
// 		<div className="pagination">
// 			<div className="pagination__element">
// 				<Link className="pagination__link" onClick={pagePrevious}>
// 					&lt;
// 				</Link>
// 			</div>
// 			<ol className="pagination__numbers-container">
// 				{pageNumbers.map((pageNumber) => (
// 					<li
// 						key={pageNumber}
// 						className={`pagination__element ${
// 							pageCurrent === pageNumber ? 'pagination__element_selected' : ''
// 						}`}
// 					>
// 						<Link className="pagination__link" onClick={() => setPageCurrent}>
// 							{pageNumber}
// 						</Link>
// 					</li>
// 				))}
// 			</ol>
// 			<div className="pagination__element">
// 				<Link className="pagination__link" onClick={pageNext}>
// 					&gt;
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

// export default Pagination;
