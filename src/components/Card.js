function Card({ src, alt, title, author, id }) {
	return (
		<article className="card">
			<img className="card__img" src={src} alt={alt} />
			<h2 className="card__name">{title}</h2>
		</article>
	);
}

export default Card;
