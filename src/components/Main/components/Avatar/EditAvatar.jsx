function EditAvatar() {
  return (
    <form id="fotoPerfil" className="popup__form">
      <fieldset className="popup__fieldset">
        <input
          type="url"
          id="avatarImg"
          name="url"
          placeholder="Url de la imagen"
          className="popup__input"
          required
          minLength="2"
        />
        <span className="popup__error" id="avatar-error"></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <button className="popup__button-save" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}

export default EditAvatar;
