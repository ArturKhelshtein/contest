import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../utils/api';
import Search from './Search';
import CardList from './CardList';
import Pagination from './Pagination';
import InfoToolTip from './InfoToolTip';
import Fail from '../image/Fail.svg';

function Main({
  isSubmittedQuery,
  setIsSubmittedTrends,
  setIsSubmittedQuery,
  cardList,
  setCardList,
  pageCount,
  setPageCount,
  cardsPerPage,
  handlePaginationClick,
  pageOffset,
  setPageOffset,
  pageCurrent,
  setPageCurrent,
  handleChangeCardPerPage,
}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isFailToolTipOpen, setIsFailToolTipOpen] = React.useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  function handleFailToolTip() {
    setIsFailToolTipOpen(true);
  }

  function handleCloseInfoToolTip() {
    setIsFailToolTipOpen(false);
  }

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseInfoToolTip();
      }
    };
    window.addEventListener('keydown', close);
    window.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        handleCloseInfoToolTip();
      }
    });
    return () => window.removeEventListener('keydown', close);
  }, []);

  function handleSearchGif() {
    if (searchParams.get('q') !== null) {
			console.log(searchParams)
      api
        .searchGif({
          query: searchParams.get('q'),
          limit: cardsPerPage,
          offset: pageOffset,
        })
        .then((response) => {
          setCardList(
            response.data.map((card) => ({
              id: card.id,
              src: card.images.downsized.url,
              alt: card.title,
              title: card.title,
              author: card.user,
            }))
          );
          if (pageOffset === 0) setPageCurrent(0);
          if (response.pagination.total_count !== 0) {
            setPageCount(
              Math.ceil(
                response.pagination.total_count / response.pagination.count
              )
            );
          } else {
            setPageCurrent(-1);
            setSearchQuery('');
            setPageCount(0);
            handleFailToolTip();
            navigate(`/search`, {
              replace: true,
            });
          }
          setIsSubmittedQuery(false);
          setSearchQuery('');
        });
    }
  }

  React.useEffect(() => handleSearchGif(), []);

  React.useEffect(() => {
    setIsSubmittedTrends(false);
    if (searchParams.get('q') === null) {
      setPageCurrent(-1);
    }
    if (isSubmittedQuery) {
      handleSearchGif();
    }
  }, [isSubmittedQuery, cardsPerPage, searchParams]);

  function handleSubmitSearch(event) {
    event.preventDefault();
    setPageOffset(0);
    setIsSubmittedQuery(true);
    navigate(`?q=${searchQuery}`, { replace: true });
  }

  return (
    <main className="main">
			<InfoToolTip
				title={
					<>
						<p className="popup__text">Упс... ничего нет!</p>
					</>
				}
				toolTipImg={Fail}
				isOpen={isFailToolTipOpen}
				onClose={handleCloseInfoToolTip}
			/>
      <Search
        placeholder="Найдем GIF !!!"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCardPerPage={handleChangeCardPerPage}
      />
      <CardList isSubmitted={isSubmittedQuery} cardList={cardList} />
      <Pagination
        pageCount={pageCount}
        handlePaginationClick={handlePaginationClick}
        pageCurrent={pageCurrent}
      />
    </main>
  );
}

export default Main;
