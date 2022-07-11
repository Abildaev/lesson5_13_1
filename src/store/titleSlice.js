import {createSlice} from "@reduxjs/toolkit";


const titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: "i am initial state title"
    },
    reducers: {
        changeTitle(state, action) {
            state.title = "I am new title"
        },
        changeTitleWithParams(state, action){
            state.title = action.payload
        }
    }
})

export const {changeTitle, changeTitleWithParams} = titleSlice.actions;
export default titleSlice.reducer;