import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, setFilter } from '../features/tasks/tasksSlice';

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new task" />
        <button type="submit">Add Task</button>
      </form>
      <div className="filters">
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('active'))}>Active</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('important'))}>Important</button>
      </div>
    </div>
  );
};

export default TaskForm;
