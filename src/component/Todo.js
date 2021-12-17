import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(prop) {

  const [modalIsOpen, setModalIsOpen]= useState(false);

    function deleteHandler(){
      setModalIsOpen(true);
    }

  return (
    <div className="card">
      <h2>{prop.text}</h2>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>

      {modalIsOpen && <Modal/>}
      {modalIsOpen && <Backdrop/>}
    </div>
  );
}

export default Todo;
