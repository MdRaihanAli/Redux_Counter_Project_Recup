import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feauters/counterSlices'
const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export default store