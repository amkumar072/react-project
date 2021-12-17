import './App.css';
import Todo from './component/Todo';

function App() {
  return (
   <div>
     <h1> My Todos</h1>
     <Todo text="Learn React"></Todo>
     <Todo text="Master React"></Todo>
     <Todo text="Experience React"></Todo>

   </div>
  );
}

export default App;
