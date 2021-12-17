function Todo(prop) {

    function deleteHandler(){
        console.log('Clicked');
        console.log(prop.text)
    }

  return (
    <div className="card">
      <h2>{prop.text}</h2>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
