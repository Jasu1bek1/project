import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, toggleImportant, deleteTask } from '../features/tasks/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task ${task.done ? 'done' : ''} ${task.important ? 'important' : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => dispatch(toggleDone(task.id))}>Done</button>
      <button onClick={() => dispatch(toggleImportant(task.id))}>Important</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
