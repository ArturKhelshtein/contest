import ThemeToggle from './ThemeToggle';

function Footer({ handleChangeTheme }) {
	const date = new Date();

	return (
		<footer className="footer">
			<p className="footer__copyright">
				© {date.getFullYear()} Contest project by Artur Khelshtein & Anastasiya
				Pashkova
			</p>
			<ThemeToggle handleChangeTheme={handleChangeTheme} />
		</footer>
	);
}

export default Footer;
