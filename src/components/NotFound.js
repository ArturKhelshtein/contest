import React from 'react';
import api from '../utils/api';
import Card from './Card';

function NotFound() {
  const [notFoundCard, setNotFoundCard] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let pageTotalCount = 0;
    api
      .searchGif({ query: 404, limit: 1 })
      .then((result) => {
        pageTotalCount = result.pagination.total_count;
        return Math.ceil(Math.random() * pageTotalCount);
      })
      .then((result) => {
        api.searchGif({ query: 404, limit: 1, offset: result }).then((card) => {
          setNotFoundCard({
            id: card.data[0].id,
            src: card.data[0].images.downsized.url,
            alt: card.data[0].title,
            title: card.data[0].title,
            author: card.data[0].user,
          });
          setIsLoading(false);
        });
      });
  }, []);

  return (
    <main className="main">
      <h2 className="not-found__title">
        Что-то пошло не так...
        <br />
        Выберите один из пунктов меню выше
      </h2>
      <div className="card_type_one-card">
        {isLoading ? (
          <div>Загружаю...</div>
        ) : (
          <Card key={notFoundCard.id} {...notFoundCard} />
        )}
      </div>
    </main>
  );
}

export default NotFound;
