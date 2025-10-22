function EditProfile() {
  return (
    <form id="miFormulario" className="popup__form">
      <fieldset className="popup__fieldset">
        <input
          type="text"
          id="name"
          name="nombre"
          placeholder="Nombre"
          className="popup__input"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error" id="name-error"></span>

        <input
          type="text"
          name="Acerca de mi"
          id="job"
          placeholder="Acerca de mi"
          className="popup__input"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="job-error"></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <button className="popup__button-save" type="submit" disabled>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}

export default EditProfile;
