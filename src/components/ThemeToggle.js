import iconTheme from '../image/theme.svg';

function ThemeToggle({ handleChangeTheme }) {
  return (
    <div className="theme">
      <button className="theme__button" onClick={handleChangeTheme}>
        <img src={iconTheme} alt="theme button" className="theme__icon" />
      </button>
    </div>
  );
}

export default ThemeToggle;
