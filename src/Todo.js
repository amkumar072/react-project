function Todo(prop) {
  return (
    <div className="card">
      <h2>{prop.text}</h2>

      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
