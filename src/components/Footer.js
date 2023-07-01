function Footer() {
	const date = new Date();

	return (
		<footer className="footer">
			<p className="footer__copyright">
				© {date.getFullYear()} Contest project by Artur Khelshtein & Anastasiya
				Pashkova
			</p>
		</footer>
	);
}

export default Footer;
