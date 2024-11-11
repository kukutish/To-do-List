import {createSlice} from '@reduxjs/toolkit';
import {loadState} from "../utils/localStorage.js";

const preloadedState = loadState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: preloadedState || [],
  reducers: {
    taskAdded(state, action) {
      state.push(action.payload)
    },
    updateStatus(state, action) {
      const {id, newStatus} = action.payload
      const variableTask = state.find(task => task.id === id);
      variableTask.status = newStatus
    },
    tasksDeleted(state, action) {
      state.forEach((elem) => {
        if (elem.status !== 'delete') elem.status = 'delete'
      })
    },
    taskDeletedForever(state, action) {
      const {id} = action.payload;
      return state.filter(task => task.id !== id);
    },
  }
});

export const {taskAdded, updateStatus, tasksDeleted, taskDeletedForever} = tasksSlice.actions
export default tasksSlice.reducer
