
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './Slices/Slices';

const store = configureStore({
    reducer: {
        todos: appSlice.reducer  // Use 'reducer' for individual slices
    }
});

export default store;
