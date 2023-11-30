

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  housesList: [],
  // count: 0,
} 

export const housesClise = createSlice({
  name: 'housesList',
  initialState,

  reducers: {
    addToHouses: (state, obj) => {   
      state.housesList = obj.payload;
    }
  },
})

export const { housesList, addToHouses} = housesClise.actions

export default housesClise.reducer