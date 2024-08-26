import { createSlice } from "@reduxjs/toolkit";
//import {addPopularMovies} from '../utils/'

const popularSlice = createSlice({
    name: "popularData",
    initialState:{
        popularData:[],
    },
    reducers: {
        addPopularMovies:(state,action) => {
            state.popularData = action.payload;
        },
    }
})

export const { addPopularMovies } = popularSlice.actions;
export default popularSlice.reducer;