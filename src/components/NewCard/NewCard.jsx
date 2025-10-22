function NewCard() {
  return (
    <form id="formAdd" className="popup__form">
      <fieldset className="popup__fieldset">
        <input
          type="text"
          id="title"
          name="titulo"
          placeholder="Titulo"
          className="popup__input"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error" id="title-error"></span>

        <input
          type="url"
          name="enlace"
          id="url"
          placeholder="URL de la imagen"
          className="popup__input"
          required
        />
        <span className="popup__error" id="url-error"></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <button
          id="saveBtn"
          className="popup__button-save"
          type="submit"
          disabled
        >
          Crear
        </button>
      </fieldset>
    </form>
  );
}

export default NewCard;
