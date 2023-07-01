import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import api from '../utils/api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [cardList, setCardList] = React.useState([]);
	const [isSubmitted, setIsSubmitted] = React.useState(null);

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
				setIsSubmitted(false);
				setSearchQuery('');
			});
		}
	}, [searchQuery, isSubmitted]);

	// function search(query) {
	// 	api.searchGif(query).then((response) =>
	// 		setCardList(
	// 			response.data.map((card) => ({
	// 				id: card.id,
	// 				src: card.url,
	// 				alt: card.title,
	// 				title: card.title,
	// 				author: card.user,
	// 			}))
	// 		)
	// 	);
	// }

	// search('apple');

	function handleSubmitSearch(event) {
		event.preventDefault();
		setIsSubmitted(true);
	}

	return (
		<div className="app">
			<Header />
			<Main
				handleChangeImput={setSearchQuery}
				handleSubmitSearch={handleSubmitSearch}
				searchQuery={searchQuery}
				cardList={cardList}
				isSubmitted={isSubmitted}
			/>
			<Footer />
		</div>
	);
}

export default App;
