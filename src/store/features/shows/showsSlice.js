import ajax from "../../../api/ajax"
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// /genre/tv/list
export const getShowList = createAsyncThunk("get/shows", 
    async (arg,thunkAPI) => {
        try {
            const res = await ajax.get("/discover/tv")
            return res.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const showSlice = createSlice({
    name: "shows",
    initialState : {
        shows : []
    },
    reducers :{},
    extraReducers: {
        [getShowList.fulfilled] : (state, {payload}) => {
            state.shows = payload;
        }
    }
})

export default showSlice.reducer;