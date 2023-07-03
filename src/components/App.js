import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Trends from './Trends';
import RandomCard from './RandomCard';
import NotFound from './NotFound';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
	const [cardList, setCardList] = React.useState([]);
	const [isSubmittedQuery, setIsSubmittedQuery] = React.useState(false);
	const [isSubmittedTrends, setIsSubmittedTrends] = React.useState(false);

	const [pageCurrent, setPageCurrent] = React.useState(-1);
	const [pageOffset, setPageOffset] = React.useState(0);
	const [pageCount, setPageCount] = React.useState(0);
	const [cardsPerPage, setCardsPerPage] = React.useState(6);
	//массив со всеми номерами страниц
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

	function handlePaginationClick(event) {
		setPageOffset((event.selected * cardsPerPage) % pageNumbers.length);
		setIsSubmittedQuery(true);
		setIsSubmittedTrends(true);
		setPageCurrent(event.selected);
	}

	return (
		<div className="app">
			<Header
				setCardList={setCardList}
				setPageCount={setPageCount}
				setPageOffset={setPageOffset}
			/>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route
					path="/"
					element={
						<Main
							isSubmittedQuery={isSubmittedQuery}
							setIsSubmittedQuery={setIsSubmittedQuery}
							cardList={cardList}
							setCardList={setCardList}
							pageCount={pageCount}
							setPageCount={setPageCount}
							cardsPerPage={cardsPerPage}
							handlePaginationClick={handlePaginationClick}
							pageOffset={pageOffset}
							setPageOffset={setPageOffset}
							pageCurrent={pageCurrent}
							setPageCurrent={setPageCurrent}
						/>
					}
				/>
				<Route
					path="/trends"
					element={
						<Trends
							isSubmittedTrends={isSubmittedTrends}
							setIsSubmittedTrends={setIsSubmittedTrends}
							setIsSubmittedQuery={setIsSubmittedQuery}
							cardList={cardList}
							setCardList={setCardList}
							pageCount={pageCount}
							setPageCount={setPageCount}
							cardsPerPage={cardsPerPage}
							handlePaginationClick={handlePaginationClick}
							pageOffset={pageOffset}
						/>
					}
				/>
				<Route path="/random-gif" element={<RandomCard />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
