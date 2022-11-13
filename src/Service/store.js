import { configureStore } from '@reduxjs/toolkit'
import {authSlice } from '../Service/Reducers/authSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer
  },
})

