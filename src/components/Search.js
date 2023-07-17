import QuantityCardPerPage from './QuantityCardPerPage';

function Search({
  placeholder,
  searchQuery,
  setSearchQuery,
  handleSubmitSearch,
  handleChangeCardPerPage,
  isLight,
}) {
  function handleInputReset() {
    setSearchQuery('');
  }
  return (
    <form className="search" onSubmit={handleSubmitSearch}>
      <input
        className={`search__input ${
          isLight ? `search__input_theme_light` : ``
        }`}
        type="text"
        name="search"
        placeholder={placeholder}
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery || ''}
        autoComplete="off"
        required
      ></input>
      <button
        className="search__button search__button_type_reset"
        aria-label="сбросить поиск"
        type="reset"
        onClick={handleInputReset}
      ></button>
      <button
        className="search__button search__button_type_submit"
        aria-label="начать поиск"
        type="submit"
      ></button>
      <QuantityCardPerPage handleChangeCardPerPage={handleChangeCardPerPage} />
    </form>
  );
}

export default Search;
