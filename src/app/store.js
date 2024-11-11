import {configureStore} from '@reduxjs/toolkit';
import tasksSlice from "../parts/TasksSlice.js";
import {saveState} from "../utils/localStorage.js";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice
  },
});

store.subscribe(() => {
  saveState(store.getState().tasks);
});

export default store;
