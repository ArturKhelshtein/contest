import { Link } from 'react-router-dom';
import logo from '../image/logo/logo.gif';
import Navbar from './Navbar';

function Header({ setCardList }) {
	return (
		<header className="header">
			<Link to="https://giphy.com/" className="logo__container-header">
				<img className="logo__img" src={logo} alt="logo" />
			</Link>
			<Navbar setCardList={setCardList} />
		</header>
	);
}

export default Header;
