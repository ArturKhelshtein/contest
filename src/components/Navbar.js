import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ isLight, setCardList, setPageCount, setPageOffset }) {
  const location = useLocation();

  React.useEffect(() => {
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
            ? isLight
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : isLight
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
            ? isLight
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : isLight
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
            ? isLight
              ? `navbar__link_selected_theme_light navbar__link_theme_light`
              : 'navbar__link_selected'
            : isLight
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
