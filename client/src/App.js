import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return <div className='app'>
    <InputTodo />
    <ListTodos/>
  </div>;
}

export default App;
