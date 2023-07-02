import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const location = useLocation();

	return (
		<nav className="navbar">
			<Link
				to="/"
				className={`navbar__link ${
					location.pathname === '/' ? 'navbar__link_selected' : ''
				}`}
			>
				Поиск
			</Link>
			<Link
				to="/trends"
				className={`navbar__link ${
					location.pathname === '/trends' ? 'navbar__link_selected' : ''
				}`}
			>
				Тренды
			</Link>
			<Link
				to="/random-gif"
				className={`navbar__link ${
					location.pathname === '/random-gif' ? 'navbar__link_selected' : ''
				}`}
			>
				Случайный GIF
			</Link>
		</nav>
	);
}

export default Navbar;
