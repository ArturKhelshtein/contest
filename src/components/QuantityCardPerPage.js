function QuantityCardPerPage({ handleChangeCardPerPage }) {
	return (
		<div className="search__quantity">
			{/* <div className="search__radio-container">
				<input
					id="radio-1"
					type="radio"
					name="quantity"
					className="search__radio"
					value={1}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-1" className="search__label">
					1
				</label>
			</div>
			<div className="search__radio-container">
				<input
					id="radio-6"
					type="radio"
					name="quantity"
					className="search__radio"
					value={6}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-6" className="search__label">
					6
				</label>
			</div> */}
			<div className="search__radio-container">
				<input
					id="radio-12"
					type="radio"
					name="quantity"
					className="search__radio"
					defaultChecked="true"
					value={12}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-12" className="search__label">
					12
				</label>
			</div>
			<div className="search__radio-container">
				<input
					id="radio-18"
					type="radio"
					name="quantity"
					className="search__radio"
					value={18}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-18" className="search__label">
					18
				</label>
			</div>
			<div className="search__radio-container">
				<input
					id="radio-24"
					type="radio"
					name="quantity"
					className="search__radio"
					value={24}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-24" className="search__label">
					24
				</label>
			</div>
			<div className="search__radio-container">
				<input
					id="radio-48"
					type="radio"
					name="quantity"
					className="search__radio"
					value={48}
					onChange={handleChangeCardPerPage}
				></input>
				<label htmlFor="radio-48" className="search__label">
					48
				</label>
			</div>
		</div>
	);
}

export default QuantityCardPerPage;
