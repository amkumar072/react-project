function Modal(prop) {
  function cancelHandler() {
    prop.onCancel();
  }

  function confirmHandler() {
    prop.onConfirm();
  }

  return (
    <div className="modal">
      <h2>Are you Sure?</h2>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
