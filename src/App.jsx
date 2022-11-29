import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import {Header} from './components/Header/Header';
import { useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleTodoComplete,
} from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  };

  return (
    <div className='App'>
      <Header
        text={text}
        setText={setText}
        addTask={addTask}
      />
      <TodoList
        toggleTodoComplete={toggleTodoComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}


export default App;
