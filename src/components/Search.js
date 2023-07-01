				function Search({ placeholder, searchQuery, handleChangeImput, handleSubmitSearch }) {
	return (
		<form className="search" onSubmit={handleSubmitSearch}>
			<input
				className="search__input"
				type="text"
				name="search"
				placeholder={placeholder}
				onChange={(e) => handleChangeImput(e.target.value)}
				value={searchQuery}
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
	);
}

export default Search;
