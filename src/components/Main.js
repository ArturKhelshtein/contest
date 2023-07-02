import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import api from '../utils/api';
//import { QueryContext } from '../context/QueryContext';
import Card from './Card';
import Search from './Search';
import RandomCard from './RandomCard';
import Trends from './Trends';

function Main() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [cardList, setCardList] = React.useState([]);
	const [isSubmitted, setIsSubmitted] = React.useState(null);

	const [pageCurrent, setPageCurrent] = React.useState(0);
	const [pageOffset, setPageOffset] = React.useState(0);
	const [pageCount, setPageCount] = React.useState([]);
	const [cardsPerPage, setCardsPerPage] = React.useState(3);
	//массив со всеми номерами страниц
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

	React.useEffect(() => {
		if (isSubmitted) {
			api
				.searchGif({
					query: searchQuery,
					limit: cardsPerPage,
					offset: pageOffset,
				})
				.then((response) => {
					setCardList(
						response.data.map((card) => ({
							id: card.id,
							src: card.images.downsized.url,
							alt: card.title,
							author: card.user,
						}))
					);
					if (!response.data) {
						setPageCount(
							Math.ceil(
								response.pagination.total_count / response.pagination.count
							)
						);
					}
					setIsSubmitted(false);
					//setSearchQuery('');
				});
		}
	}, [searchQuery, isSubmitted]);

	function handleSubmitSearch(event) {
		event.preventDefault();
		setIsSubmitted(true);
	}

	const handlePaginationClick = (event) => {
		setPageOffset((event.selected * cardsPerPage) % pageNumbers.length);
		setIsSubmitted(true);
		setPageCurrent(event.selected);
	};

	console.log(searchQuery);

	return (
		<main className="main">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Search
								placeholder="Найдем GIF !!!"
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery}
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
									onPageChange={handlePaginationClick}
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
						</>
					}
				></Route>
				<Route
					path="/trends"
					element={
						<>
							<Trends
								cardList={cardList}
								setCardList={setCardList}
								cardsPerPage={cardsPerPage}
								// pageCurrent={pageCurrent}
							/>
							{Boolean(cardList[1]) ? (
								<ReactPaginate
									breakLabel="..."
									nextLabel=">"
									onPageChange={handlePaginationClick}
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
						</>
					}
				/>
				<Route path="/random-gif" element={<RandomCard />} />
			</Routes>
		</main>
	);
}

export default Main;
