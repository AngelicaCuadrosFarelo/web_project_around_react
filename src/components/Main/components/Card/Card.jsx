import ImagePopup from "../ImagePopup/ImagePopup";
import trash from "../../../../images/Trash.svg";
import like from "../../../../images/like.svg";

function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = {
    children: <ImagePopup card={{ name, link }} />,
  };
  return (
    <li id="openImage" className="card">
      <div className="card__content">
        <img src={trash} alt="Trash" className="card__trash" />
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
          <img src={like} alt="me encanta" className="card__like-button" />
        </div>
      </div>
    </li>
  );
}

export default Card;
