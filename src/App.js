import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
   <div>
     <h1> My Todos</h1>
     <Todo text="Learn React"></Todo>
     <Todo text="Master React"></Todo>
     <Todo text="Experiecne React"></Todo>
   </div>
  );
}

export default App;
