import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Trends({ cardList, setCardList, cardsPerPage, pageCurrent }) {
	const [isSubmitted, setIsSubmitted] = React.useState(null);

	React.useEffect(() => {
		api
			.trendGif({ limit: cardsPerPage, offset: pageCurrent })
			.then((response) => {
				setCardList(
					response.data.map((card) => ({
						id: card.id,
						src: card.images.downsized.url,
						alt: card.title,
					}))
				);
				setIsSubmitted(false);
			});
	}, [pageCurrent]);

	return (
		<section className="card-list">
			{isSubmitted ? (
				<div>Загружаю...</div>
			) : (
				cardList.map((card) => <Card key={card.id} {...card} />)
			)}
		</section>
	);
}

export default Trends;
