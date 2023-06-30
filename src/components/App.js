import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo/logo.gif';

const date = new Date();

function App() {
	return (
		<div className="app">
			<header className="header">
				<Link to="https://giphy.com/" className="logo__container-header">
					<img className="logo__img" src={logo} alt="logo" />
				</Link>
				<nav className="navbar">
					<Link to="/" className="navbar__link">
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
			</main>
			<footer className="footer">
				<p className='footer__copyright'>© {date.getFullYear()} Contest project by Artur Khelshtein & Anastasiya Pashkova</p>
			</footer>
		</div>
	);
}

export default App;
