import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../store/todoSlice';
import _ from './BtnChecked.module.css';

export const BtnChecked = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <button
      className="delete"
      onClick={() => dispatch(deleteTodo(todo.id))}>&#10007;
    </button>
  );
};
