import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Trends({ cardList, setCardList, cardsPerPage, pageCurrent }) {

  const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		api.trendGif({ limit: cardsPerPage, offset: pageCurrent }).then((data) => {
			setCardList(
				data.data.map((card) => ({
					id: card.id,
					src: card.images.downsized.url,
					alt: card.title,
				}))
			);
      setIsLoading(false);
		});
	}, [pageCurrent]);

	return (
		<section className="card-list">
			{ isLoading ? (<div>Загружаю...</div>)
      : (cardList.map((card) => (
				  <Card key={card.id} {...card} />
			  )))
      }
		</section>
	);
}

export default Trends;
