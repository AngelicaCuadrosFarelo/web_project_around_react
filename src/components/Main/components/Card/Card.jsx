import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import trash from "../../../../images/Trash.svg";
import like from "../../../../images/like.svg";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup, onCardLike, onCardDelete } = props;

  const imageComponent = {
    children: <ImagePopup card={{ name, link }} />,
  };

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-black" : ""
  }`;
  const handleDeleteClick = () => {
    onCardDelete();
  };
  const handleLikeClick = () => {
    onCardLike();
  };
  return (
    <li id="openImage" className="card">
      <div className="card__content">
        <img
          src={trash}
          alt="Trash"
          onClick={handleDeleteClick}
          className="card__trash"
        />
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
            onClick={handleLikeClick}
            src={like}
            alt="me encanta"
            className={cardLikeButtonClassName}
          />
        </div>
      </div>
    </li>
  );
}

export default Card;
