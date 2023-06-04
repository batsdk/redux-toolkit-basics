import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ajax from  "../../../api/ajax"

export const getPopularMovies = createAsyncThunk("movies/popular",
    async (_,thunkAPI) => {
        try {
            const {data} = await ajax.get("/movie/popular?language=en-US&page=1")
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        popularMovies : []
    },
    reducers : {},
    extraReducers:{
        [getPopularMovies.fulfilled]: (state, {payload})=>{
            state.popularMovies = payload.results;
        }
    },
})

export default movieSlice.reducer;