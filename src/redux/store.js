

import { configureStore } from '@reduxjs/toolkit'
import housesList from './slices/housesClise'
import personsList from './slices/personsClise'
import valueSearch from './slices/searchClise'


export const store = configureStore({
  reducer: {
    housesList: housesList,
    personsList: personsList,
    valueSearch: valueSearch
  },
})
