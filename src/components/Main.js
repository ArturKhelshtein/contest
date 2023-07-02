import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import api from '../utils/api';
//import { QueryContext } from '../context/QueryContext';
import Search from './Search';
import CardList from './CardList';
import RandomCard from './RandomCard';
import Trends from './Trends';
import Pagination from './Pagination';

function Main({ cardList, setCardList }) {
	const location = useLocation();

	const [searchQuery, setSearchQuery] = React.useState('');
	const [isSubmittedQuery, setIsSubmittedQuery] = React.useState(false);
	const [isSubmittedTrends, setIsSubmittedTrends] = React.useState(false);

	// const [pageCurrent, setPageCurrent] = React.useState(0);
	const [pageOffset, setPageOffset] = React.useState(0);
	const [pageCount, setPageCount] = React.useState(0);
	const [cardsPerPage, setCardsPerPage] = React.useState(3);
	//массив со всеми номерами страниц
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

	React.useEffect(() => {
		if (isSubmittedQuery) {
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
					if (response.pagination.total_count !== 0) {
						setPageCount(
							Math.ceil(
								response.pagination.total_count / response.pagination.count
							)
						);
					} else {
						setSearchQuery('');
					}
					setIsSubmittedQuery(false);
					//setSearchQuery('');
				});
		}
	}, [searchQuery, isSubmittedQuery]);

	React.useEffect(() => {
		api
			.trendGif({ limit: cardsPerPage, offset: pageOffset })
			.then((response) => {
				setCardList(
					response.data.map((card) => ({
						id: card.id,
						src: card.images.downsized.url,
						alt: card.title,
					}))
				);
				if (response.pagination.total_count !== 0) {
					setPageCount(
						Math.ceil(
							response.pagination.total_count / response.pagination.count
						)
					);
				}
				setIsSubmittedTrends(false);
			});
	}, [isSubmittedTrends]);

	console.log(isSubmittedTrends);

	function handleSubmitSearch(event) {
		event.preventDefault();
		setPageOffset(0);
		setIsSubmittedQuery(true);
	}

	function handlePaginationClick(event) {
		setPageOffset((event.selected * cardsPerPage) % pageNumbers.length);
		setIsSubmittedQuery(true);
		setIsSubmittedTrends(true);
		// setPageCurrent(event.selected);
	}

	return (
		<main className="main">
			{location.pathname === '/' && (
				<Search
					placeholder="Найдем GIF !!!"
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					handleSubmitSearch={handleSubmitSearch}
				/>
			)}
			{(location.pathname === '/' || location.pathname === '/trends') && (
				<CardList
					isSubmitted={
						location.pathname === '/'
							? isSubmittedQuery
							: location.pathname === '/trends'
							? isSubmittedTrends
							: ''
					}
					cardList={cardList}
				/>
			)}
			{(location.pathname === '/' || location.pathname === '/trends') && (
				<Pagination
					pageCount={pageCount}
					handlePaginationClick={handlePaginationClick}
				/>
			)}
			<Routes>
				<Route path="/random-gif" element={<RandomCard />} />
			</Routes>
		</main>
	);
}

export default Main;
