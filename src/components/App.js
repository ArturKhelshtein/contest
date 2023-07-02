import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
	const [cardList, setCardList] = React.useState([]);

	return (
		<div className="app">
			<Header setCardList={setCardList} />
			<Main cardList={cardList} setCardList={setCardList} />
			<Footer />
		</div>
	);
}

export default App;
