import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, done: false, important: false });
    },
    toggleDone: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.done = !task.done;
    },
    toggleImportant: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.important = !task.important;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) task.text = action.payload.text;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleDone, toggleImportant, deleteTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
