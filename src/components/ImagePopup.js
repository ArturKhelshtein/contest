function ImagePopup({card, onClose}) {
  return (
    <div className={`popup image-popup ${card.link ? `popup_opened` : ``}`}>
      <div className="popup__image-container">
        <button 
          className="popup__close-button" 
          type="button" 
          aria-label="Закрыть"
          onClick={onClose}
        />
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;