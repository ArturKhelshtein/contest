import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';

function Main({
	handleChangeImput,
	handleSubmitSearch,
	searchQuery,
	cardList,
	isSubmitted,
 }) {
	return (
		<main className="main">
			<Search
				placeholder="Найдем GIF !!!"
				searchQuery={searchQuery}
				handleChangeImput={handleChangeImput}
				handleSubmitSearch={handleSubmitSearch}
			/>
			<section className="card-list">
				{isSubmitted ? (
					<div>Загружаю...</div>
				) : (
					cardList.map((card) => <Card key={card.id} {...card} />)
				)}
			</section>
			 <Pagination />
		</main>
	);
}

export default Main;
