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
      <Header
        text={text}
        setText={setText}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}


export default App;
