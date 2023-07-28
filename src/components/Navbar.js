import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from './App'

function Navbar({ setCardList, setPageCount, setPageOffset }) {
  const location = useLocation();
	const theme = useContext(ThemeContext);

  useEffect(() => {
    setCardList([]);
    setPageCount(0);
    setPageOffset(0);
  }, [location]);

  return (
    <nav className="navbar">
      <Link
        to="/search"
        className={`navbar__link ${
          location.pathname === '/search'
            ? theme === 'light'
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : theme === 'light'
            ? 'navbar__link_theme_light'
            : ''
        } `}
      >
        Поиск
      </Link>
      <Link
        to="/trends"
        className={`navbar__link ${
          location.pathname === '/trends'
            ? theme === 'light'
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : theme === 'light'
            ? 'navbar__link_theme_light'
            : ''
        } `}
      >
        Тренды
      </Link>
      <Link
        to="/random-gif"
        className={`navbar__link ${
          location.pathname === '/random-gif'
            ? theme === 'light'
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : theme === 'light'
            ? 'navbar__link_theme_light'
            : ''
        } `}
      >
        Случайный GIF
      </Link>
    </nav>
  );
}

export default Navbar;
