import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../feature/counter/counterSlice'
import {googleMapReducer} from '../feature/googlemap/googleMapSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    googlMap: googleMapReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch