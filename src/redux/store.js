

import { configureStore } from '@reduxjs/toolkit'
import housesList from './slices/housesClise'


export const store = configureStore({
  reducer: {
    housesList: housesList
  },
})
