import _ from './Header.module.css';

export const Header = ({text, setText, addTask}) => {
  console.log();
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={addTask}>Add Todo</button>
    </label>
  );
};


