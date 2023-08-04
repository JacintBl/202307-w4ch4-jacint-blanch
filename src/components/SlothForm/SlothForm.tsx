const SlothForm = (): React.ReactElement => {
  return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input type="text" className="input__form" id="name" />

      <label htmlFor="URL of picture">Picture URL: </label>
      <input type="url" className="input__form id=" id="url" />

      <label htmlFor="fingers">Fingers: </label>
      <input type="number" className="input__form" id="fingers" />

      <button type="submit" className="form__button">
        Add a sloth
      </button>
    </form>
  );
};

export default SlothForm;
