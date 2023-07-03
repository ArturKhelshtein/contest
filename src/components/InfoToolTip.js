function InfoToolTip({title, toolTipImg, isOpen, onClose}) {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ``}`}>
          <div className="popup__container">
            <button 
              className="popup__close-button" 
              type="button" 
              aria-label="Закрыть" 
              onClick={onClose}
            />
            <img className="popup__info-img" src={toolTipImg}/>
            <div className="popup__title">{title}</div>
          </div>
    </div>
  )
}

export default InfoToolTip;