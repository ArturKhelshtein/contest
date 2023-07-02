import { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Trends({ cardList, setCardList }) {
	useEffect(() => {
		api.trendGif().then((data) => {
			setCardList(
				data.data.map((card) => ({
					id: card.id,
					src: card.images.downsized.url,
					alt: card.title,
					title: card.title,
				}))
			);
		});
	}, []);

	return (
		<main className="main">
			<section className="card-list">
				{cardList.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</section>
		</main>
	);
}

export default Trends;