import React from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import logo from '../image/logo/logo.gif';

const date = new Date();

function App() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [cards, setCards] = React.useState([]);
	const [isLoading, setLoading] = React.useState(false);

	// React.useEffect(() => {
	// 	setLoading(true);
	// 	api.searchGif(searchQuery).then((data) => console.log(data));
	// }, [searchQuery]);

	function trend() {
		api.trendGif().then((data) => console.log(data));
	}

	function search(query) {
		api.searchGif(query).then((data) => console.log(data))
	}

	return (
		<div className="app">
			<header className="header">
				<Link to="https://giphy.com/" className="logo__container-header">
					<img className="logo__img" src={logo} alt="logo" />
				</Link>
				<nav className="navbar">
					<Link to="/" className="navbar__link navbar__link_selected">
						Поиск
					</Link>
					<Link to="/" className="navbar__link">
						Тренды
					</Link>
					<Link to="/" className="navbar__link">
						Случайный гиф
					</Link>
				</nav>
			</header>
			<main className="main">
				<form className="search">
					<input
						className="search__input"
						type="text"
						name="search"
						placeholder="Поле поиска"
						required
					></input>
					<button
						className="search__button search__button_type_reset"
						aria-label="сбросить поиск"
						type="reset"
					></button>
					<button
						className="search__button search__button_type_submit"
						aria-label="начать поиск"
						type="submit"
					></button>
				</form>
				<section className="card">
					<article className="card__container">
						<img className="card__img" />
						<h2 className="card__name">название карточки</h2>
					</article>
				</section>
				<ol className="pagination">
					<li className="pagination__element pagination__element_selected">
						1
					</li>
					<li className="pagination__element">2</li>
				</ol>
			</main>
			<footer className="footer">
				<p className="footer__copyright">
					© {date.getFullYear()} Contest project by Artur Khelshtein &
					Anastasiya Pashkova
				</p>
			</footer>
		</div>
	);
}

export default App;
