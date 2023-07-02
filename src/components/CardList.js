import Card from './Card';

function CardList({ isSubmitted, cardList }) {
	return (
		<section className="card-list">
			{isSubmitted ? (
				<div>Загружаю...</div>
			) : (
				cardList.map((card, index) => (
					<Card key={`${card.id}${index}`} {...card} />
				))
			)}
		</section>
	);
}

export default CardList;
