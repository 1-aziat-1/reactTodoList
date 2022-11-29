import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import {Header} from './components/Header/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== id) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      )
    );
  };

  return (
    <div className='App'>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => addTodo()}>Add Todo</button>
      </label>
      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoComplete(todo.id)}
              />
              <span>{todo.text}</span>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>&#10007;</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}


export default App;
