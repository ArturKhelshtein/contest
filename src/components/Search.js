function Search({
	placeholder,
	searchQuery,
	setSearchQuery,
	handleSubmitSearch,
}) {
	function handleInputReset() {
		setSearchQuery('');
	}
	return (
		<form className="search" onSubmit={handleSubmitSearch}>
			<input
				className="search__input"
				type="text"
				name="search"
				placeholder={placeholder}
				onChange={(e) => setSearchQuery(e.target.value)}
				value={searchQuery}
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
		</form>
	);
}

export default Search;
