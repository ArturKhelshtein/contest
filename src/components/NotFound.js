import React from "react";
import api from "../utils/api";
import Card from "./Card";

function NotFound() {

  const [notFoundCard, setNotFoundCard] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    api.notFoundGif().then(
      (card) => {
			setNotFoundCard({
				id: card.data.id,
				src: card.data.url,
				alt: card.data.title
			});
			setIsLoading(false);
		});
  }, [])
  

  return (
    <main className="main">
      <h2 className="not-found__title">Что-то пошло не так...<br/>Выберите один из пунктов меню выше</h2>
			<div className="card_type_one-card">
				{isLoading ? (
					<div>Загружаю...</div>
				) : (
					<Card key={notFoundCard.id} {...notFoundCard} />
				)}
			</div>
		</main>
  )
}

export default NotFound;