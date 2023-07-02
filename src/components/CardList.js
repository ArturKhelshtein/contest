import Card from './Card';

function CardList({ isSubmitted, cardList }) {
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

export default CardList;
