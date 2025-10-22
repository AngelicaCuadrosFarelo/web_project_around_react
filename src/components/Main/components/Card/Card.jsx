import ImagePopup from "../ImagePopup/ImagePopup";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = {
    title: "Nuevo lugar",
    children: <ImagePopup card={{ name, link }} />,
  };
  return (
    <li id="openImage" className="card">
      <div className="card__content">
        <img src="images/Trash.svg" alt="Trash" className="card__trash" />
        <img
          onClick={() => handleOpenPopup(imageComponent)}
          src={link}
          alt="valle"
          id="myImage"
          className="card__image"
        />
        <div className="card__description">
          <h2 className="card__text" id="cardtext">
            {name}
          </h2>
          <img
            src="images/like.svg"
            alt="me encanta"
            className="card__like-button"
          />
        </div>
      </div>
    </li>
  );
}

export default Card;
