function ImagePopup(props) {
  const { name, link } = props.card;

  return (
    <div className="popup__container-window" id="popupcontainerwindow">
      <img
        className="popup__image"
        id="windowImage"
        src={link}
        alt="Imagen ampliada"
      />
      <button className="popup__button-close" id="closewindow">
        &#10006;
      </button>

      <p className="popup__text" id="imagetitle">
        {name}
      </p>
    </div>
  );
}

export default ImagePopup;
