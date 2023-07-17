import Theme from '../image/theme.svg';

function ThemeToggle({ handleChangeTheme }) {
  return (
    <div className="theme">
      <button className="theme__button" onClick={handleChangeTheme}>
        <img src={Theme} alt="light mode" className="theme__icon" />
      </button>
    </div>
  );
}

export default ThemeToggle;
