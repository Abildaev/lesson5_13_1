import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, {dispatch}) {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(addToStateUsers(data))
    }
)

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: []
    },
    reducers: {
        addToStateUsers(state, action) {
            state.users = action.payload
        }
    }

})
export const {addToStateUsers} = usersSlice.actions;
export default usersSlice.reducer;
