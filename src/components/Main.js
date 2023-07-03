import React from 'react';
import api from '../utils/api';
//import { QueryContext } from '../context/QueryContext';
import Search from './Search';
import CardList from './CardList';
import Pagination from './Pagination';
import InfoToolTip from './InfoToolTip';

function Main({
	isSubmittedQuery,
	setIsSubmittedQuery,
	cardList,
	setCardList,
	pageCount,
	setPageCount,
	cardsPerPage,
	handlePaginationClick,
	pageOffset,
	setPageOffset,
}) {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [isNoGifs, setIsNoGifs] = React.useState(false);

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
							title: card.title,
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
						setIsNoGifs(true);
					}
					setIsSubmittedQuery(false);
					//setSearchQuery('');
				});
		}
	}, [searchQuery, isSubmittedQuery]);

	function handleSubmitSearch(event) {
		event.preventDefault();
		setPageOffset(0);
		setIsSubmittedQuery(true);
	}

	return (
		<main className="main">
			<Search
				placeholder="Найдем GIF !!!"
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSubmitSearch={handleSubmitSearch}
			/>
			{isNoGifs && <InfoToolTip />}
			<CardList isSubmitted={isSubmittedQuery} cardList={cardList} />
			<Pagination
				pageCount={pageCount}
				handlePaginationClick={handlePaginationClick}
			/>
		</main>
	);
}

export default Main;
