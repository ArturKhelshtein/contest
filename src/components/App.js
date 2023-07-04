import React from 'react';
import {
	Route,
	Routes,
	useSearchParams,
	useNavigate,
	Navigate,
	useLocation,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Trends from './Trends';
import RandomCard from './RandomCard';
import NotFound from './NotFound';
import ThemeToggle from './ThemeToggle';

function App() {
	const [cardList, setCardList] = React.useState([]);
	const [isSubmittedQuery, setIsSubmittedQuery] = React.useState(false);
	const [isSubmittedTrends, setIsSubmittedTrends] = React.useState(false);

	const [pageCurrent, setPageCurrent] = React.useState(-1);
	const [pageOffset, setPageOffset] = React.useState(0);
	const [pageCount, setPageCount] = React.useState(0);
	const [cardsPerPage, setCardsPerPage] = React.useState(12);
	//массив со всеми номерами страниц
	const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

	const navigate = useNavigate();
	const location = useLocation();

	const [searchParams, setSearchParams] = useSearchParams();

  const [isLight, setIsLight] = React.useState(false);

  function handleChangeTheme() {
    setIsLight(!isLight);
  }

	function handlePaginationClick(event) {
		setPageOffset((event.selected * cardsPerPage) % pageNumbers.length);
		setIsSubmittedQuery(true);
		setIsSubmittedTrends(true);
		setPageCurrent(event.selected);
		// setSearchParams(`?q=${searchParams.getAll('q')}&offset=${event.selected + 1}`, {
		// 	replace: true,
		// })
	}
	
	function handleChangeCardPerPage(event) {
		setCardsPerPage(event.target.value);
		setPageCurrent(0);
		if (searchParams.get('q')) {
			setIsSubmittedQuery(true);
		} else {
			setPageCurrent(0);
		}
		setIsSubmittedTrends(true);
		setSearchParams(`?q=${searchParams.getAll('q')}&limit=${event.target.value}`, {
			replace: true,
		})
	}

	return (
    <div className={`ground ${isLight ? `ground_theme_light` : ``}`}>
      <div className="app">
      <ThemeToggle onClick={handleChangeTheme}/>
			<Header
				setCardList={setCardList}
				setPageCount={setPageCount}
				setPageOffset={setPageOffset}
			/>
			<Routes>
				<Route
					path="/search"
					element={
						<Main
              isLight={isLight}
							isSubmittedQuery={isSubmittedQuery}
							setIsSubmittedTrends={setIsSubmittedTrends}
							setIsSubmittedQuery={setIsSubmittedQuery}
							cardList={cardList}
							setCardList={setCardList}
							pageCount={pageCount}
							setPageCount={setPageCount}
							cardsPerPage={cardsPerPage}
							handlePaginationClick={handlePaginationClick}
							pageOffset={pageOffset}
							setPageOffset={setPageOffset}
							pageCurrent={pageCurrent}
							setPageCurrent={setPageCurrent}
							handleChangeCardPerPage={handleChangeCardPerPage}
						/>
					}
				/>
				<Route
					path="/trends"
					element={
						<Trends
							isSubmittedTrends={isSubmittedTrends}
							setIsSubmittedTrends={setIsSubmittedTrends}
							setIsSubmittedQuery={setIsSubmittedQuery}
							cardList={cardList}
							setCardList={setCardList}
							pageCount={pageCount}
							setPageCount={setPageCount}
							cardsPerPage={cardsPerPage}
							handlePaginationClick={handlePaginationClick}
							pageOffset={pageOffset}
							handleChangeCardPerPage={handleChangeCardPerPage}
						/>
					}
				/>
				<Route path="/random-gif" element={<RandomCard />} />
				<Route
					exact
					path="/"
					element={<Navigate to="/search" replace={true} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
    </div>
		
	);
}

export default App;
