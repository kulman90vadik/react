
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  personsList: []
}

export const personsClise = createSlice({
  name: 'personsList',
  initialState,

  reducers: {
    addToPersons: (state, obj) => {   
      state.personsList = obj.payload;
    },
   
    // closeSearchHandler: (state) => {
    //   state.search = ''
    // }
  },
})

export const { personsList, addToPersons } = personsClise.actions

export default personsClise.reducer

