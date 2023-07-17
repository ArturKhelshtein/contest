function Card({ src, alt, title, author, id }) {
  return (
    <article className="card">
      <img className="card__img" src={src} alt={alt} />
    </article>
  );
}

export default Card;
