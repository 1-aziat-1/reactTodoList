import _ from './Header.module.css';

export const Header = ({text, setText, addTodo}) => {
  console.log();
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => addTodo()}>Add Todo</button>
    </label>
  );
};
