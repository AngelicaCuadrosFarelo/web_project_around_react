import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditAvatar from "./components/Avatar/EditAvatar";
import EditProfile from "./components/EditProfile/EditProfile";
import avatar from "../../images/JacquesCousteau.jpg";
import lapiz from "../../images/lapiz.svg";
import add from "../../images/add.svg";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopop = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img src={avatar} alt="avatar" className="profile__image" />
          <div
            onClick={() => handleOpenPopup(editAvatarPopop)}
            id="btnAvatar"
            className="profile__edit"
          >
            <img
              src={lapiz}
              alt="changeImage"
              className="profile__edit profile__edit-avatar"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <p className="profile__subtitle">Explorador</p>
        </div>

        <button
          onClick={() => handleOpenPopup(editProfilePopup)}
          id="openBtn"
          className="profile__button-edit"
        >
          <img src={lapiz} alt="Editar" className="profile__ico" />
        </button>
        <div id="addBtn" className="profile__button">
          <button
            onClick={() => handleOpenPopup(newCardPopup)}
            className="profile__button-add"
          >
            <img src={add} alt="add" className="profile__button-ico" />
          </button>
        </div>
      </section>
      <section className="elements">
        <ul className="elements__card">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
