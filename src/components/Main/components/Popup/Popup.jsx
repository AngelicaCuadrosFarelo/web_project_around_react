export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;
  return (
    <div id="overlayadd" className="popup">
      <div className={"popup__container"} id="popupcontaineradd">
        <button
          onClick={onClose}
          type="button"
          id="deleteBtn"
          className="popup__button-close"
        >
          &#10006;
        </button>
        {title && <h2 className="popup__title">{title} </h2>}
        {children}
      </div>
    </div>
  );
}
