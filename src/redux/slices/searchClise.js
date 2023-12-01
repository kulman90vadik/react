
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  valueSearch: ''
}

export const searchClise = createSlice({
  name: 'valueSearch',
  initialState,

  reducers: {
    updateSearchValue: (state, value) => {
      state.valueSearch = value.payload
    },
    updateSearchValuePersons: (state, value) => {
      state.valueSearch = value.payload
    },
    closeSearchHandler: (state) => {
      state.valueSearch = ''
    }
  },
})

export const { valueSearch, closeSearchHandler, updateSearchValue, updateSearchValuePersons } = searchClise.actions

export default searchClise.reducer

