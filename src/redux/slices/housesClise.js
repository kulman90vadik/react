

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  housesList: [],
  // slug: ''
} 

export const housesClise = createSlice({
  name: 'housesList',
  initialState,

  reducers: {
    addToHouses: (state, obj) => {   
      state.housesList = obj.payload;
    },
    // addSlugHous: (state, str) => {   
    //   state.slug = str.payload;
    // }
    // updateSearchValue: (state, value) => {
    //   state.valueSearch = value.payload
    // },
    // closeSearchHandler: (state) => {
    //   state.valueSearch = ''
    // }
  },
})

export const { housesList, addToHouses } = housesClise.actions

export default housesClise.reducer