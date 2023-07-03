import React from 'react';
import api from '../utils/api';
import CardList from './CardList';
import Pagination from './Pagination';
import QuantityCardPerPage from './QuantityCardPerPage';

function Trends({
	isSubmittedTrends,
	setIsSubmittedTrends,
	setIsSubmittedQuery,
	cardList,
	setCardList,
	pageCount,
	setPageCount,
	cardsPerPage,
	handlePaginationClick,
	pageOffset,
	handleChangeCardPerPage,
}) {
	React.useEffect(() => {
		setIsSubmittedQuery(false);
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
	}, [isSubmittedTrends, cardsPerPage]);

	return (
		<main className="main">
			<QuantityCardPerPage handleChangeCardPerPage={handleChangeCardPerPage} />
			<CardList isSubmitted={isSubmittedTrends} cardList={cardList} />
			<Pagination
				pageCount={pageCount}
				handlePaginationClick={handlePaginationClick}
			/>
		</main>
	);
}

export default Trends;
