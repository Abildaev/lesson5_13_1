import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const getPost = createAsyncThunk(
    'getPost',
    async function(id, {dispatch}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        const data = await response.json();

       dispatch(postInfo(data))
    }
)


const postSlice = createSlice({
    name: "PostSlice",
    initialState: {
        post: {}
    },
    reducers: {
        postInfo(state, action) {
            state.post = action.payload
        }
    }
})

export const {postInfo} = postSlice.actions;
export default postSlice.reducer;