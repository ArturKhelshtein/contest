import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar__link navbar__link_selected">
				Поиск
			</Link>
			<Link to="/trends" className="navbar__link">
				Тренды
			</Link>
			<Link to="/random-gif" className="navbar__link">
				Случайный гиф
			</Link>
		</nav>
	);
}

export default Navbar;
