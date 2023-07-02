import React from 'react';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import RandomCard from './RandomCard';
import Trends from './Trends';
import ReactPaginate from 'react-paginate';

function App() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [cardList, setCardList] = React.useState([]);
	const [isSubmitted, setIsSubmitted] = React.useState(null);

	const [pageCurrent, setPageCurrent] = React.useState(0)
	const [pageCount, setPageCount] = React.useState([]);
	const [cardsPerPage, setCardsPerPage] = React.useState(12)

	React.useEffect(() => {
		if (isSubmitted) {
			api.searchGif(searchQuery).then((response) => {
				setCardList(
					response.data.map((card) => ({
						id: card.id,
						src: card.images.downsized.url,
						alt: card.title,
						title: card.title,
						author: card.user,
					}))
				);
				setPageCount(Math.ceil(response.pagination.total_count / response.pagination.count));
				setIsSubmitted(false);
				setSearchQuery('');
			});
		}
	}, [searchQuery, isSubmitted]);

	// pageSelected: page.offset + 1,


	function handleSubmitSearch(event) {
		event.preventDefault();
		setIsSubmitted(true);
	}

	return (
		<div className="app">
			<Header />
      <Routes>
        <Route path="/" element={
          <Main
            handleChangeImput={setSearchQuery}
            handleSubmitSearch={handleSubmitSearch}
            searchQuery={searchQuery}
            cardList={cardList}
            isSubmitted={isSubmitted}
            pageCount={pageCount}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            cardsPerPage={cardsPerPage}
          />
        }/>
        <Route path="/trends" element={
          <Trends
            cardList={cardList}
            setCardList={setCardList}
          />
        }
        />
        <Route path="/random-gif" element={
          <RandomCard
          />
        }/> 
      </Routes>
			
			<Footer />
		</div>
	);
}

export default App;
