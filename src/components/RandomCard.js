import React from 'react';
import Card from './Card';
import api from '../utils/api';

function RandomCard() {

	const [randomCard, setRandomCard] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

	function handleNewRandomGif() {
		api.randomGif()
      .then((card) => {
        setRandomCard({
          id: card.data.id,
          src: card.data.images.original.url,
          alt: card.data.title,
          title: card.data.title,
          author: card.data.user,
        });
        setIsLoading(false);
		  });
	}

	React.useEffect(() => {
		handleNewRandomGif();
	}, []);

	return (
		<div className="card_type_random-view" onClick={handleNewRandomGif}>
			{ isLoading ? (<div>Загружаю...</div>)
        : (<Card key={randomCard.id} {...randomCard} />)}
		</div>
	);
}

export default RandomCard;
