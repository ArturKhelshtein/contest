import React from 'react';
import api from '../utils/api';
import CardList from './CardList';

function Trends({
	cardList,
	setCardList,
	cardsPerPage,
	pageOffset,
	setPageCount,
}) {
	const [isSubmittedTrends, setIsSubmittedTrends] = React.useState(null);

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
	}, [pageOffset]);

	return <CardList isSubmitted={isSubmittedTrends} cardList={cardList} />;
}

export default Trends;
