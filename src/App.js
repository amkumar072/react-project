import './App.css';
import Backdrop from './component/Backdrop';
import Modal from './component/Modal';
import Todo from './component/Todo';

function App() {
  return (
   <div>
     <h1> My Todos</h1>
     <Todo text="Learn React"></Todo>
     <Todo text="Master React"></Todo>
     <Todo text="Experience React"></Todo>

     <Modal/>
     <Backdrop/>
   </div>
  );
}

export default App;
