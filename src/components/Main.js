import React from 'react';
import ReactPaginate from 'react-paginate';
import { QueryContext } from '../context/QueryContext';
import Card from './Card';
import Search from './Search';

function Main({
	handleChangeImput,
	handleSubmitSearch,
	cardList,
	isSubmitted,
	setIsSubmitted,

	pageCount,
	pageCurrent,
	setPageCurrent,
	cardsPerPage,
}) {
	//массив со всеми номерами страниц
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);
	const searchQuery = React.useContext(QueryContext);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * cardsPerPage) % pageNumbers.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);

		setIsSubmitted(true);
		setPageCurrent(event.selected);
	};

	return (
		<main className="main">
			<Search
				placeholder="Найдем GIF !!!"
				searchQuery={searchQuery}
				handleChangeImput={handleChangeImput}
				handleSubmitSearch={handleSubmitSearch}
			/>
			<section className="card-list">
				{isSubmitted ? (
					<div>Загружаю...</div>
				) : (
					cardList.map((card) => <Card key={card.id} {...card} />)
				)}
			</section>
			{Boolean(cardList[1]) ? (
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
			) : (
				''
			)}
		</main>
	);
}

export default Main;
