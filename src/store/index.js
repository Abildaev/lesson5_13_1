import {configureStore} from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import usersReducer from "./usersSlice";
import postReducer from "./postSlice";


export default configureStore({
    reducer: {
        titleReducer,
        usersReducer,
        postReducer
    }
})