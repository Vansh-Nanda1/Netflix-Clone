import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers :  {
     tooglegptSearchView : (state) =>{
        state.showGptSearch = !state.showGptSearch
     }
    }
})
export const  {tooglegptSearchView} = gptSlice.actions
export default gptSlice.reducer