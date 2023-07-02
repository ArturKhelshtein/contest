import React from 'react';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/api';
import { QueryContext } from '../context/QueryContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import RandomCard from './RandomCard';
import Trends from './Trends';

function App() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [cardList, setCardList] = React.useState([]);
	const [isSubmitted, setIsSubmitted] = React.useState(null);

	const [pageCurrent, setPageCurrent] = React.useState(0);
	const [pageCount, setPageCount] = React.useState([]);
	const [cardsPerPage, setCardsPerPage] = React.useState(12);

	React.useEffect(() => {
		if (isSubmitted) {
			api
				.searchGif({ query: searchQuery, offset: pageCurrent })
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
					setPageCount(
						Math.ceil(
							response.pagination.total_count / response.pagination.count
						)
					);
					setIsSubmitted(false);
					//setSearchQuery('');
				});
		}
	}, [searchQuery, isSubmitted]);

	function handleSubmitSearch(event) {
		event.preventDefault();
		setIsSubmitted(true);
	}

	return (
		<div className="app">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<QueryContext.Provider value={searchQuery}>
							<Main
								handleChangeImput={setSearchQuery}
								handleSubmitSearch={handleSubmitSearch}
								cardList={cardList}
								isSubmitted={isSubmitted}
								setIsSubmitted={setIsSubmitted}
								pageCount={pageCount}
								pageCurrent={pageCurrent}
								setPageCurrent={setPageCurrent}
								cardsPerPage={cardsPerPage}
							/>
						</QueryContext.Provider>
					}
				/>
				<Route
					path="/trends"
					element={<Trends cardList={cardList} setCardList={setCardList} />}
				/>
				<Route path="/random-gif" element={<RandomCard />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
